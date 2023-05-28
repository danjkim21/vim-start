import DashboardLayout from "../Layout";
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
