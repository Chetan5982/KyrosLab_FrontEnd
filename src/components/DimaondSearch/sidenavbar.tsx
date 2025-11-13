import React, { useEffect, useState } from "react";
import { CardHeader } from "@mui/material";
import BlankCard from "../../components/shared/BlankCard";
import CriteriaTemplate from "@/components/DimaondSearch/CriteriaTemplate";
import { GET } from "@/services/methods";
import { useDispatch,useSelector } from "react-redux";
import { TOGGLE_DIAMOND_SEARCH_SIDEBAR } from "@/redux/diamondSearch/dimaondSearch.type";


 export const DiamondSearchSideNavBar=()=>
    {
    
         
          const dispatch = useDispatch();

          const [shapes,setShape]=useState([]);
          const [colors,setColor]=useState([]);
          const [clarities,setClarity]=useState([]);
          const [cuts,setCut]=useState([]);
          const [polishs,setpolish]=useState([]);
          const [symms,setsymm]=useState([]);
          const [fluos,setfluo]=useState([]);
          const [labs,setlab]=useState([]);
          const [fancyColorIntensities,setfancyColorIntensity]=useState([]);
          const [fancyColorOverTones,setfancyColorOverTone]=useState([]);
          const [fancyColors,setfancyColor]=useState([]);
          const [sizeGroups,setsizeGroup]=useState([]);
          const [branchs,setBranch]=useState([]);
          const [isLoading,setIsLoading]=useState(false);

           const getDiamondSearchFilter = async () => {
              setIsLoading(true);
                const data = await GET(`DiamondSearch/Filters?isForDataSet=true&isIncludeOnlyInstockCriteria=true`);
                
                if (data.status === true) {
                  const arrData=data.data;
                    setShape(arrData.shapes);
                    setColor(arrData.colors);
                    setClarity(arrData.clarities);
                    setCut(arrData.cuts);
                    setpolish(arrData.polishs);
                    setsymm(arrData.symms);
                    setfluo(arrData.fluos);
                    setlab(arrData.labs);
                    setfancyColorIntensity(arrData.fancyColorIntensities);
                    setfancyColorOverTone(arrData.fancyColorOverTones);
                    setfancyColor(arrData.fancyColors);
                    setsizeGroup(arrData.sizeGroups);
                    setBranch(arrData.branches);
                } 
                setIsLoading(false);
              }
          
              useEffect(()=>{
                getDiamondSearchFilter();
              },[])

          const  isSidebarOpen  = useSelector((state) => state.diamond.isDiamondSearchSidebarOpen);
              const searchData=()=>{
                  dispatch({ type: TOGGLE_DIAMOND_SEARCH_SIDEBAR});
              }
        
        const elements = ['Shape','Color'];

        return (
           <div className={`${isSidebarOpen ? "w-[448px]" : "w-full"} flex flex-col gap-2 transition-all duration-700 ease-in-out`}>
            {elements.map((item,index) => (
            <BlankCard key={index} className="w-full" >
              <CardHeader title={item} />
              <div className="flex flex-wrap h-40 ml-4 mb-3 gap-[5px] overflow-hidden" >
                <CriteriaTemplate key={index}  isShape={true} options={shapes} parentIndex={index} />
              </div>
              {
                isSidebarOpen  && 
                <div className="bg-[rgb(243,221,207)] text-center m-[5px] mt-1 rounded-lg" >
                  <button > <span>▼</span></button>
                </div>
              }
              
            </BlankCard>    
            ))}
          <div>
            <button className="w-full text-center p-2 rounded " onClick={searchData} style={{backgroundColor:"rgb(2 70 56)"}} type="submit">Search</button>
          </div>
      </div>
        )    
    }

