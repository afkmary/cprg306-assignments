"use client";

import { useUserAuth } from "../../contexts/AuthContext";
import Link from "next/link";

export default function Week9Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-3xl font-bold">Week 9 Firebase Auth</h1>

      {!user && (
        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Login with GitHub
        </button>
      )}

      {user && (
        <div className="flex flex-col items-center gap-4">
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>

          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Logout
          </button>

          <Link
            href="/week-9/shopping-list"
            className="text-blue-500 underline"
          >
            Go to Shopping List
          </Link>
        </div>
      )}
    </main>
  );
}