"use client"
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
 
export default function UnSafePage() {
  const { user } = useUser();
  const [birthday, setBirthday] = useState(""); // Initialize birthday with an empty string
 
  return (
    <div>
      <input type="text" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
      <button onClick={() => {
        user?.update({
          unsafeMetadata: {
            birthday
          }
        });
      }}>Update Birthday</button>
    </div>
  );
}
