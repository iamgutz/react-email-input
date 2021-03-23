import { useState } from 'react';
import './App.css';
import EmailField from './components/EmailField';
import emailsData from './data/emails';

function App() {
  const [autoCompleteResults, setAutoCompleteResults] = useState([]);

  const handleOnSearchEmails = value => {
    debugger
    const regExp = new RegExp('^' + value);
    const filtered = emailsData.filter(email => regExp.test(email));
    setAutoCompleteResults(filtered);
  };
  const handleOnListChange = () => {
    setAutoCompleteResults([]);
  }
  return (
    <div className="App">
      <div className="container">
        <EmailField
          autoFocus
          onListChange={handleOnListChange}
          onSearchEmails={handleOnSearchEmails}
          autoCompleteOptions={autoCompleteResults}
        />
      </div>
    </div>
  );
}

export default App;
