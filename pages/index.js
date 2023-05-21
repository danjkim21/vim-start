import { useSession } from "@supabase/auth-helpers-react";
// import Account from "../components/Account";
import LoginPage from "./login";
import DashboardPage from "./dashboard";

const Home = () => {
  const session = useSession();

  return (
    <section className="h-screen">
      {!session ? <LoginPage /> : <DashboardPage session={session} />}
    </section>
  );
};

export default Home;
