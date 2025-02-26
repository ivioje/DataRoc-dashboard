export interface CardInterface {
  title: string;
  figure: string;
  type: string;
  value: number;
  caption: string;
}

export interface GlobalContextType {
  selectedValue: string;
  handleSelectChange: (value: string) => void;
}

export const defaultContextValue: GlobalContextType = {
  selectedValue: "",
  handleSelectChange: () => {},
};

export interface Title {
  Paid: string;
  Unpaid: string;
  Overdue: string;
}