CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

/l => list all database in postgresql

/c => move inside a database (connect)

/dt => show table in database