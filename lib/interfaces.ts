export interface CardInterface {
  title: string;
  figure: string;
  type: string;
  value: number;
  caption: string;
}

export interface Title {
  Paid: string;
  Unpaid: string;
  Overdue: string;
}

export interface SankeyLink {
  source: string;
  target: string;
  value: number;
  color?: string;
}

interface Employee {
  id: number;
  name: string;
  email: string;
  status: string;
  deposit: string;
  amount: number;
  paymentDate: string;
}

export interface RevenueState {
  employees: Employee[];
  filteredUsers: Employee[];
  search: string;
  isActive: string;
  sortBy: string;
  title: string;
  total: number;
  selectedRows: Set<number>;
  
  setSearch: (search: string) => void;
  setSortBy: (sortBy: string) => void;
  filterUsers: (filter: string) => void;
  sortUsers: () => void;
  searchUsers: () => void;
  toggleSelectAll: () => void;
  toggleSelectRow: (id: number) => void;
  isAllSelected: () => boolean;
  isRowSelected: (id: number) => boolean;
}