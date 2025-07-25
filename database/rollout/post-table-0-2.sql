CREATE TABLE memoir.USER_POST (
    user_post_id serial PRIMARY KEY,
    title varchar(300) not null,
    content text,
    author_id int, 
    CONSTRAINT fk_user_post_user_auth FOREIGN KEY(author_id)
    REFERENCES memoir.user_auth(user_id)
);