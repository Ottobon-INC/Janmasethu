// server/db.ts
import pg from "pg";
const { Pool } = pg;

/**
 * Force-accept self-signed certs.
 * (Safe for your internal/dev DB. If you later switch to a managed DB with a real CA,
 *  you can remove this.)
 */
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const url = process.env.DATABASE_URL || "";

// Always pass an SSL object that skips verification.
// This overrides whatever is in the URL (sslmode=...).
export const pool = new Pool({
  connectionString: url,
  ssl: { rejectUnauthorized: false },
});

export async function query<T = any>(text: string, params?: any[]) {
  const client = await pool.connect();
  try {
    const res = await client.query<T>(text, params);
    return res;
  } finally {
    client.release();
  }
}
