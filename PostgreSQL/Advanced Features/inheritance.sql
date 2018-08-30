DROP TABLE IF EXISTS client;
DROP TABLE IF EXISTS candidate;
DROP TABLE IF EXISTS contact;

CREATE TABLE contact (
    pk_contact SERIAL PRIMARY KEY,
    first_name text,
    full_name text,
    last_name text,
    email text,
    phone text
);

CREATE TABLE candidate (
    date_of_birth DATE
) INHERITS (contact);

CREATE TABLE client (
    company TEXT
) INHERITS (contact);

insert into candidate (first_name,last_name,email,phone,date_of_birth)
VALUES
('paul','dupont','paul.dupont@email.com','+33123456789','1990-01-01'),
('john','doe','john.doe@email.com','+449986475820','1995-01-01'),
('jim','maure','jim.maure@email.com','+44456141865','1994-10-01');
--data ends up in candidate and contact

insert into client (first_name,last_name,email,phone,company)
VALUES
('martin','orel','martin.orel@email.com','+33987654321','WWW'),
('mike','mighty','mike.mighty@email.com','+449874563215','World Company');
--data ends up in client and contact

insert into contact (first_name,last_name,email,phone)
VALUES ('lola','pile','lola.pile@email.com','+3365315846');
--data ends up in contact only

select 'contact',count(*) c from contact
UNION
select 'client',count(*) c from client
UNION
select 'candidate',count(*) c from candidate;
--contact 6
--client 2
--candidate 3

select * from ONLY contact;
--1 record

update ONLY contact set full_name = first_name || ' ' || last_name;
-- only updated lola pile


update ONLY candidate set full_name = first_name || ' ' || last_name;
-- only all 3 candidates in candidate and contact