/*create_items_table*/
CREATE TABLE IF NOT EXISTS items
(
    id SERIAL PRIMARY KEY,
    name text NOT NULL
);