import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2';
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await signIn(email, password);
      const { token } = result;

      // Store the token in localStorage
      localStorage.setItem('token', token);

      Swal.fire({
        title: "Login Successfully!",
        color: "#D81B60",
        confirmButtonColor: "#D81B60",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });

      navigate(from, { replace: true });
    } catch (error) {
      console.error('Login failed:', error);
      Swal.fire({
        title: "Login Failed!",
        text: error.message,
        icon: "error",
        confirmButtonColor: "#D81B60",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Dressify | Login</title>
      </Helmet>
      <div className="login-page hero min-h-screen">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse mt-12">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
            <h1 className="text-4xl font-bold text-center m-2">Login</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered text-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered text-white"
                  required
                />
                <label className="label">
                  <a href="/signUp" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-pink-700 text-white"
                  value="LOGIN"
                  type="submit"
                />
              </div>
              <p className="text-sm text-center text-pink-300 text-semibold">
                New here?{" "}
                <Link to="/signUp" className="text-pink-400 text-bold">
                  Create a New Account
                </Link>
              </p>
              <p className="text-sm text-center">Or sign in with</p>
              <SocialLogin></SocialLogin>
            </form>
          </div>
          <div className="text-center lg:text-left">
            {/* <img className="" src={loginImg} alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
