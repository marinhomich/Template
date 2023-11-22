import { Outlet } from "react-router-dom";

export default function PublicPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Outlet />
    </main>
  );
}
