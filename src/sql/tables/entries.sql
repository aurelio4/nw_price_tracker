/*create_entries_table*/
CREATE TABLE IF NOT EXISTS entries
(
    id SERIAL PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    price NUMERIC(7,2) NOT NULL,
    date_created timestamp NOT NULL
);