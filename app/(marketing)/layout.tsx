import { Navbar } from "./_components/navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

export default function MarketingLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
                <body>
                    <ConvexClientProvider>
                        <ThemeProvider
                            attribute="class"
                            defaultTheme="system"
                            enableSystem
                            disableTransitionOnChange
                            storageKey="brainwave-theme"
                        >
                            <div className="h-full dark:bg-[#1F1F1F]">
                                <Navbar />
                                <main className="h-full pt-40">
                                    {children}
                                </main>
                            </div>
                        </ThemeProvider>
                    </ConvexClientProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}

