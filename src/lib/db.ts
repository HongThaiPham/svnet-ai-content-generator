import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./db-schema";

const sql = neon(process.env.DIZZLE_DB_URL!);
export const db = drizzle(sql, { schema });
