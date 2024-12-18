import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate()

  const handelGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        Swal.fire({
          title: "Good job!",
          text: "You are logged in successfully!",
          icon: "success",
        });
        navigate('/')
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <button onClick={handelGoogleLogin} className="btn">
        Google Login
      </button>
    </div>
  );
};

export default SocialLogin;
