import Tag from "@/components/Tag";
import DashboardLayout from "../Layout";
import useGetTasks from "@/hooks/useGetTasks";

const Tasks = () => {
  const { tasks, setTasks, error, status } = useGetTasks();
  let placeholder;
  let taskItems;

  if (status !== 200) {
    placeholder = (
      <article className="w-full">
        <Tag tagName="p" tagColor="text-green-300">
          Loading ...
        </Tag>
      </article>
    );
  }

  if (tasks && status === 200) {
    taskItems = tasks.map((task) => {
      return (
        <section key={task.id}>
          <Tag tagName="a" tagColor="text-cyan-300">
            {task.title}
          </Tag>
          <span className="text-gray-400">{` // ${task.description}`}</span>
        </section>
      );
    });
  }

  return (
    <DashboardLayout>
      <>
        <h1>
          <Tag tagName="h1" tagColor="text-purple-300">
            Tags
          </Tag>
        </h1>
        {placeholder}
        {taskItems}
      </>
    </DashboardLayout>
  );
};

export default Tasks;
