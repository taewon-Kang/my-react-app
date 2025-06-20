import { Container } from "@mui/material";
import SignInForm from "./components/SignInForm/SignInForm";
import LogInForm from "./components/LogInForm/LogInForm";

export default function App() {
  return (
    <>
      <Container>
        <LogInForm />
      </Container>
      <hr />
      <Container>
        <SignInForm />
      </Container>
    </>
  );
}
