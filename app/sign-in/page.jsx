"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider } from "../firebase/auth"; // Firebase import
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation"; // For redirection

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/dashboard"); // Redirect after login
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  // Manual Sign-In
  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error) {
      console.error("Sign-In Error:", error.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-center text-2xl font-semibold text-gray-700">
          Sign In
        </h2>
        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-3 w-full rounded-lg border p-2 focus:border-gray-500 focus:outline-none"
        />
        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full rounded-lg border p-2 focus:border-gray-500 focus:outline-none"
        />
        {/* Sign-In Button */}
        <button onClick={handleSignIn} className="w-full rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700">
          Sign In
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/sign-up" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
        {/* OR Separator */}
        <div className="my-4 flex items-center">
          <div className="h-px flex-1 bg-gray-300"></div>
          <p className="mx-2 text-sm text-gray-600">OR</p>
          <div className="h-px flex-1 bg-gray-300"></div>
        </div>
        {/* Google Sign-In */}
        <button onClick={handleGoogleSignIn} className="flex w-full items-center justify-center gap-2 rounded-lg border p-2 hover:bg-gray-100">
          <FcGoogle size={20} />
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
}
