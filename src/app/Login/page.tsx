"use client";

import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Input } from "@/app/components/Ui/input";
import { Divide } from 'lucide-react';

const Login = () => {
    return (
        <div className=" w-full ">
            <Navbar />

            {/* Login Section */}
            <section className="flex-grow flex justify-center items-center py-4 px-4">
                <div className="bg-white p-6 shadow-lg rounded-lg max-w-md w-full sm:p-8 md:p-10">
                    {/* Logo */}
                    <div className="flex justify-center mb-6">
                        <img
                            src={"image(1).png"}
                            alt="Nike Logo"
                            width={100}
                            height={35}
                            className="mb-4"
                        />
                    </div>

                    {/* Title */}
                    <div className="text-center mb-6">
                        <h1 className="font-bold text-xl sm:text-2xl">YOUR ACCOUNT</h1>
                        <h1 className="font-bold text-xl sm:text-2xl">FOR EVERYTHING</h1>
                        <h1 className="font-bold text-xl sm:text-2xl">NIKE</h1>
                    </div>

                    {/* Input Fields */}
                    <div className="flex flex-col gap-4">
                        <Input type="email" placeholder="Email" className="w-full" />
                        <Input type="password" placeholder="Password" className="w-full" />
                    </div>

                    {/* Options */}
                    <div className="flex justify-between items-center w-full mt-4 text-sm text-gray-600">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" /> Keep me signed in
                        </label>
                        <p className="cursor-pointer hover:text-gray-900">Forgot password?</p>
                    </div>

                    {/* Policy */}
                    <div className="text-center text-sm text-gray-600 mt-4">
                        <p>
                            By logging in, you agree to Nike&apos;s{" "}
                            <u className="cursor-pointer">Privacy Policy</u>
                        </p>
                        <p>
                            and <u className="cursor-pointer">Terms of Use</u>
                        </p>
                    </div>

                    {/* Login Button */}
                    <Link href="/">
                        <div className="mt-6 w-full text-center flex justify-center items-center h-10 border bg-white text-black rounded hover:text-white hover:bg-black transition duration-200">
                            Login
                        </div>
                    </Link>

                    {/* Join Us */}
                    <p className="mt-4 text-sm text-center text-gray-600">
                        Not a Member?{" "}
                        <Link href="/Join">
                            <u className="text-black hover:text-blue-700">Join us?</u>
                        </Link>
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Login;