import {Box, IconButton, MenuItem, useTheme} from "@mui/material";
import {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";


const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    return (
      <MenuItem
        active={selected === title}
        onClick={() => setSelected(title)}
        icon={icon}
        style={{ color: selected === title ? colors.primary[500] : undefined }}
      >
        <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
          {title}
        </Link>
      </MenuItem>
    );
  };
  
  

const Topbar = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const [selected, setSelected] = useState('Dashboard');


    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px" >

                <InputBase sx={{ml: 2, flex: 1}} placeholder = "Search" />
                <IconButton type="button" sx={{ p:1 }} >
                    <SearchIcon />
                </IconButton>
            </Box>

            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                        <LightModeOutlinedIcon />
                    ): (
                        <DarkModeOutlinedIcon />    
                    )}
                </IconButton>
         
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>

                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                
                <IconButton component={Link} to="/login">
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>

        </Box>
    )
}

export default Topbar;