
import './App.css';
import NavContainer from './components/navContainer';
import NavBar from './components/navbar';
import ItemListContainer from './components/itemListContainer';





function App() {
  return (
    <>
      <NavContainer />        
      <NavBar />
      <ItemListContainer greeting='¡Bienvenidos a MI TIENDA Oline!' />
    </>
  );
}

export default App;
