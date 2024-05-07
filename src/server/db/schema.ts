// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  int,
  sqliteTableCreator,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator((name) => `bingo_${name}`);

export const bingos = createTable(
  "bingo",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    value: text("value").notNull(),
    link: text("link", { length: 5 }).notNull(),
    createdAt: int("created_at", { mode: "timestamp" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: int("created_at", { mode: "timestamp" }),
  },
  (table) => {
    return {
      linkIdx: uniqueIndex("link_idx").on(table.link),
    };
  },
);
