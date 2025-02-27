import { sankeyData } from "@/lib/data";

export default function handler(req: any, res: any) {

  const { metrics } = req.body; 
  // metrics might be an array like ["userPath", "userConversion"]

  // For demonstration, we’ll only handle "userPath" and "userConversion"
  let responseData = {};

  if (metrics.includes('userPath')) {
    responseData = sankeyData;
  }

  if (metrics.includes('userConversion')) {
    // Return some hypothetical conversion data
    responseData = {
      totalUsers: 100000,
      converted: 28000,
      conversionRate: '28%'
    };
  }

  return res.status(200).json(responseData);
}
