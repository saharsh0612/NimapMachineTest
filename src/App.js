
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Task from './Component/Task';
import User from './Component/User';
import AddTask from './Component/AddTask';
import Login from './Component/Login';
import Information from './Component/Information';
import Information2 from './Component/Information2';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/task" element={<Task />} />
        <Route path="/user" element={<User />} />
        <Route path="/add_task" element={<AddTask />} />
        <Route path="/login" element={<Login />} />
        <Route path="/information" element={<Information />} />
        <Route path="/information2" element={<Information2 />} />
      </Routes>
    </div>
  );
}

export default App;
