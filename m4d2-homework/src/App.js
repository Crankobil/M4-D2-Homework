import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavbar from './Components/MyNavbar';
import MyJumbatron from './Components/MyJumbatron';
import BookList from './Components/BookList';

function App() {
  return (
    <div>
    <MyNavbar/>
    <MyJumbatron/> 
    <BookList/>
    </div>
  );
}

export default App;
