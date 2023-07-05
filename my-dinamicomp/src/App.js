import logo from './logo.svg';
import './App.css';
import Card from '..//src/componentes/Card'
function App() {
  return (
    <div className="contenedorVistas">
     <Card
     imagen='Imagen1.jpg'
     alt='Imagen 1'
     titulo='Titulo de mi Card'
     parrafo='Parrafo de el Card'/>
     <Card
     imagen='Imagen2.jpg'
     alt='Imagen 2'
     titulo='Titulo de mi Card 2'
     parrafo='Parrafo de el Card 2'/>
    </div>
  );
}

export default App;
