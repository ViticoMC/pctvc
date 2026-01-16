import { headers } from "next/headers";
import type { TrafficRecord, TrafficStats } from "@/type/traffic";

// Obtener la IP del cliente desde los headers
async function getClientIP(): Promise<string | null> {
  const h = await headers();
  // Intentar varios headers comunes
  const ip =
    h.get("x-forwarded-for")?.split(",")[0].trim() ||
    h.get("x-real-ip") ||
    h.get("cf-connecting-ip") || // Cloudflare
    h.get("x-client-ip") ||
    h.get("x-vercel-forwarded-for")?.split(",")[0].trim() ||
    null;

  return ip;
}

// Obtener el país usando un servicio externo de geolocalización
async function getCountryFromIP(ip: string): Promise<string> {
  try {
    // Usar ipapi.co (gratuito, 1000 requests/día sin API key)
    const response = await fetch(`https://ipapi.co/${ip}/country_code/`, {
      next: { revalidate: 3600 }, // Cache por 1 hora
    });

    if (response.ok) {
      const countryCode = await response.text();
      return countryCode.trim();
    }
  } catch (error) {
    console.error("Error obteniendo país desde ipapi.co:", error);
  }

  // Fallback: intentar con ip-api.com
  try {
    const response = await fetch(
      `http://ip-api.com/json/${ip}?fields=countryCode`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data.countryCode || "UNKNOWN";
    }
  } catch (error) {
    console.error("Error obteniendo país desde ip-api.com:", error);
  }

  return "UNKNOWN";
}

export async function getCountry() {
  // 1. Desarrollo local (simulado)
  // if (process.env.NODE_ENV === "development") {
  //   return process.env.DEV_COUNTRY || "CU";
  // }

  // 2. Obtener IP del cliente
  const ip = await getClientIP();

  if (!ip) {
    console.warn("No se pudo obtener la IP del cliente");
    return "UNKNOWN";
  }

  // 3. Obtener país desde servicio externo
  const country = await getCountryFromIP(ip);

  return country;
}

export async function registerVisit(countryCode: string) {
  if (countryCode === "UNKNOWN") return;
  const { query } = await import("@/lib/db");

  try {
    // Intentar insertar o actualizar si ya existe para hoy
    await query(
      `INSERT INTO traffic (country_code, visits, created_at, updated_at) 
       VALUES (?, 1, NOW(), NOW())
       ON DUPLICATE KEY UPDATE 
         visits = visits + 1,
         updated_at = NOW()`,
      [countryCode]
    );
  } catch (error) {
    console.error("Error registrando visita:", error);
  }
}

export async function getTrafficStats(): Promise<TrafficStats[]> {
  const { query } = await import("@/lib/db");

  try {
    const stats = (await query(`
      SELECT 
        country_code,
        SUM(visits) as total_visits,
        MAX(updated_at) as last_updated
      FROM traffic
      WHERE country_code IS NOT NULL
      GROUP BY country_code
      ORDER BY total_visits DESC
    `)) as TrafficStats[];

    return stats;
  } catch (error) {
    console.error("Error obteniendo estadísticas:", error);
    return [];
  }
}
