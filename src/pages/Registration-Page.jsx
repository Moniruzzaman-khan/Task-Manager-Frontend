import LazyLoader from "../components/MasterLayout/LazyLoader.jsx";
import {lazy, Suspense} from "react";

const Registration = lazy  (()=>import("../components/Registration/Registration.jsx"));

const RegistrationPage = () => {
    return (
        <div>
            <Suspense fallback={<LazyLoader/>}>
                <Registration/>
            </Suspense>
        </div>
    );
};

export default RegistrationPage;