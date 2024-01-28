import LazyLoader from "../components/MasterLayout/LazyLoader.jsx";
import {Fragment, lazy, Suspense} from "react";
import FullscreenLoader from "../components/MasterLayout/FullscreenLoader.jsx";

const Login =lazy(() => import('../components/Login/Login'));

const LoginPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
                <Login/>
            </Suspense>
        </Fragment>
    );
};

export default LoginPage;