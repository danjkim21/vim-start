import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

const CmdLine = () => {
  const today = new Date().toDateString();

  const supabase = useSupabaseClient();
  const user = useUser();
  const [username, setUsername] = useState(null);

  useEffect(() => {
    if (user) loadData();
    // eslint-disable-next-line
  }, [user, supabase]);

  async function loadData() {
    let { data, error, status } = await supabase
      .from("profiles")
      .select(`username`)
      .eq("id", user.id)
      .single();

    setUsername(data.username);
  }

  return (
    <section className="mx-2 bg-gray-900 flex gap-2">
      <section className="bg-indigo-500 p-1 mr-auto">NORMAL</section>
      <section className="p-1 text-teal-100">{today}</section>
      <section className="p-1">{username ? username : "[user]"}</section>
      <section className="bg-indigo-500 w-2"></section>
    </section>
  );
};

export default CmdLine;
