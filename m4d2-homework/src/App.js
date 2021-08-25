import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavbar from './Components/MyNavbar';
import MyJumbatron from './Components/MyJumbatron';
import BookList from './Components/LatestRelease';
import MyFooter from './Components/MyFooter'

function App() {
  return (
    <div>
    <MyNavbar/>
    <MyJumbatron/> 
    <BookList/>
    <MyFooter/>
    </div>
  );
}

export default App;
