import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getSankeyData = (metric: string) => {
  switch (metric) {
    case "User Path Analysis":
      return {
        nodes: [
          { name: "Landing Page" },
          { name: "Signup Page" },
          { name: "Dashboard" },
          { name: "Checkout" },
        ],
        links: [
          { source: 0, target: 1, value: 100 },
          { source: 1, target: 2, value: 80 },
          { source: 2, target: 3, value: 50 },
        ],
      };
      
    case "User Conversion Analysis":
      return {
        nodes: [
          { name: "Ad Clicked" },
          { name: "Website Visit" },
          { name: "Product Viewed" },
          { name: "Purchase" },
        ],
        links: [
          { source: 0, target: 1, value: 200 },
          { source: 1, target: 2, value: 150 },
          { source: 2, target: 3, value: 70 },
        ],
      };
    
    default:
      return null;
  }
};
