import MultiStepAuthForm from "../../../components/auth/MultiStepAuthForm";

export const metadata = {
  title: "Sign Up | Apphany",
  description: "Create your personal Apphany account.",
};

export default function SignupPage() {
  return <MultiStepAuthForm mode="signup" />;
}
