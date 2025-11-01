import styled from "@emotion/styled";

export const ContactField = styled("div")`
  .form-control {
    font-size: 16px;
    font-weight: 400;
    line-height: 34px;
    border-bottom: 0.6px solid #bdbdbd;
    width: 100%;
    outline: none;
  }

  .react-tel-input .form-control {
    border: none !important;
    height: 55px !important;
    background-color: transparent !important;   
  }
  .react-tel-input .flag-dropdown {
    height: 30px;
    margin: auto;
    border: none !important;
    background-color: transparent !important;
  }
  .react-tel-input .country-list .search-box {
    margin: unset !important;
  }
  .react-tel-input .country-list .search {
    padding: 10px 10px 6px 10px !important;
  }
  .flag-dropdown {
    background: transparent;
    height: 40px;
    margin: auto;
  }
  .react-tel-input .selected-flag:hover,
  .react-tel-input .selected-flag:focus {
    background-color: transparent !important;
  }
  .react-tel-input .selected-flag .arrow{
    border-top: 4px solid #fff;
  }
  .react-tel-input .selected-flag .arrow.up{
    border-bottom: 4px solid #fff;
  }

  .react-tel-input .flag-dropdown.open .selected-flag{
    background-color: transparent !important;
  }
  
`;
