-- Table: public.gigs

-- DROP TABLE public.gigs;

-- CREATE TABLE public.gigs
-- (
--     id bigserial NOT NULL,
--     title character varying(200) COLLATE pg_catalog."default",
--     technologies character varying(200) COLLATE pg_catalog."default",
--     budget character varying(20) COLLATE pg_catalog."default",
--     description text COLLATE pg_catalog."default",
--     contact_email character varying COLLATE pg_catalog."default",
--     "createdAt" date,
--     "updatedAt" date,
--     CONSTRAINT gigs_pkey PRIMARY KEY (id)
-- )
-- WITH (
--     OIDS = FALSE
-- )
-- TABLESPACE pg_default;

-- ALTER TABLE public.gigs
--     OWNER to fsqqzbsy;

select * from public."gigs"