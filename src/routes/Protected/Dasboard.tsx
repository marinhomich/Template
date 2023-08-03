import { Card, Text, Title } from "@tremor/react";

export default function DashboardPage() {
  return (
    <>
      <Title>Users</Title>
      <Text>A list of users retrieved from a MySQL database (PlanetScale).</Text>
      {/* <Search /> */}
      <Card className="mt-6">
        {/* <UsersTable /> */}
        {/* <UsersTable users={users} /> */}
      </Card>
    </>
  );
}
