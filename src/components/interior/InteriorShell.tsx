import { Footer, Header } from "@/components/sections";
import { cn } from "@/lib/cn";

interface InteriorShellProps {
  children: React.ReactNode;
  className?: string;
}

export function InteriorShell({ children, className }: InteriorShellProps) {
  return (
    <>
      <Header />
      <main className={cn("overflow-clip", className)}>{children}</main>
      <Footer />
    </>
  );
}
