import { Button, Stack, TextField, Typography } from "@mui/material";
import type { SignInFormTypes } from "./SignInFormTypes";
import { useState, type FormEventHandler } from "react";
import { SIGN_IN_FORM_SCHEMA } from "./SignInFormSchema";

export type SignInFormProps = {
  initialValues?: Partial<SignInFormTypes>;
};

function SignInForm({ initialValues }: SignInFormProps) {
  const [name, setName] = useState(initialValues?.name ?? "");
  const [email, setEmail] = useState(initialValues?.email ?? "");
  const [accounts, setAccounts] = useState(initialValues?.accounts ?? "");
  const [password, setPassword] = useState(initialValues?.password ?? "");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const safeParse = SIGN_IN_FORM_SCHEMA.safeParse({
      name,
      email,
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

  /**
   * account: 반드시 필수로 4글자 이상 입력 되어야 한다.
   * password: 반드시 8글자 이상 입력 되어야 한다.
   * email: 이메일 양식으로 입력 되어야 한다.
   * name: 반드시 2글자 이상 입력 되어야 한다.
   */

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
          Sign In
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
        <TextField
          name="name"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          name="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Stack>
      <Stack
        alignItems="center"
        justifyContent="flex-end"
        direction="row"
        gap={2}
      >
        <Button variant="contained" type="submit">
          Sign Up
        </Button>
      </Stack>
    </Stack>
  );
}

export default SignInForm;
