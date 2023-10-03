import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase";
import { AuthContext } from "../AuthContext/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const {user, setUser} = useContext(AuthContext)
  const navigate = useNavigate()
  function handleLogin(e) {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/")
      })
      .catch((error) => {
      });
     
  }
  return (
    <div>
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-3xl text-center bg-transparent">Login</h1>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body h-fit">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
