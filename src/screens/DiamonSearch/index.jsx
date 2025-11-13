"use client";
import {ContainerWrapper,} from "./styled";
import {  useEffect, useState } from "react";
import { DiamondSearchSideNavBar } from "@/components/DimaondSearch/sidenavbar";
import { TOGGLE_DIAMOND_SEARCH_SIDEBAR } from "@/redux/diamondSearch/dimaondSearch.type";
import { useDispatch,useSelector } from "react-redux";

export const DiamondSearch = () => {
 
   const dispatch = useDispatch();
   const  isSidebarOpen  = useSelector((state) => state.diamond.isDiamondSearchSidebarOpen);
  
   useEffect(()=>{
    console.log(isSidebarOpen);
   },[isSidebarOpen]);


 return <ContainerWrapper className=" gap-3">
       <DiamondSearchSideNavBar/> 
    {isSidebarOpen && 
    <div className="w-full relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead>
            <tr className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Supplier</th>
              <th scope="col" className="px-6 py-3"> item Location</th>
              <th scope="col" className="px-6 py-3">Lab</th>
              <th scope="col" className="px-6 py-3">Shape</th>
              <th scope="col" className="px-6 py-3">Carat</th>
              <th scope="col" className="px-6 py-3">Color</th>
              <th scope="col" className="px-6 py-3">Clarity</th>
              <th scope="col" className="px-6 py-3">Cut</th>
              <th scope="col" className="px-6 py-3">pol</th>
              <th scope="col" className="px-6 py-3">Symm</th>
              <th scope="col" className="px-6 py-3">Flaur</th>
              <th scope="col" className="px-6 py-3">Total</th>
              <th scope="col" className="px-6 py-3">Depth</th>
              <th scope="col" className="px-6 py-3">Table</th>
              <th scope="col" className="px-6 py-3">Meaurement</th>
              <th scope="col" className="px-6 py-3">Ratio</th>
              <th scope="col" className="px-6 py-3">Growth Type</th>
              
            </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={21} className="text-center">No Records Found</td>
              </tr>
            </tbody>
          </table>
    </div>
    }  
      </ContainerWrapper>
  
   
};
