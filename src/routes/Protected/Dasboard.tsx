import { Link } from "react-router-dom";

import Page from "@/components/Page";

export default function DashboardPage() {
  return (
    <Page title="Playground | Minimal-UI">
      <Link to={"/playground"}>Playground</Link>
    </Page>
  );
}
