-- Run as a privileged database user on an isolated test database with the schema installed.
-- Changes and temporary grants are rolled back.
begin;
grant usage on schema public to anon, authenticated;
grant select, insert, update, delete on all tables in schema public to anon, authenticated;
insert into auth.users (id, email, raw_user_meta_data) values
  ('11111111-1111-1111-1111-111111111111', 'one@example.invalid', '{"role":"institution"}'),
  ('22222222-2222-2222-2222-222222222222', 'two@example.invalid', '{"role":"learner"}');
insert into public.courses (id, title, category, instructor_name, image_url, institution_id, is_draft) values
  ('test-public', 'Public', 'Test', 'Test', '', '11111111-1111-1111-1111-111111111111', false),
  ('test-draft', 'Draft', 'Test', 'Test', '', '11111111-1111-1111-1111-111111111111', true);
insert into public.modules (id, course_id, title) values ('test-public-module', 'test-public', 'Public'), ('test-draft-module', 'test-draft', 'Draft');
insert into public.lessons (id, module_id, course_id, title) values ('test-public-lesson', 'test-public-module', 'test-public', 'Public'), ('test-draft-lesson', 'test-draft-module', 'test-draft', 'Draft');
insert into public.accreditations (id, code, target_role, member_name, member_email, institution_id, institution_name, campus_name, department, program, expires_at, accreditation_hash) values
  ('test-code', 'TEST-CODE', 'learner', 'Test', 'test@example.invalid', '11111111-1111-1111-1111-111111111111', 'Test', 'Test', 'Test', 'Test', '2030-01-01', 'test');
set local role anon;
do $$ begin
  if (select count(*) from public.profiles) <> 0 or (select count(*) from public.accreditations) <> 0 then raise exception 'private data exposed anonymously'; end if;
  if (select count(*) from public.modules) <> 1 or (select count(*) from public.lessons) <> 1 then raise exception 'draft content exposed'; end if;
end $$;
reset role;
set local role authenticated;
select set_config('request.jwt.claim.sub', '22222222-2222-2222-2222-222222222222', true);
do $$ begin
  if (select count(*) from public.profiles) <> 1 or (select count(*) from public.accreditations) <> 0 then raise exception 'another user''s data exposed'; end if;
  begin
    insert into public.certificates (user_id, course_id, course_title, transaction_hash, credential_id) values ('22222222-2222-2222-2222-222222222222', 'test-public', 'Test', 'fake', 'fake');
    raise exception 'user forged a certificate';
  exception when insufficient_privilege then null; end;
end $$;
select set_config('request.jwt.claim.sub', '11111111-1111-1111-1111-111111111111', true);
do $$ begin
  if (select count(*) from public.accreditations) <> 1 or (select count(*) from public.lessons) <> 2 then raise exception 'owner access denied'; end if;
end $$;
rollback;
