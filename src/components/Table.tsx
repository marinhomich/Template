import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@tremor/react";

export default function UsersTable() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Username</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableCell>user.name</TableCell>
      </TableBody>
    </Table>
  );
}
