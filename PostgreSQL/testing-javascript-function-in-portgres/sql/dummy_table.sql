DROP TABLE IF EXISTS postgres_json_test;
CREATE TABLE postgres_json_test (
    pk serial primary key,
    name TEXT,
    f TEXT,
    f_in_object json
);