export interface TrafficRecord {
  id: number;
  country_code: string | null;
  visits: number;
  created_at: Date | null;
  updated_at: Date | null;
}

export interface TrafficStats {
  country_code: string;
  total_visits: number;
  last_updated: Date;
}
