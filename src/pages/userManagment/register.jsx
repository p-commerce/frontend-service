import React from "react";
import MyImage from "../../images/d1.png"
import {Formik} from 'formik'
export function Register() {
    return (
    <div className="bg-[#F9F9F9] w-[100%] h-[100vh]">
        <div className="bg-white h-[12vh] w-full flex justify-between p-7" >
        <div>*p logo</div>
        <div>
            <button onClick={"#"} className="pr-5">SignUp</button>
            <button onClick={"/login"}>Login</button>
        </div>
        </div>
        <div className="flex justify-between pt-10">
        <div className="pl-[5%]">
        <h2>Create an Account</h2>
        <Formik
            initialValues = {{firstName:'', lastName:'',phoneNumber:'', email:'', password:'' }}
            validate = {values =>{
            const errors = {};
            if(!values.phoneNumber){
                errors.phoneNumber = "required";
            }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                errors.email = "invalid email address";
            }
            return errors;
            }}
            onSubmit = {(values, {setSubmitting})=>{
            setTimeout(()=>{
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            },400);
            }}
        >
            {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            }) =>(
            <form onSubmit={handleSubmit}>
              <label className=" inline text-gray-700 text-sm font-bold mb-2">First Name *</label>
                <input type="email" name="firstname" onChange={handleChange} onBlur={handleBlur} value={values.firstName} required className="shadow border-[#FFE4E4] border-[2px] rounded w-[100%] h-[6vh] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " placeholder="first Name" /> {errors.firstName && touched.firstName && errors.firstName} 
              <label className="block text-gray-700 text-sm font-bold mb-2">Last Name *</label>
                <input type="text" name="lastname" onChange={handleChange} onBlur={handleBlur} value={values.lastName} required placeholder="last name" className="shadow border-[2px] border-[#FFE4E4] rounded w-[100%] h-[6vh] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " /> {errors.lastName && touched.lastName && errors.lastName}
              <label className="block text-gray-700 text-sm font-bold mb-2">phone number *</label>
                <input type="text" name="phonenumber" onChange={handleChange} onBlur={handleBlur} value={values.phoneNumber} required placeholder="phone number" className="shadow border-[2px] border-[#FFE4E4] h-[6vh] rounded w-[100%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " /> {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
                <label className="block text-gray-700 text-sm font-bold mb-2">email</label>
                <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder="email" className="shadow border-[2px] border-[#FFE4E4] rounded w-[100%] py-2 px-3 h-[6vh] text-gray-700 leading-tight focus:outline-none focus:shadow-outline "/> {errors.email && touched.email && errors.email}
                <input type="checkbox" className="mt-5"/>
                <label>I agree to User Agreement </label>
                <button class="bg-[#EF5555] hover:bg-[#f6a1a1] text-white font-bold py-2 mt-5 px-4 w-[80%] rounded focus:outline-none focus:shadow-outline" type="submit" disabled={isSubmitting}>
        Sign In
        </button>
            </form>
            )}
        </Formik>
        </div>
        <div className="hidden lg:block pl-[30%] ">
            <img src={MyImage} alt="demo" className="w-[60%]"/>
        </div>
        </div>
        <div>
        <div>
        <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" >
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                
                <g transform="translate(-4.000000, 76.000000)" fill="#FFE4E4" fill-rule="nonzero">
                    <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                </g>
            </g>
        </svg>
    </div>
    </div>
    </div>
    );
}
