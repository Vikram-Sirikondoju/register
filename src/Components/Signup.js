import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import { AiTwotoneHome } from 'react-icons/ai';


export default function SignUp() {
    const navigate=useNavigate();
    const submitHandle=(e)=>{
        e.preventDefault();
        navigate('/signin');
    }
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
                        <h1>SignUp</h1>
                        <p  style={{"color":"black","textAlign":"start"}}>Completely employee-owned,we're driven with a passion</p><br />
                        <div class="container text-center">
                            <div class="row">
                                <div class="col-md-6 login">
                                    <p class="icon p-2"   style={{"color":"black"}}><span class="icon m-2"><FcGoogle /></span>Continue with Google</p><br />
                                </div>
                                <div class="col-md-6 login">
                                    <p style={{ "background": "black", "color": "white" }} class="icon p-2"><span class="icon m-2"><BsApple /></span>Continue with Apple</p><br />
                                </div>
                            </div>

                        </div>
                        <p className='para' style={{ "textAlign": "center" }}>OR</p>
                        <form onSubmit={submitHandle}>
                            <div class="mb-3">
                                <input type="email" class="form-control" placeholder='Email or User name' required/><br />

                            </div>
                            <div class="mb-3">
                                <input type="password" class="form-control" placeholder='Password' required/><br />
                            </div>
                            <div class="mb-3">
                                <input type="password" class="form-control" placeholder='Confirm Password' required/><br />
                            </div> 
                    
                             <Link>Forgot Password</Link><br /><br />

                            <div class="d-flex">
                              
                                <Link to="/signin" className="btn btn-link ms-auto">Signin</Link>
                                <button className='btn btn-primary' type="subimt">Continue</button>
                            </div><br /><br /><br /><br/>
                        </form>


                    </div>
                    
                </div>
            </div>

        </center>
    )
}








