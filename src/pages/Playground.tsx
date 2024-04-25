import { Button, Container } from "@mui/material";

import Page from "@/components/Page";
import { useToast } from "@/components/useToast";

export function Component() {
  const toast = useToast();

  return (
    <Page title="Root | Minimal-UI">
      <Container sx={{ p: 4 }}>
        <Button onClick={() => toast.error("Erro")}>Toast</Button>
      </Container>
    </Page>
  );
}
