const { useSupabaseClient, useUser } = require("@supabase/auth-helpers-react");
const { useState, useEffect } = require("react");

export default function useGetBookmarks() {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [bookmarks, setBookmarks] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

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
      setError(error);
      setStatus(status);
    }
    if (status === 400) {
      setError(error);
      setStatus(status);
    }
  }

  return { bookmarks, setBookmarks, error, status };
}
