import { Button, Stack, TextField, Typography } from "@mui/material";
import type { LogInFormTypes } from "./LogInFormTypes";
import { useState, type FormEventHandler } from "react";
import { LOG_IN_FORM_SCHEMA } from "./LogInFormSchema";

export type LogInFormProps = {
  initialValues?: Partial<LogInFormTypes>;
};

function LogInForm({ initialValues }: LogInFormProps) {
  const [accounts, setAccounts] = useState(initialValues?.accounts ?? "");
  const [password, setPassword] = useState(initialValues?.password ?? "");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const safeParse = LOG_IN_FORM_SCHEMA.safeParse({
      accounts,
      password,
    });

    if (safeParse.success === false) {
      const errorMsgs = safeParse.error.errors
        .map((error) => error.message)
        .join("\n");
      window.alert(errorMsgs);
      return;
    }
  };

  return (
    <Stack
      component="form"
      direction="column"
      gap={8}
      py={8}
      onSubmit={handleSubmit}
    >
      <Stack direction="column" gap={2}>
        <Typography variant="h6" textAlign="center">
          Log In
        </Typography>
      </Stack>
      <Stack direction="column" gap={4}>
        <TextField
          name="account"
          label="Account"
          value={accounts}
          onChange={(e) => setAccounts(e.target.value)}
        />
        <TextField
          name="password"
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Stack>
      <Stack
        alignItems="center"
        justifyContent="flex-end"
        direction="row"
        gap={2}
      >
        <Button variant="contained" type="submit">
          Log In
        </Button>
      </Stack>
    </Stack>
  );
}

export default LogInForm;
