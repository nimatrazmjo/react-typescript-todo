import './App.css';
import InputButton from './components/input-button/input-button.component';
import InputText from './components/input-text/input-text.component';

function App() {
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <div>
        <InputText />
        <InputButton />
      </div>

    </div>
  );
}

export default App;
