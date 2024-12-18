import Lottie from "lottie-react";
import lotteedata from "../../../public/lottie/register.json";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import SocialLogin from "../shared/SocialLogin";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handelRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;
    const email = form.email.value;
    console.log(password, email);

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      return toast.error(
        "insart 6 character pass with 1 capatal and small letter and 1 number"
      );
    }

    createUser(email, password)
      .then((res) => {
        Swal.fire({
          title: "User Created!",
          text: "User Created Successfully!",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center w-96 lg:text-left">
            <Lottie animationData={lotteedata}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-5xl font-bold">Register Now!</h1>
            <form onSubmit={handelRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <div className="divider">OR</div>
            <div><SocialLogin></SocialLogin></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
