import logo from '../assets/HNO+GF+FINAL.png';
import {NavLink, Link} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import {useContext } from "react";


import { ColorModeContext } from "../theme";
import {IconButton, useTheme } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";


const Navbar = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    const clickNav = () => {
        window.scrollTo(0,0);
    }

    return (
      <>
        <header id="header" className="container-fluid p-0 sticky-top">
          <div className="d-flex flex-column flex-md-row align-items-center">
            <div className="col">
              <Link to="/Home">
                <img className="mt-1" src={logo} alt="HNO" width={"25%"} />
              </Link>
            </div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <Form.Select className="p-3" size="sm">
                    <option>Choose vehicle</option>
                    <option value="1">Toyota Transporter 2005</option>
                    <option value="2">Ford Truck 2002</option>
                    <option value="3">Aston Martin 2001</option>
                  </Form.Select>
                </div>
                <div className="col">
                  <ul className="nav nav-pills mt-2">
                    <li className="nav-item">
                      <NavLink
                        id="about-btn"
                        to="/home"
                        onClick={clickNav}
                        className={({ isActive }) =>
                          isActive ? "nav-link active" : "nav-link"
                        }
                      >
                        Home
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        id="about-btn"
                        to="/about"
                        onClick={clickNav}
                        className={({ isActive }) =>
                          isActive ? "nav-link active" : "nav-link"
                        }
                      >
                        About
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        id="about-btn"
                        to="/admin"
                        onClick={clickNav}
                        className={({ isActive }) =>
                          isActive ? "nav-link active" : "nav-link"
                        }
                      >
                        Admin
                      </NavLink>
                    </li>
                    <li>
                      <IconButton onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === "dark" ? (
                          <DarkModeOutlinedIcon />
                        ) : (
                          <LightModeOutlinedIcon />
                        )}
                      </IconButton>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black p-1">
            <div className="progress" style={{ height: "7vh" }}>
              <div
                className="progress-bar w-75"
                role="progressbar"
                aria-valuenow="82"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Hydrogen Level{" "}
                <span className="text-decoration-underline">
                  at 2023-03-15 10:19:58
                </span>
              </div>
            </div>
          </div>
        </header>
      </>
    );
}

export default Navbar
