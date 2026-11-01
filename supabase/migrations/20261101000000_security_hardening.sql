-- Apply to existing installations after reviewing public-profile consumers.
-- Public rows contain email, payout settings, accreditation codes and other private data.
begin;

drop policy if exists "Public profiles are viewable by anyone" on public.profiles;
create policy "Users can view their own profile" on public.profiles for select using (auth.uid() = id);
drop policy if exists "Learners data is viewable by anyone" on public.learners_data;
create policy "Users can view their own learner data" on public.learners_data for select using (auth.uid() = id);
drop policy if exists "Instructors data is viewable by anyone" on public.instructors_data;
create policy "Users can view their own instructor data" on public.instructors_data for select using (auth.uid() = id);
drop policy if exists "Institutions data is viewable by anyone" on public.institutions_data;
create policy "Users can view their own institution data" on public.institutions_data for select using (auth.uid() = id);

drop policy if exists "Modules are viewable by anyone" on public.modules;
create policy "Visible course modules are viewable" on public.modules for select using (
  exists (select 1 from public.courses c where c.id = modules.course_id)
);
drop policy if exists "Lessons are viewable by authenticated users" on public.lessons;
create policy "Visible course lessons are viewable" on public.lessons for select using (
  exists (select 1 from public.courses c where c.id = lessons.course_id)
);

-- Client-generated credentials can otherwise be forged. Trusted service code issues them.
drop policy if exists "Certificates can be awarded to user" on public.certificates;
drop policy if exists "Users can earn achievements" on public.user_achievements;

-- Accreditation codes and member emails are private to the issuing institution.
drop policy if exists "Accreditation codes can be verified by anyone" on public.accreditations;
drop policy if exists "Institutions can issue accreditation codes" on public.accreditations;
drop policy if exists "Institutions and redeemers can update accreditation status" on public.accreditations;
create policy "Institutions can view their accreditations" on public.accreditations for select using (
  institution_id = auth.uid()::text
);
create policy "Institutions can issue their accreditations" on public.accreditations for insert with check (
  institution_id = auth.uid()::text and exists (
    select 1 from public.profiles p where p.id = auth.uid() and p.role = 'institution'
  )
);
create policy "Institutions can update their accreditations" on public.accreditations for update using (
  institution_id = auth.uid()::text
) with check (institution_id = auth.uid()::text);

-- Definer functions must not resolve objects through a caller-controlled search path.
alter function public.handle_new_user() set search_path = '';
alter function public.handle_updated_at() set search_path = '';
commit;
