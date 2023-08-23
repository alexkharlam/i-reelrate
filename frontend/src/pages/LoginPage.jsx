import FormContainer from "../components/form/FormContainer";
import FormInput from "../components/form/FormInput";
import FormLabel from "../components/form/FormLabel";
import { toast } from "react-toastify";
import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    toast.error("Passwords do not match", { toastId: "dubpasswords" });
  }

  return (
    <FormContainer formTitle="Login to ReelRate" onSubmit={submitHandler}>
      <FormLabel htmlFor="email" text="Email address" />
      <FormInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        type="email"
      />
      <FormLabel htmlFor="password" text="Password" />
      <FormInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        type="password"
      />
    </FormContainer>
  );
}

export default LoginPage;
