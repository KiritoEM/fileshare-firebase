import LoginConnect from "../components/Login/LoginConnect";
import LoginHeader from "../components/Login/LoginHeader";
import { useAuth } from "../hooks/useAuth";

const Login = (): JSX.Element => {
  const { setGooglePopup, setFacebookPopup } = useAuth();

  return (
    <section id="login-page">
      <div className="cloud-left">
        <img src="/cloud-left.png" alt="" />
      </div>
      <div className="login-container">
        <LoginHeader />
        <LoginConnect
          authGoogle={setGooglePopup}
          authFacebook={setFacebookPopup}
        />
      </div>
      <div className="cloud-right">
        <img src="/cloud-right.png" alt="" />
      </div>
    </section>
  );
};

export default Login;
