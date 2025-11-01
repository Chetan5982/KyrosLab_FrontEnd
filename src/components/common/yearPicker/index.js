"use client";
import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DatePickerComponent = ({
  label = "year",
  onChange = () => {},
  openTo = "year",
  views = ["year"],
  isError = false,
  helperText = "",
  name="",
  value=""
}) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={["DatePicker", "DatePicker"]}
          sx={{
            "& .MuiFormControl-root": {
              width: "100%",
              border:isError ? '1px solid #f39579' :"initial"
            },
          }}
        >
          <DatePicker
            label={label}
            openTo={openTo}
            views={views}
            onChange={onChange}
            name={name}
            value={value}
          />
        </DemoContainer>
      </LocalizationProvider>
      {
        isError && helperText &&<small style={{color:"#f39579"}}>{helperText}</small>
      }
    </>
  );
};

export default DatePickerComponent;
