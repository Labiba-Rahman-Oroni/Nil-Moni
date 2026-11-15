// Formats a number as Bangladeshi Taka. Example: 1200 -> "৳1,200"
export function formatPrice(amount: number): string {
       return `৳${amount.toLocaleString("en-BD")}`;
}