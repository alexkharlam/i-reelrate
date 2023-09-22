import { useTranslation } from "react-i18next";
import {
  GithubLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

function SocialLoginsButtons() {
  const { t } = useTranslation();

  return (
    <div className="max-w-lg flex flex-col gap-2">
      <a href="/auth/google">
        <GoogleLoginButton text={t("login.google")} />
      </a>
      <a href="/auth/github">
        <GithubLoginButton text={t("login.github")} />
      </a>
    </div>
  );
}

export default SocialLoginsButtons;
