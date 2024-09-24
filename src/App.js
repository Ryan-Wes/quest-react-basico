import './App.css';
import TextoColorido from './components/TextoColorido';
import Button from './components/Button'; // Importando o novo componente Button

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextoColorido className="texto-colorido" text="Guga é brabo!" color="#B005FF" />
        <Button label="Baixar CV" />
      </header>
    </div>
  );
}

export default App;
