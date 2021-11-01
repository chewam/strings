CREATE TABLE public.jobs (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    title text NOT NULL,
    salary text NOT NULL,
    location text NOT NULL,
    description text NOT NULL,
    office text NOT NULL,
    worktime text NOT NULL,
    profile text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);
