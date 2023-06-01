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
        <li className="w-full" key={task.id}>
          <Tag tagName="a" tagColor="text-purple-400">
            {task.title}
          </Tag>
          <span className="text-slate-400">{` // ${task.description}`}</span>
        </li>
      );
    });
  }

  return (
    <DashboardLayout>
      <>
        <h1>
          <span className="text-violet-300">import</span> <span>{`{`}</span>{" "}
          <span className="text-orange-200">{`Tasks`}</span> <span>{`}`}</span>{" "}
          <span className="text-violet-300">from</span> <span>{`'`}</span>
          <span className="text-green-300">{`~/workspace/api`}</span>
          <span>{`'`}</span>
        </h1>
        <div className="mt-4 ">
          {placeholder}
          <ol className="list-decimal list-inside px-4 marker:text-slate-400">
            {taskItems}
          </ol>
        </div>
      </>
    </DashboardLayout>
  );
};

export default Tasks;
