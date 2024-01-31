import "bootstrap/dist/css/bootstrap.css";
import React , {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(result => {
            console.log(result)
            if(result.data === "success"){
                navigate('/home')
            }            
        })
        .catch(err => console.log(err))
    }
    
  return (
    <>
    <section className="vh-100 w-full" style={{ backgroundImage: 'linear-gradient(to right, blue, white)' }}>

    
      <div
        class="card bg-primary bg-opacity-25 position-absolute top-50 start-50 translate-middle"
        style={{ width: "30rem" }}
      >
        <div class="card-body">
        <h4 class="card-title">Log-In</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
              <input type="email" id="form2Example1" name="email" class="form-control" />
              <label className="form-label" for="form2Example1">
                Email address
              </label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="form2Example2" name="password" class="form-control" />
              <label className="form-label" for="form2Example2">
                Password
              </label>
            </div>

            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form2Example31"
                    checked
                  />
                  <label className="form-check-label" for="form2Example31">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </div>

              <div className="col">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">
              Sign in
            </button>

            <div className="text-center">
              <p>
                Not a member? <a href="register">Register</a>
              </p>
              <p>or sign up with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i class="fab fa-twitter"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      </section>
    </>
  );
}
