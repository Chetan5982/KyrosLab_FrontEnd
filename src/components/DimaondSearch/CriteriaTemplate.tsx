import React from "react";
import "./styled.css"

const CriteriaTemplate = ({ isShape = false, options = [],parentIndex=0 }) => {
    
   return (
     <>
    {options.map((data,index) => (
      <abbr key={index} title={data.value} style={{textDecoration:"none"}}>
        <div   className={`${isShape ? "ChkOrRbtToggleTypeShapeContainer" : "ChkOrRbtToggleRoundContainer"}`}>
          <div className={isShape ? "ChkOrRbtToggleTypeColorLess" : "ChkOrRbtToggleRound"}>
            <div  className="dvShapeItem">
              
              <input type="checkbox" style={{display:"none"}}   name="IsSelected" id={`chk_shape_${index}_${parentIndex}`} value={data.isSelected ? "true" : "false"} defaultChecked={data.isSelected}/>
              <input type="hidden" name="Code" value={data.code || ""} />
              <input type="hidden" name="Value" value={data.value || ""} />
              <label className={`${isShape ? "ChkOrRbtToggleTypeColorLessText" : "ChkOrRbtToggleRoundText"}`} htmlFor={`chk_shape_${index}_${parentIndex}`}>
              { isShape ? (
                
                          <>
                          <img
                            src={data["photoPaths"].filePaths["originalFilePath_Absolute"]+data.code+".svg"}
                            onError={(e)=>{
                              e.target.onerror = null;
                              e.target.src = "https://localhost:44339/Images/NoImage.png";
                            }}
                            alt={data.value}
                            className="ChkOrRbtToggleTypeColorLessImg"
                          />
                          
                        <span>{data.value}</span> 
                      </>
              ) : (
                data.value
              )}
            </label>
              
                
            </div>
          </div>
        </div>
      </abbr>
      ))}
      
     </>)
};

export default CriteriaTemplate;
