// Joins class names and ignores empty values.
// Example: cn("p-4", isActive && "bg-royal") -> "p-4 bg-royal" or "p-4"
export function cn(...classes: Array<string | false | null | undefined>) {
       return classes.filter(Boolean).join(" ");
}