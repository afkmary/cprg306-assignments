"use client";

import { useUserAuth } from "../../../contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/week-9");
    }
  }, [user, router]);

  if (!user) {
    return <p className="p-6 text-white">Redirecting...</p>;
  }

  return (
    <main className="min-h-screen bg-black p-8 text-white flex justify-center">

      <div className="relative bg-white text-black rounded-xl p-6 shadow max-w-lg w-full self-start">

        <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 px-3 py-1 bg-pink-200 hover:bg-pink-300 rounded-full text-sm shadow-md hover:scale-105 transition-all duration-200"
        >
          ← Back
        </button>

        <h1 className="text-2xl font-bold mb-6 text-center">Profile</h1>

        <div className="flex items-center gap-6">
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-24 h-24 rounded-full border shadow"
            />
          )}

          <div className="space-y-2">
            <p><strong>Name:</strong> {user.displayName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>User ID:</strong> {user.uid}</p>
          </div>
        </div>
      </div>

    </main>
  );
}