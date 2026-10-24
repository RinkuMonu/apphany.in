import MultiStepAuthForm from "../../../components/auth/MultiStepAuthForm";

export const metadata = {
  title: "Sign In | Apphany",
  description: "Sign in to your Apphany account.",
};

export default function LoginPage() {
  return <MultiStepAuthForm mode="login" />;
}
