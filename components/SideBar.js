import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const supabase = useSupabaseClient();

  // const navStyles = {
  //   navLink_active: {
  //     borderLeft: "8px solid #c4b5fd",
  //   },
  // };

  return (
    <section
      className="w-1/4 flex border-solid border-2
       border-purple-600 flex-col mt-2 mx-2 p-1"
    >
      <section className="sidebar-heading">
        <Link className="flex flex-row items-center gap-1.5" href="/">
          <FontAwesomeIcon
            icon={faFolder}
            style={{ fontSize: "0.55rem", color: "grey" }}
          />
          <span>~/workspace</span>
        </Link>
      </section>
      <ul className="sidebar-navLinks ">
        <li className="border-l-8 border-transparent">
          <Link
            className="flex flex-row items-center gap-1.5 pl-4"
            href="/dashboard/bookmarks"
          >
            <FontAwesomeIcon
              icon={faFolder}
              style={{ fontSize: "0.55rem", color: "grey" }}
            />
            <span>Bookmarks</span>
          </Link>
        </li>
        <li className="border-l-8 border-transparent">
          <Link
            className="flex flex-row items-center gap-1.5 pl-4"
            href="/dashboard/tasks"
          >
            <FontAwesomeIcon
              icon={faFolder}
              style={{ fontSize: "0.55rem", color: "grey" }}
            />
            <span>Tasks</span>
          </Link>
        </li>
        <li className="border-l-8 border-transparent">
          <Link
            className="flex flex-row items-center gap-1.5 pl-4"
            href="/dashboard/profile"
          >
            <FontAwesomeIcon
              icon={faFolder}
              style={{ fontSize: "0.55rem", color: "grey" }}
            />
            <span>Settings</span>
          </Link>
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
