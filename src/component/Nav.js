import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";

import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import logo from "../images/FinanceBD.png";
import notification from "../images/notifications.svg";

import down from "../images/down.svg";
import { Link } from "react-router-dom";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Nav = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  return (
    <AppBar
      position="static"
      style={{ background: "transparent", boxShadow: "none", color: "black" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: "127px",
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/">
              <img alt="" src={logo} height="24px" />
            </Link>
          </Typography>

          {/* <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              color: "black",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: 20,
                color: "#1A1A1A",
                fontWeight: 600,
                fontFamily: " Source Sans Pro",
              }}
            >
              Good Morning, Shiva!
            </Typography>
          </Box> */}

          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img alt="" src={logo} />
          </Typography> */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              color: "black",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: 20,
                color: "#1A1A1A",
                fontWeight: 600,
              }}
            >
              Good Morning, Shiva!
            </Typography>
          </Box>
          <Search
            sx={{ mx: 2, backgroundColor: " #E9E5FA", borderRadius: 100 }}
          >
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "#7B61FF" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ mx: "24px" }}>
            <img alt="" src={notification} height="24px" />
          </Box>
          <Box sx={{ flexGrow: 0.1, width: 142 }}>
            <Tooltip title="Open settings" sx={{ display: "flex", width: 142 }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src=""
                  sx={{ width: 20, height: 20 }}
                />
                <Typography sx={{ fontSize: 14, pl: "8px", pr: "8px" }}>
                  Shiva Michelle
                </Typography>
                <img alt="" src={down} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
