import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [allOk, setAllOk] = useState(false)
    useEffect(() => {
        if (!!email && !!password) {
            setAllOk(true)
        }
        else {
            setAllOk(false)
        }
    }, [email, password])
    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                toast.success('Successfully Loged in')
                navigate(from, { replace: true });
            })
            .catch((error) => {
                toast.error(error.message);
            });
    }
    return (
        <div className="border border-black bg-stone-300 w-full sm:w-3/4 mx-auto py-4">
            <Toaster />
            <form onSubmit={handleSubmit}>
                <h1 className="text-3xl text-center mb-2">Log in</h1>
                <div className="flex justify-center">
                    <div className="flex flex-col justify-around mr-1 sm:mr-4">
                        <label htmlFor="email" className="mb-7">Email</label>
                        <label htmlFor="password" className="mb-7">Password</label>
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-7 relative">
                            <input type="email" name="email" id="email" placeholder="Email" className="bg-transparent" onBlur={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="mb-7 relative">
                            <input type="password" name="password" id="password" placeholder="Password" className="bg-transparent" onBlur={(e) => setPassword(e.target.value)} required />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className={`py-2 px-4 border border-slate-400 ${allOk && "bg-slate-400 hover:bg-slate-700 duration-500"}`} disabled={!allOk}>Log In</button>
                </div>
            </form>
            <div className="flex justify-center text-xl">
                <p>New to Car Mania? <Link to="/signup" className='text-stone-600'>Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;