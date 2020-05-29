-- CREATE TABLE public."Emps"
-- (
--     id bigserial NOT NULL,
--     emp_number bigint NOT NULL,
--     emp_name text NOT NULL,
--     emp_email text NOT NULL,
--     emp_password text NOT NULL,
--     emp_access_lvl smallint NOT NULL,
--     emp_desgination text NOT NULL,
--     dep_id bigint NOT NULL,
--     PRIMARY KEY (id),
-- 	   FOREIGN KEY (dep_id) REFERENCES public."Emp_department" (id)
-- )
-- WITH (
--     OIDS = FALSE
-- );

-- ALTER TABLE public."Emps"
--     OWNER to cmanyyby;
select * from public."Emps"