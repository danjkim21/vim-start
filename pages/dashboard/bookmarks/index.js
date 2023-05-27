import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import DashboardLayout from "../Layout";
import { useEffect, useState } from "react";

const Bookmarks = () => {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [bookmarks, setBookmarks] = useState(null);

  useEffect(() => {
    if (user) loadBookmarks();
    // eslint-disable-next-line
  }, [user, supabase]);

  async function loadBookmarks() {
    let { data, error, status } = await supabase
      .from("Bookmarks")
      .select(`*`)
      .eq("id", user.id);

    if (status === 200) {
      setBookmarks(data);
    }
    if (status === 400) {
      console.log(error);
    }
  }

  console.log(bookmarks);

  return (
    <DashboardLayout>
      <>Bookmarks page</>
    </DashboardLayout>
  );
};

export default Bookmarks;
