"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
     toast.success("Sign in successfully")
      redirect("/");
    }

    if (error) {
      toast.error(error?.message)
    } 
      };
const handleGoogleSignUp= async()=>
        {
           const data = await authClient.signIn.social({
        provider: "google",
      });
    };




    return (
        <div>
            <h1 className="m-2">Welcome to Sign Up page</h1>
            <div className="mt-4 ">
                <form onSubmit={onSubmit}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
   <label className="label">Name</label>
  <input name="name" type="name" className="input" placeholder="Name" />

    <label className="label">ImageURL</label>
  <input name="image" type="url" className="input" placeholder="Image" />

  <label className="label">Email</label>
  <input name="email" className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input name="password" className="input" placeholder="Password" />

  <button type="submit" className="btn bg-red-600 text-white mt-4">সাইন আপ</button>
</fieldset>
</form>
<button onClick={handleGoogleSignUp } className="btn  border-gray-300  bg-white mt-5">Sign In with Google</button>


</div>
            
        </div>
    );
};

export default SignUpPage;