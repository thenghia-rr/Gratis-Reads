import SignupForm from "../../components/authenticate/SignupForm";
import NavBar from "../../components/header/NavBar";

const Signup = () => {
  return (
    <>
      <NavBar />
      <div className="mt-[60px]">
        <SignupForm />
      </div>
    </>
  );
};

export default Signup;
