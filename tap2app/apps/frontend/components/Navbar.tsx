import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-white border-b shadow-sm">
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold text-primary flex items-center gap-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="size-6"
          >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
          </svg>
          Tap2App
        </Link>
      </div>
      <div>
        <Button className="bg-primary text-black hover:bg-primary/90 font-medium">
          Login
        </Button>
      </div>
    </nav>
  );
} 