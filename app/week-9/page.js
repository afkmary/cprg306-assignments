"use client";

import { useUserAuth } from "../../contexts/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Week9Page() {
  const { user, gitHubSignIn, googleSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  const handleGitHubLogin = async () => {
    try {
      await gitHubSignIn();
      router.push("/week-9/shopping-list");
    } catch (error) {
      console.error("GitHub login error:", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
      router.push("/week-9/shopping-list");
    } catch (error) {
      console.error("Google login error:", error);
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
        <div className="flex flex-col gap-3">
          <button
            onClick={handleGitHubLogin}
            className="px-4 py-2 bg-black text-white rounded"
          >
            Login with GitHub
          </button>

          <button
            onClick={handleGoogleLogin}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Login with Google
          </button>
        </div>
      )}

      {user && (
        <div className="flex flex-col items-center gap-4">
          <p>
            Hello, {user.displayName}!
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