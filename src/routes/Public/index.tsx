import { Card, Text, Title } from "@tremor/react";

import Navbar from "@/components/Navbar";
import UsersTable from "@/components/Table";
// import { useTranslate } from "@/hooks/useTranslate";

export default function LoginPage() {
  // const translate = useTranslate();

  return (
    <>
      <Navbar />
      <main className="p-4 md:p-10 mx-auto max-w-7xl">
        <Title>Users</Title>
        <Text>A list of users retrieved from a MySQL database (PlanetScale).</Text>
        {/* <Search /> */}
        <Card className="mt-6">
          <UsersTable />
          {/* <UsersTable users={users} /> */}
        </Card>
      </main>
    </>
  );
}
