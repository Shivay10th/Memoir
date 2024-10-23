CREATE TABLE memoir.user_auth 
(
    user_id serial PRIMARY KEY,
    email varchar(120) UNIQUE,
    hash_pass text
);