import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { ClerkProvider } from '@clerk/nextjs'
import Link from 'next/link';


export default function Home() {
  return (
    <ClerkProvider>
      <div className="h-screen">
        <h3>Home page</h3>
        <UserButton />
        <Link href="/app/admin/dashboard/page">
            <button>Go to Admin Dashboard</button>
        </Link>
      </div>
    </ClerkProvider>
  )
}