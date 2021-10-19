/*create_users_tables*/
CREATE TABLE IF NOT EXISTS users
(
    id SERIAL,
    username text COLLATE pg_catalog."default" NOT NULL,
    email text COLLATE pg_catalog."default" UNIQUE NOT NULL,
    password text COLLATE pg_catalog."default" NOT NULL,
    date_created timestamp NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id)
);