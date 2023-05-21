import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

const CmdLine = () => {
  const today = new Date().toDateString();

  return (
    <section className="mx-2 bg-gray-800 flex gap-2">
      <section className="bg-indigo-500 p-1 mr-auto">NORMAL</section>
      <section className="p-1 text-teal-100">{today}</section>
      <section className="bg-indigo-500 w-2"></section>
    </section>
  );
};

export default CmdLine;
