"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, useClerk, useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import Link  from "next/link";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const { signOut } = useClerk();
  const { userId } = useAuth();
  const scrolled = useScrollTop();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-4",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Spinner />}
        {(!isAuthenticated && !isLoading && !userId) && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </SignInButton>

            <SignInButton mode="modal">
              <Button size="sm">Get Brainwave Free</Button>
            </SignInButton>
          </>
        )}
        {(isAuthenticated || userId) && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">Enter Brainwave</Link>
            </Button>

            <Button size="lg" onClick={handleSignOut}>
              Sign Out
            </Button>
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};