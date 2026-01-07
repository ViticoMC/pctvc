import { getTrafficStats } from "@/lib/country-count"
import { Card } from "../ui/card"

const fake_stats = [
    {
        countryCode: "CU",
        visits: 1245,
        createdAt: "2026-01-01T10:12:00Z",
        updatedAt: "2026-01-07T03:45:00Z"
    },
    {
        countryCode: "MX",
        visits: 876,
        createdAt: "2026-01-01T11:00:00Z",
        updatedAt: "2026-01-07T03:30:00Z"
    },
    {
        countryCode: "AR",
        visits: 642,
        createdAt: "2026-01-02T09:20:00Z",
        updatedAt: "2026-01-07T03:10:00Z"
    },
    {
        countryCode: "ES",
        visits: 531,
        createdAt: "2026-01-02T14:45:00Z",
        updatedAt: "2026-01-07T02:55:00Z"
    },
    {
        countryCode: "CO",
        visits: 417,
        createdAt: "2026-01-03T08:10:00Z",
        updatedAt: "2026-01-07T02:40:00Z"
    },
    {
        countryCode: "CL",
        visits: 389,
        createdAt: "2026-01-03T12:30:00Z",
        updatedAt: "2026-01-07T02:20:00Z"
    },
    {
        countryCode: "PE",
        visits: 305,
        createdAt: "2026-01-04T07:55:00Z",
        updatedAt: "2026-01-07T02:00:00Z"
    },
    {
        countryCode: "BR",
        visits: 298,
        createdAt: "2026-01-04T15:40:00Z",
        updatedAt: "2026-01-07T01:45:00Z"
    },
    {
        countryCode: "DE",
        visits: 184,
        createdAt: "2026-01-05T09:05:00Z",
        updatedAt: "2026-01-07T01:30:00Z"
    },
    {
        countryCode: "FR",
        visits: 162,
        createdAt: "2026-01-05T13:25:00Z",
        updatedAt: "2026-01-07T01:10:00Z"
    },
    {
        countryCode: "IT",
        visits: 121,
        createdAt: "2026-01-06T10:00:00Z",
        updatedAt: "2026-01-07T00:50:00Z"
    }
]

export default async function FlagsCounter() {
    // const stats = await getTrafficStats()
    const stats = fake_stats
    return (
        <div className="h-auto bg-background p-4">
            <Card className="min-h-40 h-auto bg-background p-10 flex flex-col items-center justify-center gap-4">
                <h1 className="text-2xl ">
                    Visitas a la web por países
                </h1>
                <div className="grid gap-4 w-full h-auto" style={{
                    gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 80px), 1fr))"

                }}>
                    {stats.map((item) => (
                        <div key={item.countryCode} className="flex flex-col gap-2 items-center ">
                            <img
                                src={`https://flagcdn.com/w40/${item.countryCode.toLowerCase()}.png`}
                                alt={item.countryCode}
                            />
                            <span>{item.visits}</span>
                        </div>
                    ))}

                </div>
            </Card>
        </div>
    )
}
