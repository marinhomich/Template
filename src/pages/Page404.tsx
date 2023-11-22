import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";

import Page from "@/components/Page";

export default function Page404() {
  return (
    <Page title="404 Page Not Found">
      <p>Não encontrado</p>
      <Typography variant="h3" paragraph>
        Sorry, page not found!
      </Typography>
      <Button to="/" size="large" variant="contained" component={RouterLink}>
        Go to Home
      </Button>
    </Page>
  );
}
