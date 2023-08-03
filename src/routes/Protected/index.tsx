import { Outlet } from "react-router-dom";

import CommandBar from "@/components/CommandBar";
// import { useTranslate } from "@/hooks/useTranslate";
import Navbar from "@/components/Navbar";

export default function PublicPage() {
  return (
    <CommandBar>
      <Navbar />
      <main className="p-4 md:p-10 mx-auto max-w-7xl">
        <Outlet />
      </main>
    </CommandBar>
  );
}
