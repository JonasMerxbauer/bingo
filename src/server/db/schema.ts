// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations, sql } from "drizzle-orm";
import {
  integer,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `bingo_${name}`);

export const bingos = createTable("bingo", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt"),
});

export const bingoRelations = relations(bingos, ({ many }) => ({
  values: many(values),
}));

export const values = createTable("value", {
  id: serial("id").primaryKey(),
  text: varchar("text", { length: 256 }),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt"),
  bingoId: integer("bingo_id"),
});

export const valuesRelations = relations(values, ({ one }) => ({
  bingo: one(bingos, {
    fields: [values.bingoId],
    references: [bingos.id],
  }),
}));
