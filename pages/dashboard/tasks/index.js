import DashboardLayout from "../Layout";
import useGetTasks from "@/hooks/useGetTasks";

const Tasks = () => {
  const { tasks, setTasks, error, status } = useGetTasks();

  let taskItems;

  if (tasks && status === 200) {
    taskItems = tasks.map((task) => {
      return (
        <section key={task.id}>
          <span className="text-cyan-300">{`<li>`}</span>
          <span>{task.title}</span>
          <span className="text-cyan-300">{`</li>`}</span>
        </section>
      );
    });
  }

  return (
    <DashboardLayout>
      <>
        <h1>
          <span className="text-purple-300">{`<h1>`}</span>
          <span>Tasks</span>
          <span className="text-purple-300">{`</h1>`}</span>
        </h1>
        {taskItems}
      </>
    </DashboardLayout>
  );
};

export default Tasks;
