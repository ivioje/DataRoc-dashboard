import { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu'
import React from 'react'

const TableMenu = () => {
  return (
    <DropdownMenuContent className="w-fit bg-white border border-gray-100 shadow-md rounded-md p-1 z-[100] text-sm">
     <DropdownMenuItem className="px-4 py-2 cursor-pointer hover:bg-purple-50 text-gray-800 font-normal">
      Edit
     </DropdownMenuItem>
     <DropdownMenuItem className="px-4 py-2 cursor-pointer hover:bg-purple-100 text-gray-800 font-normal">
       View Profile
     </DropdownMenuItem>
     <DropdownMenuItem className="px-4 py-2 cursor-pointer hover:bg-purple-50 text-green-600 font-normal">
       Activate User
     </DropdownMenuItem>
     <DropdownMenuSeparator />
     <DropdownMenuItem className="px-4 py-2 cursor-pointer hover:bg-purple-50 text-red-600 font-normal">
       Delete
     </DropdownMenuItem>
    </DropdownMenuContent>
  )
}

export default TableMenu