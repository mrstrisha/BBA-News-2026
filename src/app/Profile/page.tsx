
'use client'
import { authClient } from "@/lib/auth-client";

import Link from "next/link";
import { useState } from "react";

const profilePage = () => {
    const {data:session }= authClient.useSession()
const user = session?.user;

const [show, setShow ] = useState (false)

const handleUpdateProfile = async(e:React.SubmitEvent<HTMLElement>) =>{
    e.preventDefault()
    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries())as {name:string, image:string}
    await authClient.updateUser({...newUserData})}

    const handleShowForm = () =>{
        setShow(!show)
    }



    return (
        <div>
            ProfilePage
            <Link href="/Profile">
              <h2 className="mt-6"> {user?.name}</h2>
              <h2>{user?.email}</h2> </Link>

              <button onClick={handleShowForm} className="btn m-2">Edit Profile</button>

             { show && <form onSubmit={handleUpdateProfile }>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
   <label className="label">Name</label>
  <input name="name" type="name" className="input" placeholder="Name" />

  
    <button type="submit" className="btn bg-red-600 text-white mt-4">Update Profile</button>
</fieldset>
</form>}
        </div>
    );
};

export default profilePage;