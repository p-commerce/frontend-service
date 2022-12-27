import React from "react";
import MyImage from "../../images/d1.png"
import {Formik} from 'formik'
export function LogIn() {
    return (
    <div className="bg-[#F9F9F9] w-[100%] h-[100vh] overflow-hidden">
        <div className="bg-white h-[10vh] w-full flex justify-between p-7" >
        <div>*p logo</div>
        <div>
            <a href="/signUp" className="pr-5 text-[#EF5555] bold">SignUp</a>
            <a href="/logIn" className=""> LogIn</a>
        </div>
        </div>
        <div className="flex justify-between pt-[10%] pl-[8%]">
        <div className="pl-[5%] mt-[-5%]">
        <h2 className=" text-lg text-bold pb-5  ">Get Into your Account</h2>
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
            handleSubmit,
            isSubmitting,
            }) =>(
            <form onSubmit={handleSubmit} className="">
                <label className="block text-gray-700 text-sm font-bold mb-2">email</label>
                <input type="email" name="email" onChange={handleChange}  value={values.email} placeholder="email" className="shadow border-[2px] border-[#FFE4E4] rounded w-[80%] py-2 px-3 h-[6vh] text-gray-700 leading-tight focus:outline-none focus:shadow-outline "/> {errors.email && touched.email && errors.email}
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input type="password" name="password" onChange={handleChange}  value={values.password} placeholder="Paasword" className="shadow border-[2px] border-[#FFE4E4] rounded w-[100%] py-2 px-3 h-[6vh] text-gray-700 leading-tight focus:outline-none focus:shadow-outline "/> {errors.password && touched.password && errors.password}
                <input type="checkbox" className="mt-5"/>
                <label>Remember Me </label>
                <button className="bg-[#EF5555] hover:bg-[#f6a1a1] text-white font-bold py-2 mt-5 px-4 w-[80%] rounded focus:outline-none focus:shadow-outline" type="submit" disabled={isSubmitting}>
        Log In
        </button>
            </form>
            )}
        </Formik>
        </div>
        <div className="hidden lg:block pl-[30%] ">
            <img src={MyImage} alt="demo" className="w-[60%]"/>
        </div>
        </div>
        <svg width="1519" height="259" viewBox="0 0 1920 299" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L29 16.9219C58 33.8438 116 67.1041 175 61.8525C233 56.0174 291 11.0868 349 22.757C407 33.8438 465 100.948 524 151.13C582 201.896 640 235.156 698 207.148C756 179.139 815 89.8612 873 50.7657C931 11.0868 989 22.757 1047 61.8525C1105 100.948 1164 168.052 1222 173.887C1280 179.139 1338 123.121 1396 123.121C1455 123.121 1513 179.139 1571 190.809C1629 201.896 1687 168.052 1745 128.957C1804 89.8612 1862 44.9306 1891 22.757L1920 0V269H1891C1862 269 1804 269 1745 269C1687 269 1629 269 1571 269C1513 269 1455 269 1396 269C1338 269 1280 269 1222 269C1164 269 1105 269 1047 269C989 269 931 269 873 269C815 269 756 269 698 269C640 269 582 269 524 269C465 269 407 269 349 269C291 269 233 269 175 269C116 269 58 269 29 269H0V0Z" fill="#FFE4E4"/>
</svg>
    </div>
    );
}
