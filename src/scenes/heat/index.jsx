import {Box, Icon, IconButton, Slider, Typography} from "@mui/material"
import React, { useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {motion, AnimatePresence} from "framer-motion"
import LightModeIcon from '@mui/icons-material/LightMode';
import AcUnitIcon from '@mui/icons-material/AcUnit';


function HeatControl(){

    const [value, setValue] = useState(0)
    const [temp, setTemp] = useState(0)
    const [isClick, setIsClick] = useState(false)

    const handleChange = (event, NewValue) => {
        setTemp(NewValue)
    }

    const handleTempUp = () =>{
        setTemp((prev) => {
            if(prev < 50){
                setIsClick(true)
                return prev + 1
            }
            return prev
        })
    }

    const handleCold = () => {
        setTemp(0)
    }

    const handleHot = () => {
        setTemp(30)
    }

    const handleTempDown = () =>{
        setTemp((prev) => {
            if(prev > -20){
                setIsClick(false)
                return prev - 1
            }
            return prev
        })
    }

    const getColor = () => {
        const red = Math.round(((temp+20)/70) *255); 
        const blue = 255 -red;
        return `rgb(${red}, 0, ${blue})`
    }

    return(
        <Box sx={{display:"flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>

            <Box sx={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                <Typography sx={{fontSize: "32px"}}>Temperatura ℃</Typography>
            </Box>

            <Box>
                <Box sx={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                <IconButton onClick={handleTempUp}>
                    <KeyboardArrowUpIcon sx={{fontSize: "40px"}}/>
                </IconButton>
                </Box>
                    
                <Box sx={{display:"flex", justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: getColor(), width: "300px", height: "300px", borderRadius: "50%",}}>
                    
                    <AnimatePresence>
                    
                        <motion.div
                          key={temp}
                          initial={{ y: isClick == true ? 100 : -100, opacity: 0}}
                          animate={{ y: 0, opacity: 1}}
                          exit={{ y: isClick == false ? 100: -100, opacity: 0 }}
                          transition={{ duration: .5 }}
                          style={{
                            position: "absolute",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "24px",
                          }}
                        >
                                {temp.toFixed(1)+"°"}
                            </motion.div>
                     
                    </AnimatePresence>
                
                </Box>

                <Box sx={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                <IconButton onClick={handleTempDown}>
                    <KeyboardArrowDownIcon sx={{fontSize: "40px"}}/>
                </IconButton>
                </Box>

            </Box>

            <Box>
                <Slider
                display= "static"
                alignContent = "flex-end"
                value={temp}
                onChange={handleChange}
                min={-20}
                step={1}
                max={50}
                valueLabelDisplay="auto"
                sx={{
                    color: "white",
                    width: "300px"
                }}/>
            </Box>

            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", marginRight: "40px",  flexDirection: "column"}}>
                    <IconButton
                    sx={{
                        border: "1px solid white"
                    }}
                    onClick={handleCold}
                    >
                        <AcUnitIcon/>
                    </IconButton>
                    <Typography>Cold Mode</Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                    <IconButton 
                    sx={{
                        border: "1px solid white"
                    }}
                    onClick={handleHot}
                    >
                        <LightModeIcon/>
                    </IconButton>
                    <Typography>Hot Mode</Typography>
                </Box>
            </Box>
        </Box>
    )
}


export default HeatControl