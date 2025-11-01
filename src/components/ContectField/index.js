import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ContactField } from "./styled";

function ContectField({contactData,setContactData,inputProps={}}) {
 
  return (
    <ContactField>
      <PhoneInput
        type="number"
        className="form-control"
        country={"in"}
        enableSearch
        disableSearchIcon
        countryCodeEditable={false}
        value={contactData?.phoneNo?.value}
        prefix="+"
        onChange={(e, code) => {
          setContactData((pre) => ({
            ...pre,
            phoneNo: { value: e, code },
          }));
        }}
        required
        inputProps={inputProps}
      />
    </ContactField>
  );
}

export default ContectField;
