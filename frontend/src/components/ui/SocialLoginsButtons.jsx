import {
  GithubLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

function SocialLoginsButtons() {
  return (
    <div className="max-w-lg flex flex-col gap-2">
      <a href="/auth/google">
        <GoogleLoginButton />
      </a>
      <a href="/auth/github">
        <GithubLoginButton />
      </a>
    </div>
  );
}

export default SocialLoginsButtons;
