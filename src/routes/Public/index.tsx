import { Card, Text, Title } from "@tremor/react";

// import { useTranslate } from "@/hooks/useTranslate";
import Navbar from "@/components/Navbar";

export default function LoginPage() {
  return (
    <>
      <Navbar />

      <main className="p-4 md:p-10 mx-auto max-w-7xl">
        <Title>Users</Title>
        <Text>A list of users retrieved from a MySQL database (PlanetScale).</Text>
        {/* <Search /> */}
        <Card className="mt-6">
          {/* <UsersTable /> */}
          {/* <UsersTable users={users} /> */}
        </Card>
      </main>
    </>
  );
}
