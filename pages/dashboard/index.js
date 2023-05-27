import DashboardLayout from "./Layout";

const DashboardPage = () => {
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

        <h1>Start</h1>
        <section>
          <h2>Search</h2>
          <h2>Navigate</h2>
        </section>
      </section>
    </DashboardLayout>
  );
};
export default DashboardPage;
