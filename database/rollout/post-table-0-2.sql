CREATE TABLE memoir.USER_POST (
    user_post_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(300) NOT NULL,
    content TEXT,
    author_id INT NOT NULL, 
    published BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT fk_user_post_user_auth FOREIGN KEY(author_id)
    REFERENCES memoir.user_auth(user_id)
);