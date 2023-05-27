import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import DashboardLayout from "../Layout";
import { useEffect, useState } from "react";

const Tasks = () => {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [tasks, setTasks] = useState(null);

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
    }
    if (status === 400) {
      console.log(error);
    }
  }

  console.log(tasks);

  return (
    <DashboardLayout>
      <>Tasks page</>
    </DashboardLayout>
  );
};

export default Tasks;
