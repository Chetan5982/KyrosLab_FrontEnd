"use client";
import React, { useState, useEffect, useMemo } from "react";
import FormikForm from "@/components/common/FormikForm";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import {
  Select,
  TextField,
  MenuItem,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  FormControl,
} from "@mui/material";
import { GET, POST, PUT } from "@/services/methods";
import "./modalForm.css";
import { ADD_USER, EDIT_USER } from "@/redux/demo/demo.type";

const UserModalForm = ({ isOpen, title, onClose, editUserId }) => {
  

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [userData, setUserData] = useState(null);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const getCountries = async () => {
    const data = await GET(`/demo/Countries`);
    if (data.status === true) {
      const lst = data.data.message[0];
      setCountries(lst);
    } else {
      setCountries([]);
    }
  };

  const getStates = async (countryId) => {
    const data = await GET(`/demo/States/${countryId}`);
    if (data.status === true) {
      const lst = data.data.message[0];
      setStates(lst);
    } else {
      setStates([]);
    }
  };

  const getCities = async (stateId) => {
    const data = await GET(`/demo/Cities/${stateId}`);
    if (data.status === true) {
      const cityList = data.data.message[0];
      setCities(cityList);
    } else {
      setCities([]);
    }
  };

  const getUserDetails = async (userId) => {
    const data = await GET(`/demo/User/${userId}`);
    if (data.status === true) {
      const user = data.data.message[0];
      setUserData(user);

      if (user[0].CountryId) await getStates(user[0].CountryId);
      if (user[0].StateId) await getCities(user[0].StateId);
    }
  };

  const dispatch=useDispatch();

  const handleSubmit = async (obj) => {
    if (editUserId > 0) {
      obj.id=editUserId;
        dispatch({ type: EDIT_USER, payload: { obj } })
        onClose();
    }
    else{
      dispatch({ type: ADD_USER, payload: { obj } })
      onClose();
    }
  };

  useEffect(() => {
    getCountries();
    if (editUserId > 0) {
      getUserDetails(editUserId);
    }
  }, []);

  const emptySchema = Yup.object({});
  

  const user = Array.isArray(userData) ? userData[0] : userData;

  const initialValues =
    editUserId > 0 && user
      ? {
          firstName: user?.FirstName || "",
          lastName: user?.LastName || "",
          mobileNo: user?.MobileNo || "",
          email: user?.Email || "",
          address: user?.Address || "",
          countryId: user?.CountryId || 0,
          stateId: user?.StateId || 0,
          cityId: user?.CityId || 0,
          gender: user?.Gender === 1 ? "male" : "female",
          id: user?.id || 0
        }
      : {
          firstName: "",
          lastName: "",
          mobileNo: "",
          email: "",
          address: "",
          countryId: 0,
          stateId: 0,
          cityId: 0,
          gender: "female",
          id:0
        };

        if (!isOpen) return null;
        if (editUserId > 0 && !userData) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h1>{title}</h1>
          <hr />
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>
        <hr></hr>
        <div className="modal-body">
          <FormikForm
            enableReinitialize
            initialValues={initialValues}
            validationSchema={emptySchema}
            onSubmit={handleSubmit}
          >
            {(params) => (
              <>
              
                <div className="w-full flex gap-3">
                
                  <TextField
                    label="First Name"
                    name="firstName"
                    value={params.values.firstName}
                    onChange={params.handleChange}
                    fullWidth
                    margin="normal"
                  />

                  <TextField
                    label="Last Name"
                    name="lastName"
                    value={params.values.lastName}
                    onChange={params.handleChange}
                    fullWidth
                    margin="normal"
                  />
                </div>

                <div className="w-full flex gap-3">
                  <FormControl fullWidth>
                    <InputLabel id="lblCountry" className="mt-3">
                      Country
                    </InputLabel>
                    <Select
                      name="countryId"
                      value={params.values.countryId ?? 0}
                      onChange={async (e) => {
                        params.handleChange;
                        await getStates(e.target.value);
                      }}
                      fullWidth
                      MenuProps={MenuProps}
                    >
                      <MenuItem value={0}>
                        <em>None</em>
                      </MenuItem>
                      {countries.map((country) => (
                        <MenuItem key={country.Id} value={country.Id}>
                          {country.Name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel id="lblState" className="mt-3">
                      State
                    </InputLabel>
                    <Select
                      name="stateId"
                      value={params.values.stateId ?? 0}
                      onChange={async (e) => {
                        params.handleChange;
                        await getCities(e.target.value);
                      }}
                      fullWidth
                    >
                      <MenuItem value={0}>
                        <em>None</em>
                      </MenuItem>
                      {states.map((state) => (
                        <MenuItem key={state.Id} value={state.Id}>
                          {state.Name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>

                <div className="w-full flex gap-3 mt-3">
                  <FormControl fullWidth>
                    <InputLabel id="lblCity">City</InputLabel>
                    <Select
                      name="cityId"
                      value={params.values.cityId ?? 0}
                      onChange={params.handleChange}
                      fullWidth
                    >
                      <MenuItem value={0}>
                        <em>None</em>
                      </MenuItem>
                      {cities.map((c) => (
                        <MenuItem key={c.Code} value={c.Code}>
                          {c.Name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <TextField
                      label="Mobile No"
                      name="mobileNo"
                      value={params.values.mobileNo}
                      onChange={params.handleChange}
                      fullWidth
                    />
                  </FormControl>
                </div>

                <div className="w-full flex gap-3">
                  <FormControl fullWidth>
                    <InputLabel id="lblgender" className="mt-3"></InputLabel>
                    <RadioGroup
                      row
                      name="gender"
                      value={params.values.gender}
                      onChange={params.handleChange}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                    </RadioGroup>
                  </FormControl>

                  <TextField
                    label="Email Id"
                    name="email"
                    value={params.values.email}
                    onChange={params.handleChange}
                    fullWidth
                    margin="normal"
                  />
                </div>

                <Button type="submit" variant="contained" fullWidth>
                  Submit
                </Button>
              </>
            )}
          </FormikForm>
        </div>
      </div>
    </div>
  );
};

export default UserModalForm;
