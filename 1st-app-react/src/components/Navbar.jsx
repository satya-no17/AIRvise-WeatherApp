import React, { useState } from "react";
import "./Navbar.css";
import Select from "react-select";
import cityOptions from "../utils/cityOptions";
const Navbar = ({ changemode, modes, title, setCity }) => {
  const [selectedCity, setselectedCity] = useState(null);
  // When city is selected from dropdown
  const handleSelectChange = (selected) => {
    setselectedCity(selected);
    setCity(selected.value);
  };
  //when search button is clicked
  const handleSearchClick = () => {
    if (selectedCity) {
      setCity(selectedCity.value);
    } else {
      alert("Please select city");
    }
  };
  //when Enter is clicked
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && selectedCity) {
      setCity(selectedCity.value);
    }
  };

  return (
    <div className={modes ? "dark" : "normal"}>
      <div className="nav center">
        <div className="logo">AIRvise</div>
        <div className="nav-search-group">
          <Select
            options={cityOptions}
            onChange={handleSelectChange}
            value={selectedCity}
            placeholder="Search for a city..."
            isSearchable
            onKeyDown={handleKeyDown}
            onMenuOpen={() => setselectedCity(null)}
            styles={
              modes
                ? {
                    control: (base, state) => ({
                      ...base,
                      backgroundColor: "#222",
                      color: "#fff",
                      borderColor: "#444",
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      minHeight: "40px",
                      height: "40px",
                      borderRight: "none",
                      boxShadow: "0 10px 10px rgba(0,0,0,0.35)", 
                    }),
                    valueContainer: (base) => ({
                      ...base,
                      height: "40px",
                      padding: "0 8px",
                    }),
                    input: (base) => ({
                      ...base,
                      color: "#fff",
                    }),
                    singleValue: (base) => ({
                      ...base,
                      color: "#fff",
                    }),
                    menu: (base) => ({
                      ...base,
                      backgroundColor: "#222",
                      color: "#fff",
                    }),
                    option: (base, state) => ({
                      ...base,
                      backgroundColor: state.isFocused ? "#333" : "#222",
                      color: "#fff",
                    }),
                    indicatorsContainer: (base) => ({
                      ...base,
                      height: "40px",
                    }),
                  }
                : {
                    control: (base, state) => ({
                      ...base,
                     
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      minHeight: "40px",
                      height: "40px",
                      borderRight: "none",
                      boxShadow: "0 3px 10px rgba(0,0,0,0.35)", 
                    })}
            }
            theme={
              modes
                ? (theme) => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary25: "#333",
                      primary: "#444",
                      neutral0: "#222",
                      neutral80: "#fff",
                    },
                  })
                : undefined
            }
          />
          <button className="search-btn" onClick={handleSearchClick}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        {/* <div className="nav-search">
            <input type="text" className="searchingplace" placeholder="  search Location()"/> 
            <button className="search-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
        </div> */}
        <div className="nav-comp ">
          <p className="about">about</p>
          <p className="mode" onClick={changemode}>
            {" "}
            {title} Mode
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
