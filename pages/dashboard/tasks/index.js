import DashboardLayout from "../Layout";
import useGetTasks from "@/hooks/useGetTasks";

const Tasks = () => {
  const { tasks, setTasks, error, status } = useGetTasks();
  let placeholder;
  let taskItems;

  if (status !== 200) {
    placeholder = (
      <article className="w-full">
        <span className="text-green-300">{`<p>`}</span>
        <span>Loading ...</span>
        <span className="text-green-300">{`</p>`}</span>
      </article>
    );
  }

  if (tasks && status === 200) {
    taskItems = tasks.map((task) => {
      return (
        <section key={task.id}>
          <span className="text-cyan-300">{`<li>`}</span>
          <span>{task.title}</span>
          <span className="text-cyan-300">{`</li>`}</span>
          <span className="text-gray-400">{` // ${task.description}`}</span>
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
        {placeholder}
        {taskItems}
      </>
    </DashboardLayout>
  );
};

export default Tasks;
