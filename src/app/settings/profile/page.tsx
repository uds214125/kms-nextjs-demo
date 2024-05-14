import { notFound } from "next/navigation";

// http://localhost:3000/settings/profile
const Profile = () => {
    const value =0;
    if(!value){
        notFound();
    }
    return (
        "User Profile Settings"
    )
}
export default Profile;