import { Routes, Route } from "react-router-dom";
import SingUp from "./layouts/singUp";
import LogIn from "./layouts/logIn";
import Dashboard from "./layouts/dashboard";
import List from "./layouts/support-pc/list";
import Register from "./layouts/support-pc/register";
import State from "./layouts/support-pc/state";
import Edit from "./layouts/support-pc/edit";
import Xian from "./layouts/labs/xian";
import Gory from "./layouts/labs/gory";
import Toolouse from "./layouts/labs/toolouse";
import Yasuni from "./layouts/labs/yasuni";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SingUp/>}>
          </Route>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/dashboard/register" element={<Register/>}/>
          <Route path="/dashboard/list" element={<List/>}/>
          <Route path="/dashboard/state" element={<State/>}/>
          <Route path="/dashboard/list/edit" element={<Edit/>}/>
          <Route path="/dashboard/list/xian" element={<Xian/>}/>
          <Route path="/dashboard/list/gory" element={<Gory/>}/>
          <Route path="/dashboard/list/toolouse" element={<Toolouse/>}/>
          <Route path="/dashboard/list/yasuni" element={<Yasuni/>}/>



      </Routes>
    </div>
  );
}

export default App;
