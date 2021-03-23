import './App.css';
import EmailField from './components/EmailField';

function App() {
  const handleOnListChange = emailList => {
    console.log(emailList);
  }
  return (
    <div className="App">
      <div className="container">
        <EmailField
          autoFocus
          onListChange={handleOnListChange}
        />
      </div>
    </div>
  );
}

export default App;
