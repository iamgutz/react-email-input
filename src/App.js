import logo from './logo.svg';
import './App.css';
import EmailField from './components/EmailField';

function App() {
  return (
    <div className="App">
      <div className="container">
        <EmailField
          autoFocus
        />
      </div>
    </div>
  );
}

export default App;
