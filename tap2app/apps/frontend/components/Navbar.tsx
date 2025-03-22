import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-white border-b shadow-sm">
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold text-primary flex items-center gap-2">
          Tap2App
        </Link>
      </div>
      <div>
      <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
      </div>
    </nav>
  );
} 