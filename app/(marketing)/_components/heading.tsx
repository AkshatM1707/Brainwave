
"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { useConvexAuth } from "convex/react";
import { ArrowRight, Link } from "lucide-react";

export const Heading = () => {

    const {isAuthenticated,isLoading} = useConvexAuth() ;
    console.log("Auth status:", { isAuthenticated, isLoading });
    return (
        <div className="max-w-3xl space-y-4 mt-16 md:mt-24">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Your Ideas, Documents, & plans, Unified. 
                Welcome to 
                <span className="underline"> Brainwave</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Brainwave is the connected workspace where <br />
                your productivity skyrockets.
            </h3>
            {isLoading && (
                <div className="w-full flex items-center justify-center">
                    <Spinner size = "lg" />
                </div>
            )}
            {/* This needs to be changed when I can figure out the issue with authentication. it should be && !isLoading */}
            {!isAuthenticated && !isLoading && ( 
            <Button asChild>
                <Link href="/documents">
                    Enter Brainwave
                    <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
            </Button>
            )}

            {/* {!isAuthenticated && !isLoading && (
                <SignInButton mode ="modal" >
                    <Button>
                        Get Brainwave Free
                        <ArrowRight className= "h-4 w-4 ml-2" />
                        

                    </Button>


                </SignInButton>
            )} */}
        </div>
    );
};