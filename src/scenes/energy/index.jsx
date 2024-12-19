import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DataGrid } from "@mui/x-data-grid";
import {energyData} from "../../data/mockData"
import {Box, Icon, IconButton, Slider, Typography} from "@mui/material"
import { FullscreenExitSharp } from "@mui/icons-material";

const ManageEnergy = () => {
  
  const columns = [
    {field: "id", headerName: "ID"},
    {
      field: "device",
      headerName: "Device",
      flex: 1,
      cellClassName: "device-column--cell"
    },
    {
      field: "deviceType",
      headerName: "Device Type",
      flex: 1,
    },
    {
      field: "energyCost",
      headerName: "Energy Cost",
      flex: 1,
    },
    {
      field: "maxPower",
      headerName: "Max Power",
      flex: 1
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1
    }
  ]


  return (
    <Box>
      <Box>
        <DataGrid rows={energyData} columns={columns}/>
      </Box>
    </Box>
  )
}
export default ManageEnergy;
