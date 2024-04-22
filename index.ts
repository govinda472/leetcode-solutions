import { serve } from 'https://deno.land/std@0.182.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.14.0';
import { corsHeaders } from '../_shared/cors.ts';

console.log("Delete user profile picture function");

serve(async (request) => {
  if (request.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      { global: { headers: { Authorization: request.headers.get('Authorization')! } } }
    );

    const { data: { user }, } = await supabaseClient.auth.getUser();
    if (!user) throw new Error('No user found for JWT!');

    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Fetch the user's profile to get the profile picture's URL
    const { data: userProfile, error: profileError } = await supabaseAdmin
      .from('profile')
      .select('profile_pic')
      .eq('id', user.id)
      .single();

    if (profileError) throw new Error('Failed to fetch user profile.');

    if (userProfile?.profile_pic) {
      const url = new URL(userProfile.profile_pic);
      const filePath = url.pathname.split('/object/public/')[1];
    
      console.log(`Attempting to delete image at path: ${filePath}`); // Log the file path for debugging
    
      const { error: deletionError } = await supabaseAdmin
        .storage
        .from('profilePictures')
        .remove([filePath]);
    
      if (deletionError) {
        console.error(`Failed to delete profile picture: ${deletionError.message}`); // Log the error message
        throw new Error(deletionError.message);
      } else {
        console.log(`Profile picture deleted successfully.`);
      }
    }

    return new Response('profile picture deleted successfully', {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    });
  }
});
