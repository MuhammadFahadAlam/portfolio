import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "../types/database";
import { redirect } from "next/navigation";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
}

/**
 * Get the authenticated user from the server context
 * Redirects to login if no session is found
 */
export async function getAuthenticatedUser() {
  const supabase = await createClient();
  const { data: { session }, error } = await supabase.auth.getSession();

  if (error || !session) {
    redirect('/login');
  }

  return session.user;
}

/**
 * Get the authenticated user without redirection
 * Returns null if no session is found
 */
export async function getUser() {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();
  return session?.user ?? null;
}

/**
 * Check if the current user owns a resource
 * @param resourceUserId - The user ID associated with the resource
 * @returns boolean indicating ownership
 */
export async function checkResourceOwnership(resourceUserId: string) {
  const user = await getUser();
  return user?.id === resourceUserId;
}
