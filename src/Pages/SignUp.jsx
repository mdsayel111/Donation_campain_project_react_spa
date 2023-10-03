import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import auth from "../firebase/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup ,GithubAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const SignUp = () => {
  const navigate = useNavigate()
  function socialLogin(provider) {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        navigate("/")
      })
      .catch((error) => {
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-3xl text-center bg-transparent">Signup</h1>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body h-fit">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input"
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
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-primary">Signup</button>
              </div>
            </form>
            <div className="flex justify-evenly mt-4">
              <FcGoogle className="text-5xl cursor-pointer" onClick={()=>socialLogin(googleProvider)}></FcGoogle>
              <FaGithubSquare onClick={()=>socialLogin(githubProvider)} className="text-5xl cursor-pointer"></FaGithubSquare>
              <AiFillTwitterSquare className="text-5xl cursor-pointer"></AiFillTwitterSquare>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
