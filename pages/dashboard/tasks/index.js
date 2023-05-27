import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import DashboardLayout from "../Layout";
import { useEffect, useState } from "react";
import useGetTasks from "@/hooks/useGetTasks";

const Tasks = () => {
  const { tasks, setTasks, error, status } = useGetTasks();

  console.log(tasks);

  return (
    <DashboardLayout>
      <>Tasks page</>
    </DashboardLayout>
  );
};

export default Tasks;
