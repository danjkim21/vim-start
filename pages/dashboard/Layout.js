import Sidebar from "@/components/SideBar";
import CmdLine from "@/components/CmdLine";
const DashboardPage = ({ children, session }) => {
  return (
    <section className="h-screen flex flex-col bg-gray-800 text-indigo-100 text-sm">
      <section className="flex flex-row flex-grow">
        <Sidebar session={session} />
        <main className="w-3/4 mt-2 mr-2 p-1 border-2 border-solid border-purple-600">
          {children}
        </main>
      </section>
      <CmdLine session={session} />
    </section>
  );
};

export default DashboardPage;
