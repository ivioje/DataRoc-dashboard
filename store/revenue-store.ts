import { create } from 'zustand';
import { employees, titles } from "@/lib/data";
import { RevenueState } from '@/lib/interfaces';

export const useRevenueStore = create<RevenueState>((set, get) => ({
  employees: employees,
  filteredUsers: employees,
  search: "",
  isActive: "All",
  sortBy: "Default",
  title: "Revenue",
  total: employees.reduce((sum, employee) => sum + employee.amount, 0),
  selectedRows: new Set<number>(),

  setSearch: (search) => {
    set({ search });
    get().searchUsers();
  },

  setSortBy: (sortBy) => {
    set({ sortBy });
    get().sortUsers();
  },

  filterUsers: (filter) => {
    const { employees } = get();
    let filteredList = employees;
    let newTitle = "Revenue";

    switch (filter) {
      case "All":
        filteredList = [...employees];
        break;
      case "Active":
      case "Inactive":
        filteredList = employees.filter(
          (employee) => employee.status === filter
        );
        break;
      default:
        filteredList = employees.filter(
          (employee) => employee.deposit === filter
        );
        newTitle = titles[filter as keyof typeof titles] || "Revenue";
    }

    const totalAmount = filteredList.reduce(
      (sum, employee) => sum + employee.amount,
      0
    );

    set({ 
      filteredUsers: filteredList,
      isActive: filter,
      title: newTitle,
      total: totalAmount
    });

    get().sortUsers();
    get().searchUsers();
  },

  sortUsers: () => {
    const { filteredUsers, sortBy } = get();
    let sortedUsers = [...filteredUsers];

    switch (sortBy) {
      case "First Name":
        sortedUsers = [...sortedUsers].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Last Name":
        sortedUsers = [...sortedUsers].sort((a, b) => {
          const aLast = a.name.split(" ").pop() || "";
          const bLast = b.name.split(" ").pop() || "";
          return aLast.localeCompare(bLast);
        });
        break;
      case "Due Date":
        sortedUsers = [...sortedUsers].sort(
          (a, b) =>
            new Date(a.paymentDate).getTime() -
            new Date(b.paymentDate).getTime()
        );
        break;
      case "Default":
      case "Last Login":
      default:
        break;
    }

    set({ filteredUsers: sortedUsers });
  },

  searchUsers: () => {
    const { employees, search, isActive } = get();
    
    let baseUsers = employees;
    
    if (isActive !== "All") {
      if (isActive === "Active" || isActive === "Inactive") {
        baseUsers = employees.filter(
          (employee) => employee.status === isActive
        );
      } else {
        baseUsers = employees.filter(
          (employee) => employee.deposit === isActive
        );
      }
    }
    
    if (search) {
      const searchResults = baseUsers.filter(
        (employee) =>
          employee.name.toLowerCase().includes(search.toLowerCase()) ||
          employee.email.toLowerCase().includes(search.toLowerCase()) ||
          employee.paymentDate.includes(search)
      );
      
      set({ filteredUsers: searchResults });
    } else {
      set({ filteredUsers: baseUsers });
    }
    
    get().sortUsers();
    
    const totalAmount = get().filteredUsers.reduce(
      (sum, employee) => sum + employee.amount,
      0
    );
    
    set({ total: totalAmount });
  },

  toggleSelectAll: () => {
    const { filteredUsers, selectedRows } = get();
    const allSelected = get().isAllSelected();
    
    if (allSelected) {
      // If all are selected, deselect all
      set({ selectedRows: new Set() });
    } else {
      // Select all filtered users
      const newSelectedRows = new Set(selectedRows);
      filteredUsers.forEach(employee => {
        newSelectedRows.add(employee.id);
      });
      set({ selectedRows: newSelectedRows });
    }
  },

  toggleSelectRow: (id: number) => {
    const { selectedRows } = get();
    const newSelectedRows = new Set(selectedRows);
    
    if (newSelectedRows.has(id)) {
      newSelectedRows.delete(id);
    } else {
      newSelectedRows.add(id);
    }
    
    set({ selectedRows: newSelectedRows });
  },

  isAllSelected: () => {
    const { filteredUsers, selectedRows } = get();
    if (filteredUsers.length === 0) return false;
    
    return filteredUsers.every(employee => selectedRows.has(employee.id));
  },

  isRowSelected: (id) => {
    return get().selectedRows.has(id);
  }
}));