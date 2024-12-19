import React, { useEffect, useState } from "react";
import { Box, Typography, Slider, useTheme, MenuItem, IconButton, Select, FormControl, InputLabel } from "@mui/material";
import { tokens } from "../../theme";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';


function Item({value, text}){

    const [click, setClick] = useState(false);
   
    const handleBoxClick = () =>{
        setClick((prev) => !prev);
    }

    return(
        <Box 
        onClick={handleBoxClick}
        sx={{
        display: "flex",
        width: 200,
        height: 200,
        border: "5px solid white",
        flexDirection: "column",
        alignContent: "center",
        backgroundColor: click ? "color.primary" : `rgba(214, 82, 0, ${value})`,
    }}>

        <Typography sx={{textAlign: "center", fontSize: "20px"}}>
            {text}
        </Typography>
        
        <IconButton sx={{height: "120px"}}>
            <LightbulbOutlinedIcon sx={{fontSize: "100px"}}/>
        </IconButton>
    </Box>
    )
}




function LightControl(){

    const [click, setClick] = useState(false);
    const [value, setValue] = useState(0);
    const [age, setAge] = useState('');
    const [room, setRoom] = useState(() => localStorage.getItem("selectedRoom") || "")

    const handleChange = (event, Newvalue) =>{
        setValue(Newvalue)
        setAge(event.target.value)
        
    }

    const handleRoom = (event) =>{
        const selRoom = event.target.value
        setRoom(selRoom)
        localStorage.setItem("selectedRoom", selRoom)
    }

    const roomLightsConfig = {
        10: 4,
        20: 6,
        30: 8,
        40: 3,
    }
  
    const lightsCount = roomLightsConfig[room] || 0;
    const lights = Array.from({length: lightsCount}, (_, index) => (
        <Item key={index} value={value} text={`Światło ${index + 1}`}/>
    ))

    return(
        <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "100px",
            justifyContent: "center",
            paddingBottom: "80px"
        }}>
           
        <FormControl>
          <InputLabel id="demo-simple-select-label">Pokoje</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={room}
            label="Pokoje"
            onChange={handleRoom}
            sx={{width: "100px"}}
          >
            <MenuItem value={10}>Pokój 1</MenuItem>
            <MenuItem value={20}>Pokój 2</MenuItem>
            <MenuItem value={30}>Pokój 3</MenuItem>
            <MenuItem value={40}>Pokój 4</MenuItem>

          </Select>
        </FormControl>
        <Box sx={{display: "flex", justifyContent: "center", width: "1000px", flexWrap: "wrap", gap: "10px" }}>
        {lights}
        </Box>
           

        <Box sx={{
            position: "fixed",
            bottom: 0,
            left: 580,
            width: "100%",
            padding: "10px"
        }}>
        <Slider
            display="static"
            alignContent = "flex-end"
            value={value}
            onChange={handleChange}
            min={0.1}
            step={0.01}
            max={1}
            valueLabelDisplay="auto"
            sx={{
                color: "white",
                width: "600px"
            }}/>
        </Box>
        </Box>
    )

    const stickySlider = {
        position: "fixed",
        bottom: 0,
        width: "100%",
        padding: "10px"
    }

}


export default LightControl;