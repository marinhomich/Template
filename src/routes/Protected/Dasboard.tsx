import { Card, Text, Title } from "@tremor/react";
import { Helmet } from "react-helmet-async";

export default function DashboardPage() {
  return (
    <>
      <Helmet>
        <title>Dashboard | marinhomich</title>
      </Helmet>
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
