import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import SidebarComp from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Shades from "./scenes/shades";
import LightControl from "./scenes/ligth";
import HeatControl from "./scenes/heat";
import ManageEnergy from "./scenes/energy";
import Login from "./component/Login";
import Register from "./component/Register";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode(); // Hook to get theme and color mode

  return (
    <ColorModeContext.Provider value={colorMode}>  {/* Provide color mode context */}
      <ThemeProvider theme={theme}>  {/* Provide the theme to the entire app */}
        <CssBaseline />  {/* Reset CSS to provide a consistent baseline */}
        
        <Router>
          <div style={{ display: 'flex' }}>
            {/* Sidebar */}
            <SidebarComp />
            
            {/* Main content */}
            <div style={{ flex: 1 }}>
              {/* Topbar */}
              <Topbar />

              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/shades" element={<Shades />} />
                <Route path="/light" element={<LightControl />} />
                <Route path="/heat" element={<HeatControl />} />
                <Route path="/energy" element={<ManageEnergy />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
