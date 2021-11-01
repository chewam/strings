import { useEffect } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/client";

function Auth() {
  const TIMEOUT = 1000;
  const REDIRECT_PATH = "/";
  const router = useRouter();
  const [session] = useSession();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!session) signIn();
      else router.push(REDIRECT_PATH);
    }, TIMEOUT);
    return () => clearTimeout(timer);
  }, [router, session]);

  return <></>;
}

export default Auth;
