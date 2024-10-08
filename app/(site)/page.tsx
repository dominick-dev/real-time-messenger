import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div
      className="
    flex
    min-h-full
    flex-col
    justify-center
    py-12
    sm:px-6
    lg:px-8
    bg-gray-100
    "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="Logo"
          height={64}
          width={64}
          className="mx-auto"
          //   className="mx-auto w-16 h-16 sm:w-16 sm:h-16 lg:w-16 lg:h-16" // Adjust sizes based on screen size
          src="/images/logo.svg"
        />
        <h2
          className="
        mt-6
        text-center
        text-3xl
        font-bold
        tracking-tight
        text-gray-900
        "
        >
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
