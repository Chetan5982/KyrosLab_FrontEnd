import React from "react";
import "./styled.css"

const CriteriaTemplate = ({ isShape = false, options = [],parentIndex=0 }) => {
    
   return (
     <>
    {options.map((data,index) => (
      
      <div  key={index} className={`${isShape ? "ChkOrRbtToggleTypeShapeContainer" : "ChkOrRbtToggleRoundContainer"}`}>
        <div className={isShape ? "ChkOrRbtToggleTypeColorLess" : "ChkOrRbtToggleRound"}>
          <div  className="dvShapeItem">
            
            <input type="checkbox" style={{display:"none"}}   name="IsSelected" id={`chk_shape_${index}_${parentIndex}`} value={data.isSelected ? "true" : "false"} defaultChecked={data.isSelected}/>
            <input type="hidden" name="Code" value={data.code || ""} />
            <input type="hidden" name="Value" value={data.value || ""} />
            <label className={`${isShape ? "ChkOrRbtToggleTypeColorLessText" : "ChkOrRbtToggleRoundText"}`} htmlFor={`chk_shape_${index}_${parentIndex}`}>
            { isShape ? (
              
                        <>
                        <img
                          src={data["photoPaths"].filePaths["originalFilePath_Absolute"]}
                          alt={data.value}
                          className="ChkOrRbtToggleTypeColorLessImg"
                        />
                        <br />
                      {data.value}
                    </>
            ) : (
              data.value
            )}
          </label>
            
              
          </div>
        </div>
      </div>
      ))}
      
     </>)
};

export default CriteriaTemplate;
