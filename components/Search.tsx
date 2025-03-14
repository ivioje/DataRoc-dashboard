import { SearchIcon } from 'lucide-react'
import React from 'react'

interface SearchProps {
  search: string;
  setSearch: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ search, setSearch }) => {
  return (
    <>
        <SearchIcon size={20} className="text-gray-800 absolute mx-3" />
        <input
        type="text"
        placeholder="Search Users by Name, Email or Date"
        className="outline-none bg-cyan-50 w-full ml-8 rounded py-2 px-2 placeholder:text-gray-600 placeholder:text-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
    </>
  )
}

export default Search