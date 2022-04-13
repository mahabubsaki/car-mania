import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, sendEmailVerification, signInWithPopup } from 'firebase/auth';
import auth from '../../firebase.init';
import toast, { Toaster } from 'react-hot-toast';

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
        if (userInput.split('')[0] !== '0' || userInput.split('')[1] !== '1' || userInput.length !== 11 || isNaN(Number(userInput))) {
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
        if (userInput !== confirmPassword.success) {
            setConfirmPassword({ success: "", error: "Confirm password didn't match" });
        }
        else {
            setConfirmPassword({ success: "", error: "" });
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
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const handleContinueWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user)
            }).catch((error) => {
                console.log(error);
            });
    }
    const handleContinueWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                console.log(result.user)
            }).catch((error) => {
                console.log(error);
            });
    }
    const handleContinueWithFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                console.log(result.user)
            }).catch((error) => {
                console.log(error);
            });
    }
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        createUserWithEmailAndPassword(auth, email.success, password.success)
            .then((result) => {
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        toast.success(`An verification email has sent to your ${result.user.email}`)
                        toast.success('Successfully signed up!')
                        setTimeout(() => {
                            navigate('/')
                        }, 5000)
                    });
            })
            .catch(() => {
                toast.error('Email already in use');
            })

    }
    return (
        <div className="border border-black bg-stone-300 w-full sm:w-3/4 mx-auto py-4">
            <Toaster />
            <h1 className="text-3xl text-center mb-2">Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center">
                    <div className="flex flex-col justify-around mr-1 sm:mr-4">
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
            <p className="text-2xl text-center mb-2">or</p>
            <div className="flex justify-center mb-2">
                <button className="bg-red-500 p-2" onClick={handleContinueWithGoogle}>Continue with Google <FontAwesomeIcon icon={faArrowRightFromBracket} className="ml-2 relative top-0" /></button>
            </div>
            <div className="flex justify-center mb-2">
                <button className="bg-red-500 py-2 px-3" onClick={handleContinueWithGithub}>Continue with Github<FontAwesomeIcon icon={faArrowRightFromBracket} className="ml-2 relative top-0" /></button>
            </div>
            <div className="flex justify-center">
                <button className="bg-red-500 py-2 px-1" onClick={handleContinueWithFacebook}>Continue with Facebook<FontAwesomeIcon icon={faArrowRightFromBracket} className="ml-2 relative top-0" /></button>
            </div>
            <div className="flex justify-center text-xl">
                <p>Already have an account? <Link to="/login" className='text-stone-600'>Login</Link></p>
            </div>
        </div>
    );
};

export default Signup;