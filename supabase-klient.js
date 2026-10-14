const SUPABASE_URL = "https://udmshzqsfhjfbmxwyuao.supabase.co";
const SUPABASE_KEY = "sb_publishable_6o7tnWysH530lWqMgMbdTg_rIulUf14";

window.sb = null;
window.sbGotowy = false;

document.addEventListener("DOMContentLoaded", function() {
  if (typeof window.supabase === "undefined") return;
  try {
    window.sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    window.sbGotowy = true;
  } catch (e) { console.error(e); }
});

async function pobierzUzytkownika() {
  if (!window.sbGotowy) return null;
  const { data: { user } } = await window.sb.auth.getUser();
  if (!user) return null;
  const { data: profil } = await window.sb.from("profiles").select("*").eq("id", user.id).single();
  return { user, profil };
}

async function wyloguj() {
  if (!window.sbGotowy) return;
  await window.sb.auth.signOut();
  window.location.href = "login.html";
}
