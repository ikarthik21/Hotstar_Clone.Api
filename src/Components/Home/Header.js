import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";



const Header = () => {


  return (
    <div>
      <Navbar>
        <Logo>
          <Link to="/">
            <img style={LogoStyle} src="/images/logo_main.png" alt="" />
          </Link>
        </Logo>
        <MenuBar>
      <MenuItem>
            <Link to="/search">
              <img src="/images/search-icon.svg" alt="" />
              <span>Search</span>
            </Link>
          </MenuItem>

        </MenuBar>



      </Navbar>
    </div>
  );
};

const Navbar = styled.div`
  background-color: #0e0e0e;
  background: linear-gradient(to bottom, #141b29, #0c111b 300px);
  width: 100vw;
  height: 75px;
  position: fixed;
  display: flex;
  align-items: center;
  position:fixed;
  top:0;
  left:0;
  z-index:1;


`;

const Logo = styled.div`
  height: 50px;
  margin-left: 15px;
  margin-top: 5px;
  flex: 1;
  height: auto;
`;

const LogoStyle = {
  height: "45px",
  width: "170px",
};

const MenuBar = styled.div`
  align-items: center;
  font-family: monospace;
  justify-content: center;
  display: flex;
  position: relative;
  flex-flow: row nowrap;
  margin-left: 30px;
  letter-spacing: 2px;
  height: 100%;
  flex: 8;
  justify-content: flex-end;
  font-weight: bold;
  font-size: 15px;

  img {
    margin-right: 8px;
    height: 25px;
    position: relative;
    top: 5px;
  }
  span:hover {
    padding: 7px 0px;
    transform: scaleX(1);
    color: #0f9dff;
    margin-bottom: 10px;
    border-bottom: 2.75px solid #0f9dff;
  }
 
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 10px;
  align-items: center;
  margin-right: 30px;   
 `;









export default Header;
