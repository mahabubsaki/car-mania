import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [fullName, setFullName] = useState({ success: "", error: "" })
    const handleFullName = (e) => {
        let userInput = e.target.value
        if (userInput.split(' ').length < 2) {
            setFullName({ success: "", error: "Please enter your full name" })
        }
        else {
            setFullName({ success: userInput, error: "" })
        }
    }
    const [email, setEmail] = useState({ success: "", error: "" })
    const handleEmail = (e) => {
        let userInput = e.target.value
        if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(userInput))) {
            setEmail({ success: "", error: "Please enter a valid email" })
        }
        else {
            setEmail({ success: userInput, error: "" })
        }
    }
    const [phone, setPhone] = useState({ success: "", error: "" })
    const handlePhone = (e) => {
        let userInput = e.target.value
        if (userInput.split('')[0] !== '0' || userInput.split('')[1] !== '1' || userInput.length !== 11) {
            setPhone({ success: "", error: "Please enter a valid number" })
        }
        else {
            setPhone({ success: userInput, error: "" })
        }
    }
    const [password, setPassword] = useState({ success: "", error: "" })
    const handlePassword = (e) => {
        let userInput = e.target.value
        if (!(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/.test(userInput))) {
            setPassword({ success: "", error: "Please give a strong password" });
        }
        else {
            setPassword({ success: userInput, error: "" })
        }
    }
    const [confirmPassword, setConfirmPassword] = useState({ success: "", error: "" })
    const handleConfirmPassword = (e) => {
        let userInput = e.target.value
        if (userInput !== password.success) {
            setConfirmPassword({ success: "", error: "Confirm password didn't match" });
        }
        else {
            setConfirmPassword({ success: userInput, error: "" })
        }
    }
    const [gender, setGender] = useState({ success: "", error: "Please choose your gender" })
    const handleGender = (userInput) => {
        setGender({ success: userInput, error: "" })
    }
    const [termsChecked, setTermsChecked] = useState({ success: "", error: "" })
    const handleAgreeTerms = (isChecked) => {
        if (!isChecked) {
            setTermsChecked({ success: "", error: "Please Agree terms and conditions before signing up" })
        }
        else {
            setTermsChecked({ success: isChecked, error: "" })
        }
    }
    const [allOk, setAllOk] = useState(false)
    useEffect(() => {
        if (!fullName.error && !email.error && !phone.error && !password.error && !confirmPassword.error && !gender.error && !termsChecked.error && !!fullName.success && !!email.success && !!phone.success && !!password.success && !!confirmPassword.success && !!gender.success && !!termsChecked.success) {
            setAllOk(true)
        }
        else {
            setAllOk(false)
        }
    }, [fullName.error, email.error, phone.error, password.error, confirmPassword.error, gender.error, termsChecked.error, fullName.success, email.success, phone.success, password.success, confirmPassword.success, gender.success, termsChecked.success])
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(allOk)
    }
    return (
        <div className="border border-black bg-stone-300 w-2/5 mx-auto py-4">
            <h1 className="text-3xl text-center mb-2">Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center">
                    <div className="flex flex-col justify-around mr-4">
                        <label htmlFor="fullname" className="mb-7 mt-4">Full Name</label>
                        <label htmlFor="email" className="mb-7">Email</label>
                        <label htmlFor="telephone" className="mb-7">Phone no</label>
                        <label htmlFor="password" className="mb-7">Password</label>
                        <label htmlFor="confirm-password" className="mb-7">Confirm Password</label>
                        <label htmlFor="gender" className="mb-7">Gender</label>
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-7 mt-4 relative">
                            <div className="text-center text-red-700 absolute bottom-11 left-4">
                                {fullName.error && fullName.error}
                            </div>
                            <input type="text" name="fullname" id="fullname" placeholder="Full Name" className="bg-transparent" onBlur={handleFullName} required />
                        </div>
                        <div className="mb-7 relative">
                            <div className="text-center text-red-700 absolute bottom-11 left-6">
                                {email.error && email.error}
                            </div>
                            <input type="email" name="email" id="email" placeholder="Email" className="bg-transparent" onBlur={handleEmail} required />
                        </div>
                        <div className="mb-7 relative">
                            <div className="text-center text-red-700 absolute bottom-11 left-4">
                                {phone.error && phone.error}
                            </div>
                            <input type="number" name="telephone" id="telephone" placeholder='Phone No' className="bg-transparent" onBlur={handlePhone} required />
                        </div>
                        <div className="mb-7 relative">
                            <div className="text-center text-red-700 absolute bottom-11 left-2">
                                {password.error && password.error}
                            </div>
                            <input type="password" name="password" id="password" placeholder="Password" className="bg-transparent" onBlur={handlePassword} required />
                        </div>
                        <div className="mb-7 relative">
                            <div className="text-center text-red-700 absolute bottom-11 left-1">
                                {confirmPassword.error && confirmPassword.error}
                            </div>
                            <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" className="bg-transparent" onBlur={handleConfirmPassword} required />
                        </div>
                        <div className="mb-7 relative">
                            <div className="text-center text-red-700 absolute bottom-11 left-5">
                                {gender.error && gender.error}
                            </div>
                            <div className="flex items-center justify-between border border-border py-2 px-3">
                                <div className="flex items-center">
                                    <input name="gender" value="male" id="18" type="radio" onChange={(e) => handleGender(e.target.value)} /><p className="ml-2">Male</p>
                                </div>
                                <div className="flex items-center">
                                    <input name="gender" value="female" id="bel" type="radio" onChange={(e) => handleGender(e.target.value)} /><p className="ml-2">Female</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="text-center text-red-700 absolute bottom-6 left-2">
                        {
                            termsChecked.error && termsChecked.error
                        }
                    </div>
                    <div className="flex justify-center items-center">
                        <input type="checkbox" name="" id="" onChange={(e) => handleAgreeTerms(e.target.checked)} />
                        <h1 className="ml-2">I accept terms and conditions</h1>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className={`py-2 px-4 border border-slate-400 ${allOk && "bg-slate-400 hover:bg-slate-700 duration-500"}`} disabled={!allOk} >Sign Up</button>
                </div>
                <p className="text-center text-xl text-green-400">
                    {allOk ? '' : 'Please Fill all the information for signing up'}
                </p>
            </form>
            <div className="flex justify-center">
                <p>Already have an account?<Link to="/login" className='text-stone-600'>Login</Link></p>
            </div>
        </div>
    );
};

export default Signup;