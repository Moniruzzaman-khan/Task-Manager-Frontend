import LazyLoader from "../components/MasterLayout/LazyLoader.jsx";
import {lazy, Suspense} from "react";
import MasterLayout from "../components/MasterLayout/MasterLayout.jsx";

const Profile = lazy  (()=>import("../components//Profile/Profile.jsx"));


const ProfilePage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Profile/>
                </Suspense>
            </MasterLayout>
        </div>
    );
};

export default ProfilePage;