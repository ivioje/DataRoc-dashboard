import React from 'react';
import { websitePageData } from '@/lib/data';
import { GoPerson } from "react-icons/go";
import { CgBrowser } from "react-icons/cg";
import { TbBrowserMinus } from "react-icons/tb";
import { HiOutlineCursorClick } from "react-icons/hi";
import { IoPricetagOutline } from "react-icons/io5";

const WebsiteTopPagesTable = () => {
    return (
        <div className="p-4 w-full bg-white mt-3">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[13px] font-medium text-gray-600">TOP PAGES</h2>
            <a href="https://essen.com" className="text-blue-500 hover:underline text-sm">https://essen.com</a>
          </div>
          
          <div className="sm:overflow-hidden overflow-x-scroll">
            <table className="min-w-full">
              <thead>
                <tr className="text-left text-sm">
                  <th className="pr-8 py-3 font-medium text-gray-600">
                    <div className="flex items-center">
                      <CgBrowser size={17} className='mr-2' />
                      Pages
                    </div>
                  </th>
                  <th className="px-4 py-3 font-medium text-gray-600 text-right">
                    <div className="flex items-center justify-end">
                      <GoPerson size={17} className='mr-2' />
                      Sessions
                    </div>
                  </th>
                  <th className="px-4 py-3 font-medium text-gray-600 text-right">
                    <div className="flex items-center justify-end">
                     <TbBrowserMinus size={17} className='mr-2' />
                      Bounce Rate
                    </div>
                  </th>
                  <th className="px-4 py-3 font-medium text-gray-600 text-right">
                    <div className="flex items-center justify-end">
                     <HiOutlineCursorClick size={18} className='mr-2' />
                      CTR
                    </div>
                  </th>
                  <th className="px-4 py-3 font-medium text-gray-600 text-right">
                    <div className="flex items-center justify-end">
                     <IoPricetagOutline size={17} className='mr-2' />
                      Goal Conv. Rate
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {websitePageData.map((page, index) => (
                  <tr key={index} className="border-t border-gray-100 text-[13px]">
                    <td className="pr-8 py-3">
                      <span className={page.pathColor}>{page.path}</span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      {page.sessions.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-right">
                      {page.bounceRate}
                    </td>
                    <td className="px-4 py-3 text-right">
                      {page.ctr}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className={`px-3 py-1 rounded-md ${page.convRateColor}`}>
                        {page.goalConvRate}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
};

export default WebsiteTopPagesTable;