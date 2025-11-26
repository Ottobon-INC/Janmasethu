
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error("❌ DATABASE_URL is not set. Check your .env file.");
  throw new Error("DATABASE_URL is missing");
}

export const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // required for Supabase
  },
});

export const query = (text: string, params?: any[]) => pool.query(text, params);
