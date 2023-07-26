import React from "react";

const NavBar = () => {
  return (
    <div className='navBar flex items-center p-[3rem] justify-between'>
      <div className='logoDiv'>
        <h1 className='logo text-[25px] text-blueColor'>
          <strong>Job</strong>Search
        </h1>
      </div>
    </div>
  );
};

export default NavBar;
