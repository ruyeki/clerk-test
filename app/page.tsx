import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { ClerkProvider } from '@clerk/nextjs'

export default function Home() {
  return (
    <ClerkProvider>
      <div className="h-screen">
        <h3>Home page</h3>
        <UserButton />
      </div>
    </ClerkProvider>
  )
}