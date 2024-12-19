import {Box, Typography, useTheme} from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import {tokens} from "../../theme";
import {mockDataTeam} from "../../data/mockData"
import {mockDataApp} from "../../data/mockData"
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

const Team = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    const columns = [
        {field: "id", headerName: "ID"},
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell"
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1
        },
        {
            field: "password",
            headerName: "Password",
            flex: 1,
        },
        {
            field: "role",
            headerName: "Role",
            flex: 1,
            renderCell: ({row: {role}}) =>{
                return(
                    <Box
                    display="flex"
                    marginTop="15px"
                    >
                        {role === "admin" && <AdminPanelSettingsOutlinedIcon/>}
                        {role === "user" && <LockOpenOutlinedIcon/>}
                        <Typography>
                            {role}
                        </Typography>
                    </Box>
                )
            }
        },
        {
            field: "creationDate",
            headerName: "Creation Date",
            flex: 1
        }
    ]



    return(
        <Box>
            <Box>
                <DataGrid rows={mockDataApp} columns={columns}></DataGrid>
            </Box>
        </Box>
    )
}


export default Team 










