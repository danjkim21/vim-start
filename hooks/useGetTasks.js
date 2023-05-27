const { useSupabaseClient, useUser } = require("@supabase/auth-helpers-react");
const { useState, useEffect } = require("react");

export default function useGetTasks() {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [tasks, setTasks] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (user) loadTasks();
    // eslint-disable-next-line
  }, [user, supabase]);

  async function loadTasks() {
    let { data, error, status } = await supabase
      .from("Tasks")
      .select(`*`)
      .eq("id", user.id);

    if (status === 200) {
      setTasks(data);
      setError(error);
      setStatus(status);
    }
    if (status === 400) {
      setError(error);
      setStatus(status);
    }
  }

  return { tasks, setTasks, error, status };
}
