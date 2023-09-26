// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Album from './Album';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ResultPage from "./result";

const defaultTheme = createTheme();

function App() {
  return(
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <Routes>
          <Route path="/" element={[<Album/>]} />
          <Route path="/login" element={<SignIn/>} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/admindashboard" element={<AdminDashboard/>} /> */}
          <Route path="/register" element={<SignUp />} />
          <Route path="/search" element={<ResultPage/>}/>
          {/* <Route path="/pledge" element={<PledgePage />} /> */}
          {/* {/<Route path="/dashboard"element={<Dashboard/>} />/} */}
        </Routes>
        </Router>
        
    </ThemeProvider>
  )
}

export default App;
