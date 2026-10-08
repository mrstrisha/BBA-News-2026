'use client'

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";

const UserInfo = () => {


const {data:session }= authClient.useSession()
const user = session?.user

const handleSignout= async()=>{
    await authClient.signOut();
}
    return (
        <div className="absolute right-0 flex items-center gap-3 ">
            {
                user? <div className="flex flex-col items-center gap-2">
<Link href="/Profile">
  <h2 className="mt-6"> Welcome ,{user?.name}</h2> </Link>
  <button onClick={handleSignout} className="btn btn-error btn-s">Sign Out</button>

 

                </div>: <div>
                       <div>
       <Link href="/signUp"> <Button variant="danger">সাইন আপ</Button>
</Link>

<Link href="/signin">
  <Button variant="ghost">সাইন ইন</Button>
</Link>
        </div>
                </div>}
</div>

         
   
    );
};

export default UserInfo;