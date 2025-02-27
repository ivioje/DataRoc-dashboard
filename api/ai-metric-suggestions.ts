import { aiMetricSuggestions } from "@/lib/data";

export default function handler(res: any) {
  return res.status(200).json({ suggestions: aiMetricSuggestions });
}
