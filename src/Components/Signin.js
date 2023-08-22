import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import { AiTwotoneHome } from 'react-icons/ai';


function Signin(){
    const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const usernameOf = (e) => {
    setUsername(e.target.value);
  };
  const passwordOf = (e) => {
    setPassword(e.target.value);
  };
  const navigate = useNavigate();
  const data = async (e) => {
    e.preventDefault();
    const result = await fetch("http://localhost:5000/posts");
    const finalresult = await result.json();
    const finalpassword = finalresult.filter(
      (eachitem) => eachitem.username === username
    );
    if (password === finalpassword[0].password) {
      navigate("/build");
    } else {
      console.log("failed");
    }
    console.log(finalpassword);
  };
    // const navigate = useNavigate();
    // const submitHandle = (e) => {
    //     e.preventDefault();
    //     navigate("/alert");
    // }
    return (
        <center>

            <div class="row">
                <div class="col-md-4 first"></div>
                <div class="col-md-8">
                    <div class="signin">
                        <div class="row">
                            <div class="col-md-11"></div>
                            <div class="col-md-1" style={{ "fontSize": "40px" }}><AiTwotoneHome /></div>
                        </div>
                        <h1>SignIn</h1>
                        <p style={{"color":"black","textAlign":"start"}}>Completely employee-owned,we're driven with a passion</p><br />
                        <div class="container text-center">
                            <div class="row">
                                <div class="col-md-6 login">
                                    <p class="icon p-2" style={{"color":"black"}}><span class="icon m-2"><FcGoogle /></span>Continue with Google</p><br />
                                </div>
                                <div class="col-md-6 login">
                                    <p style={{ "background": "black", "color": "white" }} class="icon p-2"><span class="icon m-2"><BsApple /></span>Continue with Apple</p><br />
                                </div>
                            </div>
                        </div>
                        <p className='para' style={{ "textAlign": "center" }}>OR</p>
                        <form onSubmit={data}>
                            <div class="mb-3">
                                <input type="email" class="form-control" placeholder='Email or User name'  onChange={usernameOf} required /><br />

                            </div>
                            <div class="mb-3">
                                <input type="password" class="form-control" placeholder='Password' onChange={passwordOf} required /><br />
                            </div>
                            <Link>Forgot Password</Link><br /><br />

                            <div class="d-flex">

                                <Link to="/" className="btn btn-link ms-auto">Signup</Link>
                                <button className='btn btn-primary' type="submit">Continue</button>
                            </div><br /><br />
                        </form><br /><br /><br /><br />


                    </div>

                </div>
            </div>

        </center>
    )
}
export default Signin;