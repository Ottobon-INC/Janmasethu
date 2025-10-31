
// server/db.ts
import pg from "pg";
const { Pool } = pg;

function sanitize(url: string) {
  // remove accidental 'http://' after the scheme
  return url.replace(/^postgres(ql)?:\/\/http:\/\//i, "postgresql://");
}

const raw = process.env.DATABASE_URL!;
const DATABASE_URL = sanitize(raw);

export const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: process.env.PGSSL === "true" ? { rejectUnauthorized: false } : undefined,
});

export async function query<T = any>(text: string, params?: any[]) {
  const res = await pool.query<T>(text, params);
  return res as unknown as { rows: T[] };
}
