import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { getSession, signIn } from "next-auth/react";

interface LoginPageProps {}

const LoginPage: NextPage<LoginPageProps> = () => {
  return (
    <div>
      <div>Here You can Log In</div>
      <button onClick={() => signIn("google", { callbackUrl: "/" })}>Log In with google</button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const session = await getSession({ req });
  if (session) {
    return {
      redirect: "/",
      props: {},
    };
  } else {
    return {
      props: {},
    };
  }
};

export default LoginPage;
