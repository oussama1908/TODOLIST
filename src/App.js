import './App.css';
import { Route, Routes } from 'react-router-dom'; 
import Login from './componenet/Login'; 
import Profile from './componenet/Profile'; 
import Register from './componenet/Register'; 
import Navbar from './componenet/Navbar';
import LoginAdmin from './componenet/LoginAdmin';
import ProfileAdmin from './componenet/ProfileAdmin';
import { Task } from './componenet/Task';
import NavbarAdmin from "./componenet/NavbarAdmin"



function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/login" element={<><Navbar /> 
// <Login /></>} />
//         <Route path="/profile" element={<><Navbar /><Profile /></>} />
//         <Route path="/Register" element={<><Navbar /><Register /></>} /> 
//         {/* <Route path="/AddTask" element={<AddTask />} /> */}
//         <Route path="/LoginAdmin" element={<><NavbarAdmin/> <LoginAdmin /></>} /> 
//         <Route path="/ProfileAdmin" element={<> <NavbarAdmin/> <ProfileAdmin /></>} /> 
//         {/* <Route path="/ProfileAdmin/:name" element={<><Task/></>}/> */}
//       </Routes>
//     </div>
//   );
return (
  <div className="App">
    <Routes>
      

      {/* Admin routes */}
      <Route path='/' element={<><Navbar type="user" /> <Login /></>} />
      <Route path="/LoginAdmin" element={<><Navbar type="admin" /> <LoginAdmin /></>} />
      <Route path="/ProfileAdmin" element={<><Navbar type="admin" /> <ProfileAdmin /></>} />
      {/* User routes */}
      <Route path="/profile" element={<><Navbar type="user" /> <Profile /></>} />
      <Route path="/login" element={<><Navbar type="user" /> <Login /></>} />
      <Route path="/register" element={<><Navbar type="user" /> <Register /></>} />



    </Routes>
  </div>
);

}

export default App;
