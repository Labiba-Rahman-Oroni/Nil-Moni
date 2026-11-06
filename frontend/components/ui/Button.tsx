import Link from "next/link";
import { cn } from "@/utils/cn";

type ButtonProps = {
       children: React.ReactNode;
       variant?: "primary" | "secondary";
       href?: string;
       className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const baseStyles =
       "inline-flex items-center justify-center rounded-full px-7 py-3.5 font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal";

const variantStyles = {
       primary:
              "bg-royal text-white shadow-soft hover:-translate-y-0.5 hover:opacity-95",
       secondary:
              "border border-royal/30 bg-cream-pale text-royal hover:border-royal hover:bg-royal-tint",
};

export default function Button({
       children,
       variant = "primary",
       href,
       className,
       ...props
}: ButtonProps) {
       const styles = cn(baseStyles, variantStyles[variant], className);

       // If an href is given, render a link (looks like a button)
       if (href) {
              return (
                     <Link href={href} className={styles}>
                            {children}
                     </Link>
              );
       }

       // Otherwise render a real <button>
       return (
              <button className={styles} {...props}>
                     {children}
              </button>
       );
}
