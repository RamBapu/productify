import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";
import { ENV } from "../config/env";

if (!ENV.DATABASE_URL) {
  throw new Error("Database URL not set");
}

// Initialize PostgreSQL connection pool
const pool = new Pool({ connectionString: ENV.DATABASE_URL });

pool.on("connect", () => {
  console.log("Database connected successfully ✅");
});

pool.on("error", (error) => {
  console.error("💥 Database connection error:", error);
});

// Initialize DB
export const db = drizzle({ client: pool, schema });

// What is a Connection Pool?
// A connection pool is a cache of database connections that are kept open and reused.

// 🤷‍♂️ Why use it?
// Opening/closing connections is slow. Instead of creating a new connection for each request, we reuse existing ones.
// Databases limit concurrent connections. A pool manages a fixed number of connections and shares them across requests.
