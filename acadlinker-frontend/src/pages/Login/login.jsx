import React from "react";
import { Link } from "react-router-dom";
import GoogleLoginComp from "../../components/GoogleLogin/googleLoginComp.jsx";

const Login = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center ">
            <div className="text-4xl mb-5">Sign in to continue to AcadLinker</div>
            <div className="w-[85%] md:w-[28%] shadow-xl rounded-sm box p-10">
                <div className="text-3xl">Welcome back ! </div>
                <div className="my-5">
                    <GoogleLoginComp/>
                </div>
                <div className="flex items-center gap-2">
                    <div className="border-b-1 border-gray-400 w-[45%]" /><div>or</div><div className="border-b-1 border-gray-400 w-[45%] my-6" />
                </div>

                 <div className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" className="w-full text-xl border-2 rounded-lg px-5 py-1" placeholder="Email"/>
                    </div>

                     <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="w-full text-xl border-2 rounded-lg px-5 py-1" placeholder="Password"/>
                    </div>

                    <div className="w-full hover:bg-purple-900 bg-purple-800 text-white py-3 px-4 rounded-xl text-center cursor-pointer  my-2">
                        Sign In
                    </div>
                </div>
            </div>
            <div className="my-4 mb-10">New to AcadLinker? <Link to={'/signUp'} className="text-blue-800 cursor-pointer">Join Now</Link></div>
         </div>
    )
}
export default Login