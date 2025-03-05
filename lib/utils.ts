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
          { name: "About Us Page" },
          { name: "Buy Products Page" },
          { name: "Events Page" },
          { name: "What's New Page" },
          { name: "Get to Know Us Page" },
        ],
        links: [
          { source: 0, destination:3, target: 1, value: 11203 },
          { source: 1, destination:5, target: 2, value: 45000 },
          { source: 2, destination:1, target: 3, value: 56504 },
          { source: 3, destination:0, target: 4, value: 45986 },
          { source: 4, destination:4, target: 5, value: 23000 },
        ],
      };
      
    case "User Conversion Analysis":
      return {
        nodes: [
          { name: "Ad Clicked" },
          { name: "Website Visit" },
          { name: "Product Viewed" },
          { name: "Purchase" },
          { name: "Viewed Account" },
          { name: "Updated Profile" },
        ],
        links: [
          { source: 0, target: 1, value: 200 },
          { source: 1, target: 2, value: 150 },
          { source: 2, target: 3, value: 70 },
          { source: 3, target: 4, value: 70 },
          { source: 4, target: 5, value: 70 },
        ],
      };
    
    default:
      return null;
  }
};
