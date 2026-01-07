import { getCountry, registerVisit } from "@/lib/country-count";

export async function POST() {
  const country = await getCountry();

  await registerVisit(country);

  return Response.json({ ok: true, country });
}
