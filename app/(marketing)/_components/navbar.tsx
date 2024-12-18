"use client"
import { useScrollTop } from "@/hooks/use-scroll-top"
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import { Link } from "lucide-react";

export const Navbar = () => {
    const {isAuthenticated , isLoading} = useConvexAuth() ;
    const scrolled =useScrollTop() ;

    return (
        <div className={cn(
            "z-50 bg-background fixed top-0 flex items-center w-full p-4" , 
            scrolled && "border-b shadow-sm"
        )}>
        <Logo/>
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                {isLoading &&  (
                    
                    <Spinner/>
                )}
                {!isAuthenticated && !isLoading && (
                    <>
                    <SignInButton mode = "modal">
                        <Button variant = "ghost" size = "sm">
                        Log In
                        </Button>
                    </SignInButton>

                    <SignInButton mode = "modal">
                        <Button  size = "sm">
                        Get Brainwave Free
                        </Button>
                    </SignInButton>
                    </>
                    
                )}
                {isAuthenticated && !isLoading && (
                    <>
                    <Button variant = "ghost" size ="sm" asChild >
                        <Link href ="/documents">
                        Enter Brainwave
                        
                        </Link>

                    </Button>
                    <UserButton
                    afterSignOutUrl="/"/>
                    
                    </>
                )}
                <ModeToggle />


            </div>
        </div>
    )
}