import mariadb from "mariadb";

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  connectionLimit: 5,
});

export async function query(sql: string, values: any[] = []) {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(sql, values);
    return rows;
  } finally {
    if (conn) conn.release();
  }
}
