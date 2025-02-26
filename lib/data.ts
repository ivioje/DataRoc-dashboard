import { Title } from "./interfaces";

export const CardStat = [
  {
    id: "0",
    title: "total income",
    figure: "45800",
    value: 20,
    caption: "increase compared to last week",
    type: "increase",
  },

  {
    id: "1",
    title: "total expenses",
    figure: "12500",
    value: 10,
    caption: "decrease compared to last week",
    type: "decrease",
  },

  {
    id: "2",
    title: "total expenses",
    figure: "18000",
    value: 2,
    caption: "decrease compared to last week",
    type: "decrease",
  },

  {
    id: "3",
    title: "total active subscribers",
    figure: "10340",
    value: 15,
    caption: "increase compared to last week",
    type: "increase",
  },
];

export const ExpensesChartData = [
  {
    id: "europe",
    country: "Europe",
    figure: "8000",
    color: "#12239E",
  },
  {
    id: "africa",
    country: "Africa",
    figure: "2130",
    color: "#009ADE",
  },
  {
    id: "south-america",
    country: "South America",
    figure: "1510",
    color: "#7560AA",
  },
  {
    id: "north-america",
    country: "North America",
    figure: "2245",
    color: "#820000",
  },
  {
    id: "asia",
    country: "Asia",
    figure: "4385",
    color: "#A05A00",
  },
  {
    id: "austria",
    country: "Austria",
    figure: "1000",
    color: "#00733E",
  },
];

export const titles: Title = {
  Paid: "Payable",
  Unpaid: "Unpaid",
  Overdue: "Overdue",
};

export const employees = [
  {
    id: 1,
    name: "Justin Septimus",
    email: "example@email.com",
    status: "Active",
    deposit: "Paid",
    amount: 200,
    paymentDate: "2020/1/15",
  },
  {
    id: 2,
    name: "Anika Rhiel Madsen",
    email: "example@email.com",
    status: "Inactive",
    deposit: "Overdue",
    amount: 300,
    paymentDate: "2024/4/15",
  },
  {
    id: 3,
    name: "Miracle Vaccaro",
    email: "example@email.com",
    status: "Active",
    deposit: "Paid",
    amount: 250,
    paymentDate: "2022/9/15",
  },
  {
    id: 4,
    name: "Jon Doe",
    email: "example@email.com",
    status: "Active",
    deposit: "Unpaid",
    amount: 250,
    paymentDate: "2021/10/15",
  },
];

export const websiteMetricsData = [
  {
    title: "PAGE VIEWS",
    value: "700",
    unit: "",
    change: 20,
    changeType: "increase",
    comparedTo: "compared to last week"
  },
  {
    title: "SESSION DURATION",
    value: "25",
    unit: "minutes",
    change: 10,
    changeType: "decrease",
    comparedTo: "compared to last week"
  },
  {
    title: "BOUNCE RATE",
    value: "80%",
    unit: "",
    change: 2,
    changeType: "decrease",
    comparedTo: "compared to last week"
  },
  {
    title: "UNIQUE VISITORS",
    value: "89",
    unit: "",
    change: 20,
    changeType: "increase",
    comparedTo: "compared to last week"
  },
  {
    title: "CONVERSION RATE",
    value: "10%",
    unit: "",
    change: 15,
    changeType: "increase",
    comparedTo: "compared to last week"
  }
]

 export const conversionChartData = [
    { id: 1, type: 'Mobile', figure: 88, bg: 'rgb(101, 127, 255)' },
    { id: 2, type: 'Desktop', figure: 10, bg: 'rgb(111, 207, 151)' },
    { id: 3, type: 'Tablet', figure: 2, bg: 'rgb(255, 187, 92)' },
]

export const recurringChartData = [
  { name: 'Figma', revenue2023: 52 },
  { name: 'Sketch', revenue2023: 68 },
  { name: 'XD', revenue2023: 65 },
  { name: 'Photoshop', revenue2023: 78 },
  { name: 'Illustrator', revenue2023: 65 },
  { name: 'AfterEffect', revenue2023: 36 }
];

export const websitePageData = [
  { 
    path: '/landing-page', 
    sessions: 23000, 
    bounceRate: '0%', 
    ctr: '10.20%', 
    goalConvRate: '100%',
    pathColor: 'text-blue-500',
    convRateColor: 'bg-green-100'
  },
  { 
    path: '/about-us', 
    sessions: 11203, 
    bounceRate: '35%', 
    ctr: '50.8%', 
    goalConvRate: '20%',
    pathColor: 'text-blue-500',
    convRateColor: 'bg-gray-200'
  },
  { 
    path: '/buy-products', 
    sessions: 45000, 
    bounceRate: '15%', 
    ctr: '66%', 
    goalConvRate: '40%',
    pathColor: 'text-blue-500',
    convRateColor: 'bg-orange-100'
  },
  { 
    path: '/events', 
    sessions: 56504, 
    bounceRate: '14.4%', 
    ctr: '25%', 
    goalConvRate: '48%',
    pathColor: 'text-blue-500',
    convRateColor: 'bg-orange-100'
  },
  { 
    path: '/whats-new', 
    sessions: 45986, 
    bounceRate: '2%', 
    ctr: '33.49%', 
    goalConvRate: '80%',
    pathColor: 'text-blue-500',
    convRateColor: 'bg-green-100'
  },
  { 
    path: '/get-to-know-us', 
    sessions: 30462, 
    bounceRate: '28%', 
    ctr: '58.6%', 
    goalConvRate: '27%',
    pathColor: 'text-blue-500',
    convRateColor: 'bg-gray-200'
  }
];