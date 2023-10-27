import LoginForm from "../../components/authenticate/LoginForm";
import NavBar from "../../components/header/NavBar";

const Login = () => {
  return (
    <>
      <NavBar />
      <div className="mt-[60px]">
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
