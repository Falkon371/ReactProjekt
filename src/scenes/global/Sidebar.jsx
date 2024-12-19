import {useState} from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, colors, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from "react-router-dom";
import {tokens} from "../../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import RollerShadesIcon from '@mui/icons-material/RollerShades';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Person2Icon from '@mui/icons-material/Person2';
import BarChartIcon from '@mui/icons-material/BarChart';
import HomeIcon from '@mui/icons-material/Home';
import { getIsCollapsed, setIsCollapsed } from './state/SidebarState'



const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const handleClick = () => {
        setSelected(title);
    };

    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}
            onClick={handleClick}
            icon={icon}
        >
            <Typography>
                <Link to={to} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {title}
                </Link>
            </Typography>
        </MenuItem>
    );
};


const SidebarComp = ( ) => {
    const theme = useTheme();
    const [selected, setSelected] = useState('Dashboard');
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, updateState] = useState(getIsCollapsed());

    const handleCollapse = () => {
        setIsCollapsed(!isCollapsed); // Zaktualizuj globalny stan
        updateState(!isCollapsed); // Zaktualizuj lokalny stan do odświeżenia UI
    };
    
    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[900]} !important`, // Ustawienie ciemniejszego tła
                    height: "100vh", 
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
                "& .css-1wvake5": { // Selektor dla klasy
                height: "100vh", // Wymuszona wysokość
                },
                "& .css-dip3t8": { // Selektor dla klasy
                backgroundColor: "#222222"
                },
                height: "100vh", 
                marginRight: "10px"
            }}
        >

            <Sidebar collapsed={isCollapsed}>
                <Menu iconShape="circle" >

                    <MenuItem
                        onClick={handleCollapse}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >

                        {!isCollapsed && (
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Typography>ADMINS</Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}

                    </MenuItem>

                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>

                        <Item
                            title="Home"
                            to="/"
                            icon={<HomeIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography variant="h6" sx={{ m: "15px 0 10px 10px" }} color={colors.grey[100]}>
                            Funkcje Domu
                        </Typography>

                        <Item
                            title="Heat"
                            to="/heat"
                            icon={<LocalFireDepartmentIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Light"
                            to="/light"
                            icon={<LightbulbIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Electricity"
                            to="/energy"
                            icon={<ElectricBoltIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Shades"
                            to="/shades"
                            icon={<RollerShadesIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography variant="h6" sx={{ m: "15px 0 10px 10px" }} color={colors.grey[100]}>
                            Inne
                        </Typography>

                        <Item
                            title="Users"
                            to="/team"
                            icon={<Person2Icon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Charts"
                            to="/login"
                            icon={<BarChartIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                    </Box>

                </Menu>
            </Sidebar>

        </Box>
    );
};

export default SidebarComp;