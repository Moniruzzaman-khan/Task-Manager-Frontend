import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import DashboardPage from "./pages/Dashboard-Page.jsx";
import CanceledPage from "./pages/Canceled-Page.jsx";
import CompletedPage from "./pages/Completed-Page.jsx";
import CreatePage from "./pages/Create-Page.jsx";
import LoginPage from "./pages/Login-Page.jsx";
import NewPage from "./pages/New-Page.jsx";
import ProfilePage from "./pages/Profile-Page.jsx";
import ProgressPage from "./pages/Progress-Page.jsx";
import RegistrationPage from "./pages/Registration-Page.jsx";
import FullscreenLoader from "./components/MasterLayout/FullscreenLoader.jsx";
import {getToken} from "./helper/SessionHelper.jsx";
import {Fragment} from "react";
import SendOTPPage from "./pages/AccountRecover/Send-OTP-Page.jsx";
import VerifyOTPPage from "./pages/AccountRecover/Verify-OTP-Page.jsx";
import CreatePasswordPage from "./pages/AccountRecover/Create-Password-Page.jsx";
import {ToastContainer} from "react-toastify";

const App = () => {
    if(getToken()){
        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<DashboardPage/>}/>
                        <Route exact path="/Canceled" element={<CanceledPage/>}/>
                        <Route exact path="/Completed" element={<CompletedPage/>}/>
                        <Route exact path="/Create" element={<CreatePage/>}/>
                        <Route exact path="/New" element={<NewPage/>}/>
                        <Route exact path="/Profile" element={<ProfilePage/>}/>
                        <Route exact path="/Progress" element={<ProgressPage/>}/>
                    </Routes>
                </BrowserRouter>
                <FullscreenLoader/>
                <ToastContainer/>
            </Fragment>
        );
    }
    else {
        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navigate to="/Login" replace />}/>
                        <Route exact path="/Login" element={<LoginPage/>}/>
                        <Route exact path="/Registration" element={<RegistrationPage/>}/>
                        <Route exact path="/SendOTP" element={<SendOTPPage/>}/>
                        <Route exact path="/VerifyOTP" element={<VerifyOTPPage/>}/>
                        <Route exact path="/CreatePassword" element={<CreatePasswordPage/>}/>
                    </Routes>
                </BrowserRouter>
                <ToastContainer/>
            </Fragment>
        );
    }
};

export default App;
