import 'dotenv/config'
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

async function query(sql, params = []) {
  const result = await pool.query(sql, params);
  return result.rows;
}
export { pool, query };
