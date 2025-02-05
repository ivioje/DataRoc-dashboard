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
