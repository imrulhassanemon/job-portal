import Lottie from "lottie-react";
import lotteedata from '../../../public/lottie/login.json'
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {

    const {signInUser, signInWithGoogle} = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()
    console.log(location);

    const form = location.state || '/';

    const handelSignIn = (e) => {
        e.preventDefault()  
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
        signInUser(email, password)
        .then(res => {
          Swal.fire({
            title: "Good job!",
            text: "You are logged in successfully!",
            icon: "success"
          });
          // navigate(form)
          console.log(email);
          const user = {email:res.user.email}
          axios.post('http://localhost:3000/jwt', user, {
            withCredentials: true
          })
          .then(res => {
            console.log(res.data);
          })
        })
        .catch(error => {
            console.log(error);
        })

    }

    const signWithGoogle =() =>{
      
      signInWithGoogle()
      navigate(form)
    }


  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center w-96 lg:text-left">
            <Lottie animationData={lotteedata}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-5xl font-bold">Login Now!</h1>
            <form onSubmit={handelSignIn} className="card-body">
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="divider">OR</div>
            <div>
              <button onClick={signWithGoogle} className="btn">Google Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
