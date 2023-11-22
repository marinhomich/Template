import { zodResolver } from "@hookform/resolvers/zod";
import LoadingButton from "@mui/lab/LoadingButton";
import { Container, TextField } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import Page from "@/components/Page";
import { useToast } from "@/components/useToast";
import { useFetch } from "@/hooks/useFetch";
import { emailSchema } from "@/validation/email";

export function Component() {
  const [loading, setLoading] = useState(false);
  const { data, isLoading } = useFetch("https://api.github.com/users/marinhomich");

  const toast = useToast();
  const form = useForm({
    resolver: zodResolver(emailSchema),
    values: {
      email: "",
      login: data?.login || "",
    },
  });
  const onSubmit = async () => {
    setLoading(true);
    toast.success("Hello");
  };

  return (
    <Page title="Root | Minimal-UI">
      <Container sx={{ p: 4 }}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={form.control}
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                error={Boolean(fieldState.error)}
                id="outlined-error-helper-text"
                label="Error"
                helperText={fieldState.error?.message}
              />
            )}
          />

          {isLoading && <p>carregando</p>}
          {data && (
            <Controller
              name="login"
              control={form.control}
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  error={Boolean(fieldState.error)}
                  label="Error"
                  helperText={fieldState.error?.message}
                />
              )}
            />
          )}
          <LoadingButton type="submit" loading={loading} variant="outlined">
            <span>Submit</span>
          </LoadingButton>
        </form>
      </Container>
    </Page>
  );
}
