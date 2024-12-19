import React, { useState } from "react";
import { Box, Typography, Slider, useTheme, Button } from "@mui/material";
import { tokens } from "../../theme";


function Item({tit}){

    const theme = useTheme() 
    const [value, setValue] = useState(0);
    const colors = tokens(theme.palette.mode)

    const handleChange = (event, newValue) =>{
        setValue(newValue);
       }
    
       const open = () =>{
        setValue(100)
       }
    
       const close = () =>{
        setValue(0)
       }

    return(
        <Box
       sx={{
        height: 220,
        width: 220,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: colors.greenAccent[800], // Bez interpolacji
    
       }}
       >
        <Typography
        sx={{marginBottom: "10px", fontSize: "20px"}}
        >{tit}</Typography>
        <Box
        sx={{display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderTop: "1px solid black",
            paddingTop: 2
        }}>

        
        <Typography>Zamknięcie rolet: {value}%</Typography>
        <Slider 
        value={value}
        onChange={handleChange}
        min={0}
        max={100}
        valueLabelDisplay="auto"
        orientation="vertical"
        sx={{
            height: 100,
            color: "blue",
            '& .MuiSlider-track': {
                width: 15,
            },
            '& .MuiSlider-rail':{
                width: 15,
            },
        }}
        />
        </Box>
        <Box sx={{display: "flex", flexDirection: "row", marginTop: "20px"}}>
            <Button 
            onClick={open}
            sx={{
                backgroundColor: colors.greenAccent[100],
                color: colors.grey[800]
            }}>
                Open
            </Button>

            <Button 
            onClick={close}
            sx={{
                backgroundColor: colors.greenAccent[100],
                color: colors.grey[800],
                marginLeft: "5px"
            }}>
                Close
            </Button>
        </Box>      
       </Box>
    )
}


function Shades(){

   

    return(
    <Box sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "80px",
        justifyContent: "center"
    }}>
      <Item
      tit="Pokój 1"
      />

    <Item
      tit="Pokój 2"
      />

    <Item
      tit="Pokój 3"
      />

    <Item
      tit="Pokój 4"
      />

    <Item
      tit="Pokój 5"
      />

    <Item
      tit="Pokój 6"
      />

    <Item
      tit="Pokój 7"
      />

    <Item
      tit="Pokój 8"
      />  

    </Box>
    )
}

export default Shades;