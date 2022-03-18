import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../../images/logo.png";
import { Button, Avatar, Typography } from "@mui/material";
import { Link, useHistory, useLocation } from "react-router-dom";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const NavBar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const theme = createTheme({
    palette: {
      secondary: {
        main: "#dc1a22",
      },
    },
  });

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/auth");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div className="header">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
        id="navbar"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="70"
              height="42"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link id="nav-disable">
                <Link to="/" id="nav-btn">
                  Discuss
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-link" id="nav-disable">
                <Link to="/movies" id="nav-btn">
                  Movies
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-link" id="nav-disable">
                <Link to="/our-lists" id="nav-btn">
                  Our Lists
                </Link>
              </Nav.Link>
            </Nav>
            <div className="signin">
              {user?.result ? (
                <div className={classes.profile}>
                  <ThemeProvider theme={theme}>
                    <Avatar
                      className={classes.avatar}
                      alt={user.result.username}
                      src={user.result.imageUrl}
                    >
                      {user.result.username.charAt(0)}
                    </Avatar>
                    <Typography className={classes.userName} variant="h6">
                      {user.result.username}
                    </Typography>
                    <Button
                      variant="outlined"
                      className={classes.logout}
                      color="secondary"
                      onClick={logout}
                    >
                      Sign out
                    </Button>
                  </ThemeProvider>
                </div>
              ) : (
                <Button
                  component={Link}
                  to="/auth"
                  variant="outlined"
                  color="primary"
                  className={classes.login}
                >
                  Sign In
                </Button>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
