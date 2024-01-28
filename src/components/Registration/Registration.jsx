import {useRef} from "react";
import {Link, useNavigate} from "react-router-dom";
import {ErrorToast, IsEmail, IsEmpty, IsMobile} from "../../helper/FormValidation.jsx";
import {ToastContainer} from "react-toastify";
import {RegistrationRequest} from "../../APIRequest/APIRequest.jsx";

const Registration = () => {


    let navigate=useNavigate();

    let emailRef,firstNameRef,lastNameRef,mobileRef,passwordRef= useRef();

    const onRegistration = () => {
        let email = emailRef.value;
        let firstName = firstNameRef.value;
        let lastName = lastNameRef.value;
        let mobile = mobileRef.value;
        let password = passwordRef.value;
        let photo = "data:image/jpeg;base64,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"

        if(IsEmail(email)){
            ErrorToast("Valid Email Address Required !")
        }
        else if(IsEmpty(firstName)){
            ErrorToast("First Name Required !")
        }
        else if(IsEmpty(lastName)){
            ErrorToast("Last Name Required !")
        }
        else if(!IsMobile(mobile)){
            ErrorToast("Valid Mobile  Required !")
        }
        else if(IsEmpty(password)){
            ErrorToast("Password Required !")
        }
        else{
            RegistrationRequest(email,firstName,lastName,mobile,password,photo).then((result)=>{
                if(result===true){
                    navigate("/login")
                }
            })
        }
    }


    return (
        <div className="container">
            <div className="row  justify-content-center">
                <div className="col-md-10 col-lg-10 center-screen">
                    <div className="card animated fadeIn w-100 p-3">
                        <div className="card-body">
                            <h4>Sign Up</h4>
                            <hr/>
                            <div className="container-fluid m-0 p-0">
                                <div className="row m-0 p-0">
                                    <div className="col-md-4 p-2">
                                        <label>Email Address</label>
                                        <input ref={(input)=>emailRef=input} placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>First Name</label>
                                        <input ref={(input)=>firstNameRef=input} placeholder="First Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Last Name</label>
                                        <input ref={(input)=>lastNameRef=input} placeholder="Last Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Mobile Number</label>
                                        <input ref={(input)=>mobileRef=input} placeholder="Mobile" className="form-control animated fadeInUp" type="mobile"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Password</label>
                                        <input ref={(input)=>passwordRef=input} placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                    </div>
                                </div>
                                <div className="row mt-2 p-0">
                                    <div className="col-md-4 p-2">
                                        <button onClick={onRegistration} className="btn mt-3 w-100 float-end btn-primary animated fadeInUp">Complete</button>
                                        <ToastContainer />
                                        <br/>
                                        <Link className="text-center" to="/SendOTP">Forget Password</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;