import { Box, MenuItem ,IconButton, Select ,Typography ,useTheme, FormControl, InputLabel, Button } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../component/Header";
import LineChart from "../../component/Chart";
import DownloadIcon from "@mui/icons-material/Download";
import React, { useEffect, useState } from "react";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import RollerShadesIcon from '@mui/icons-material/RollerShades';
import RollerShadesClosedIcon from '@mui/icons-material/RollerShadesClosed';
import BarChart from "../../component/BarChart"; 
import { getIsCollapsed } from '../global/state/SidebarState'


const Item = () =>{
    const [click, setClick] = useState(false);

    const handleBoxClick = () => {
        setClick((prev) => !prev)
    }

    return(
        <Box
        onClick={handleBoxClick}
        sx={{
        display: "flex",
        width: 70,
        height: 70,
        border: "5px solid white",
        flexDirection: "column",
        alignContent: "center",
        backgroundColor: click ? "color.primary" : `rgba(214, 82, 0, 200)`,
    }}>
            <IconButton sx={{width: 50, height: 50, display: "flex", justifyContent: "center", alignItems: "center"}} >
                <LightbulbOutlinedIcon sx={{fontSize: "30px"}}/>
            </IconButton>
        </Box>
    )
}

const Shaders = () =>{
    const theme = useTheme() 
    const [click, setClick] = useState(false);
    const colors = tokens(theme.palette.mode)
    const [isAnimating, setIsAnimating] = useState(false)


    const handleBoxClick = () => {
        setClick((prev) => !prev)
        setIsAnimating(!isAnimating)
    }

  

    return(
        <Box sx={{display: "flex", flexDirection: "row"}}>
        <Box
        onClick={handleBoxClick}
        sx={{
        display: "flex",
        width: 80,
        height: 80,
        border: "5px solid white",
        flexDirection: "column",
        alignContent: "center",
        background: isAnimating
        ? "linear-gradient(to bottom, #000 0%, #000 100%)"
        : "linear-gradient(to bottom, #ffeb3b 0%, #ffeb3b 100%)",
        backgroundSize: "100% 200%",
        backgroundPosition: isAnimating ? "0 100%" : "0 0",
        transition: "background-position 2s ease-in-out", // Płynne przejście
        border: "1px solid #ddd",
       
    }}>
            <IconButton sx={{width: 80, height: 80}}>
                { click ? <RollerShadesClosedIcon sx={{fontSize: "35px"}}/> : <RollerShadesIcon sx={{fontSize: "35px"}}/>}
            </IconButton>
        </Box>
        </Box>
    )
}

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [room, setRoom] = useState("10")
  const [value, setValue] = useState(0);
  const isCollapsed = getIsCollapsed();

  console.log(isCollapsed)

  const handleRoom = (event) =>{
    setRoom(event.target.value)
  }

  const roomLightsConfig = {
    10: 4,
    20: 6,
    30: 8,
    40: 3,
    }

    const lightsCount = roomLightsConfig[room] || 0;
    const lights = Array.from({length: lightsCount}, (_, index) => (
        <Item key={index} value={value} />
    ))

    const shades = Array.from({length: 8}, (_, index) => (
        <Shaders key={index} value={value} />
    ))

  return (
    <Box >

        <Box display="flex" justifyContent="space-between" alignItems="center" >
          <Header title="Dashboard" subtitle="Oto Dashboard" />
        </Box>

        <Box sx={{display: "flex", flexDirection: "column", margin: "10px",  maxHeight: "520px", 
            overflowY: "auto", padding: "10px"}}>
          
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Box width={isCollapsed ? "800px" : "800px"} sx={{display: "flex", border: "3px solid black", borderRadius: "5px", flexDirection: "column", backgroundColor: colors.primary[700] }}>
                  <Typography sx={{display: "flex", justifyContent: "center"}}>
                    Energy Usage
                  </Typography>

                    <Box sx={{height: "250px"}} >
                        <BarChart isDashboard={true}/>
                    </Box>
              
                </Box>

                <Box  sx={{display: "flex", flexDirection: "column", border: "3px solid black", 
                    borderRadius: "5px", height: "300px", backgroundColor: colors.primary[700]}}>

                <Typography sx={{display: "flex", justifyContent: "center"}}>
                    Shaders
                  </Typography>
                
                <Box 
                sx={{
                    display: "flex",
                    flexWrap: "wrap", 
                    justifyContent: "center",
                    gap: "10px", 
                    maxWidth: "420px", 
                    minWidth: "420px",
                    height: "200px",
                    mt: "10px"
                  }}
                >
                    {shades}
                </Box>
                </Box>

            </Box>


            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>

                  <Box mt="20px" width="800px" border="3px solid black" borderRadius="5px" height="250px" sx={{ backgroundColor: colors.primary[700]}}>
                    <Box mb="10px">
                      <Typography variant="h6" color={colors.grey[200]} sx={{display: "flex", justifyContent: "center", fontSize: "20px"}}>
                        Temperature
                      </Typography>

                    </Box>

                    <Box height="200px">
                      <LineChart isDashboard={true} />
                    </Box>

                  </Box>

                <Box mt="20px" sx={{
                    border: "3px solid black",
                    padding: "10px",
                    borderRadius: "5px",
                    height: "250px"
                    , backgroundColor: colors.primary[700]
                    }}>

                    <Box>
                        <FormControl >
                            <InputLabel id="demo-simple-select-label" >Pokoje</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={room}
                            label="Pokoje"
                            onChange={handleRoom}
                            >
                                <MenuItem value={10}>Pokój 1</MenuItem>
                                <MenuItem value={20}>Pokój 2</MenuItem>
                                <MenuItem value={30}>Pokój 3</MenuItem>
                                <MenuItem value={40}>Pokój 4</MenuItem>
                            </Select>
                        </FormControl>
                    </Box> 

                    <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap", 
                        justifyContent: "center",
                        gap: "10px", 
                        maxWidth: "400px", 
                        minWidth: "400px",
                        mt: "10px"
                      }}
                    >
                        {lights}
                    </Box>

                </Box>
            </Box>
        </Box>       
    </Box>
  );
};

export default Dashboard;
