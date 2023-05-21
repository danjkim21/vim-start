import ProfilePage from "@/pages/dashboard/profile";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Link from "next/link";

const Sidebar = ({ session }) => {
  const supabase = useSupabaseClient();
  return (
    <section
      className="w-1/4 flex border-solid border-2
       border-gray-700 flex-col"
    >
      <section className="sidebar-heading">~/workspace</section>
      <ul className="sidebar-navLinks">
        <li>
          <Link href="/">Bookmarks</Link>
        </li>
        <li>
          <Link href="/">Tasks</Link>
        </li>
        <li>
          <Link href="/dashboard/profile">Settings</Link>
        </li>
      </ul>
      <section className="sidebar-logout">
        <button
          className="button block"
          onClick={() => supabase.auth.signOut()}
        >
          Log Out
        </button>
      </section>
    </section>
  );
};

export default Sidebar;
