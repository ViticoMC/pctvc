import { headers } from "next/headers";
import { Traffic } from "@/models/Traffic";
import { connectMongo } from "./mongo_db";

export async function getCountry() {
  const h = await headers();

  // 1. Producción / Preview (Vercel)
  const vercelCountry = h.get("x-vercel-ip-country");
  if (vercelCountry) return vercelCountry;

  // 2. Desarrollo local (simulado)
  if (process.env.NODE_ENV === "development") {
    return process.env.DEV_COUNTRY || "CU";
  }

  return "UNKNOWN";
}

export async function registerVisit(countryCode: string) {
  await connectMongo();

  const res = await Traffic.findOneAndUpdate(
    { countryCode },
    { $inc: { visits: 1 } },
    { upsert: true, new: true }
  );
}

export async function getTrafficStats() {
  await connectMongo();

  return Traffic.find().sort({ visits: -1 }).lean();
}
