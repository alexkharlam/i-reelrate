import Container from "../components/Container";
import FormContainer from "../components/form/FormContainer";
import FormInput from "../components/form/FormInput";
import FormLabel from "../components/form/FormLabel";
import { useState } from "react";
import { toast } from "react-toastify";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    if (password !== confirmPassword)
      return toast.error("Passwords do not match", { toastId: "dubpasswords" });
  }

  return (
    <Container>
      <FormContainer formTitle="Sign up to ReelRate" onSubmit={submitHandler}>
        <FormLabel htmlFor="name" text="Name" />
        <FormInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          type="text"
          placeholder="John"
        />
        <FormLabel htmlFor="email" text="Email address" />
        <FormInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          placeholder="johndoe@mail.com"
        />
        <FormLabel htmlFor="password" text="Password" />
        <FormInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
        />
        <FormLabel htmlFor="password-confirm" text="Confirm password" />
        <FormInput
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          id="password-confirm"
          type="password"
        />
      </FormContainer>
    </Container>
  );
}

export default RegisterPage;
