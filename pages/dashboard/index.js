import Link from "next/link";
import DashboardLayout from "./Layout";
import useGetBookmarks from "@/hooks/useGetBookmarks";
import useGetTasks from "@/hooks/useGetTasks";

const DashboardPage = () => {
  const { bookmarks } = useGetBookmarks();
  const { tasks } = useGetTasks();

  return (
    <DashboardLayout>
      <section className="h-full flex justify-center items-center flex-col gap-4">
        {/* prettier-ignore */}
        <pre className="block w-min whitespace-pre-wrap text-indigo-300 ">
            ____ ____ ____      
            ||V |||I |||M ||     
            ||__|||__|||__||     
            |/__\|/__\|/__\|                         
          </pre>

        <section>
          <h1>Start</h1>
          <h2>Search</h2>
          <h2>Navigate</h2>
        </section>

        <section>
          <h2>Views</h2>
          <Link href="/dashboard/bookmarks" className="block">
            bookmarks ({bookmarks && bookmarks.length})
          </Link>
          <Link href="/dashboard/tasks" className="block">
            tasks ({tasks && tasks.length})
          </Link>
        </section>
      </section>
    </DashboardLayout>
  );
};
export default DashboardPage;
