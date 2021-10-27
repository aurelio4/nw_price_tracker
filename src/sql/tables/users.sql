/*create_users_table*/
CREATE TABLE IF NOT EXISTS users
(
    id SERIAL PRIMARY KEY,
    username text UNIQUE NOT NULL,
    email text UNIQUE NOT NULL,
    password text NOT NULL,
    date_created timestamp NOT NULL
);