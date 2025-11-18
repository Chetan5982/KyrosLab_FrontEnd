import React, { useEffect, useState } from "react";
import { CardHeader, Input } from "@mui/material";
import BlankCard from "../../components/shared/BlankCard";
import CriteriaTemplate from "@/components/DimaondSearch/CriteriaTemplate";
import { GET } from "@/services/methods";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_DIAMOND_SEARCH_SIDEBAR } from "@/redux/diamondSearch/dimaondSearch.type";
import { set } from "lodash";
import { px } from "framer-motion";

export const DiamondSearchSideNavBar = () => {
  const dispatch = useDispatch();

  const [shapes, setShape] = useState([]);
  const [colors, setColor] = useState([]);
  const [clarities, setClarity] = useState([]);
  const [cuts, setCut] = useState([]);
  const [polishs, setpolish] = useState([]);
  const [symms, setsymm] = useState([]);
  const [fluos, setfluo] = useState([]);
  const [labs, setlab] = useState([]);
  const [fancyColorIntensities, setfancyColorIntensity] = useState([]);
  const [fancyColorOverTones, setfancyColorOverTone] = useState([]);
  const [fancyColors, setfancyColor] = useState([]);
  const [sizeGroups, setsizeGroup] = useState([]);
  const [branchs, setBranch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [height, setHeight] = useState("144px");

  const styleInput = {
    background: "#c0c0c038",
    border: "1px solid black",
    borderRadius: "7px",
    margin: "0px 10px 5px 10px",
  };
  const getDiamondSearchFilter = async () => {
    setIsLoading(true);
    const data = await GET(
      `DiamondSearch/Filters?isForDataSet=true&isIncludeOnlyInstockCriteria=true`
    );

    if (data.status === true) {
      const arrData = data.data;
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
  };

  useEffect(() => {
    getDiamondSearchFilter();
  }, []);

  const isSidebarOpen = useSelector(
    (state) => state.diamond.isDiamondSearchSidebarOpen
  );

  const searchData = () => {
    dispatch({ type: TOGGLE_DIAMOND_SEARCH_SIDEBAR });
  };

  const elements = [
    { filter: "Shape", data: shapes, isShape: true },
    { filter: "Carat", data: sizeGroups, isShape: false },
  ];

  const toggleHeight = (max) => {
    if (height === "144px") {
      setHeight(max);
    } else {
      setHeight("144px");
    }
  };

  return (
    <div
      className={`${
        isSidebarOpen ? "w-[475px]" : "w-full"
      } flex flex-col gap-2 transition-all duration-700 ease-in-out`}
    >
      <BlankCard key="shape" className="w-full">
        <CardHeader title="Shape" />
        <div
          className={`flex flex-wrap transition-all duration-300 ease-in-out ${
            isSidebarOpen ? `h-[${height}]` : "max-content"
          } pl-2 mb-3 overflow-hidden`}
        >
          <CriteriaTemplate
            key="0"
            isShape={true}
            options={shapes}
            parentIndex={0}
          />
        </div>
        {isSidebarOpen && (
          <div className="bg-[rgb(243,221,207)] text-center m-[5px] mt-1 rounded-lg">
            <button onClick={() => toggleHeight("max-content")}>
              {" "}
              <span style={{ textDecoration: "none" }}>▼</span>
            </button>
          </div>
        )}
      </BlankCard>

      <BlankCard key="Carat" className="w-full">
        <CardHeader title="Carat" />
        <div
          className={`flex flex-wrap ${
            isSidebarOpen && "h-[144px]"
          }  pl-2 mb-3  overflow-hidden`}
        >
          <div className="w-full flex">
            <input className="w-full" style={styleInput} type="number" /> To{" "}
            <input className="w-full" style={styleInput} type="number" />
          </div>

          <CriteriaTemplate
            key="1"
            isShape={false}
            options={sizeGroups}
            parentIndex={1}
          />
        </div>
        {isSidebarOpen && (
          <div className="bg-[rgb(243,221,207)] text-center m-[5px] mt-1 rounded-lg">
            <button>
              {" "}
              <span style={{ textDecoration: "none" }}>▼</span>
            </button>
          </div>
        )}
      </BlankCard>

      <div>
        <button
          className="w-full text-center p-2 rounded "
          onClick={searchData}
          style={{ backgroundColor: "rgb(2 70 56)" }}
          type="submit"
        >
          Search
        </button>
      </div>
    </div>
  );
};
