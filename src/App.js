import logo from './logo.svg';
import './App.css';
import D1 from './components/Day1';
import Day4 from './components/day4';
import D2 from './Day2/D2';
import Day5 from './components/Day5';
import Day3 from './components/Day3';
import Msg from './components/Day8';
import AxiosGet1 from './components/Day7';
import Productlist from './components/Day6/Day6';
import NavBar from './components/day9/Navbar';
import Home from './components/day9/home';
import Singers from './components/day9/Singer';
import Albums from './components/day9/Album';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Productlist products={[{no:"1",name:"PHONE", price:"80,000", imageUrl:"https://tse3.mm.bing.net/th?id=OIP.5isvd83HGoWhRhp_RC92fQHaLr&pid=Api&P=0"},{no:"2",name:"BIKE", price:"7,00,000", imageUrl:"https://tse4.mm.bing.net/th?id=OIP.eklrK1xqGd70-m8581JomAHaEK&pid=Api&P=0"}]} /> <hr></hr>
      <NavBar/>
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/singers' element={<Singers />}></Route>
            <Route path='/albums' element={<Albums />}></Route>
        </Routes><br></br><hr></hr>
        <Msg /><hr></hr>
        <AxiosGet1 />
    </div>
  );
}

export default App;
