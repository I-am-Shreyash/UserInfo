import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import { Stack } from "@mui/material";

const pages = ["UserEnter", "UserTable", "UserCards"];

const Header = (props) => {
  const { setCurrentPage } = props;
  const [isLogin, setIsLogin] = React.useState(true);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    setCurrentPage(page.target.textContent);
  };

  const changeUserState = () => {
    setIsLogin(!isLogin);
  };

  const loginLogoutButton = isLogin ? (
    <Button variant="contained" color="error" onClick={changeUserState}>
      Logout
    </Button>
  ) : (
    <Button variant="contained" color="success" onClick={changeUserState}>
      Login
    </Button>
  );

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PersonIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            User Info
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => {
                if (isLogin) {
                  if (page === "UserTable" || page === "UserCards") {
                    return (
                      <MenuItem
                        key={page}
                        onClick={() => {
                          handleCloseNavMenu(page);
                        }}
                      >
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    );
                  }
                } else {
                  if (page === "UserEnter") {
                    return (
                      <MenuItem
                        key={page}
                        onClick={() => {
                          handleCloseNavMenu(page);
                        }}
                      >
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    );
                  }
                }
              })}
            </Menu>
          </Box>
          <PersonIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
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
            User Info 2
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => {
              if (isLogin) {
                if (page === "UserTable" || page === "UserCards") {
                  return (
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page}
                    </Button>
                  );
                }
              } else {
                if (page === "UserEnter") {
                  return (
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page}
                    </Button>
                  );
                }
              }
            })}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={0.5}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Admin
              </Typography>
              {loginLogoutButton}
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
