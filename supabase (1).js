import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://btlcfnpzhpdgzcbikogb.supabase.co';

const supabaseKey = 'sb_publishable_DuD5AHuA4Sc4bjgrrKIdfg_3Yi9I1hy';

export const supabase = createClient(supabaseUrl, supabaseKey);