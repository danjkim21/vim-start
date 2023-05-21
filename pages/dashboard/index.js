import Sidebar from "@/components/SideBar";

const DashboardPage = ({ session }) => {
  return (
    <section className="h-screen flex flex-col">
      <section className="flex flex-row flex-grow">
        <Sidebar session={session} />
        <main className="w-3/4 border-2 border-solid border-gray-700">
          Dashboard
        </main>
      </section>
      <section>commandline</section>
    </section>
  );
};

export default DashboardPage;
