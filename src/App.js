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
        <div className="instructions">
          <p>Type email addresses into the input below.</p>
          <p>Hit ENTER or TAB to add the email.</p>
          <p>Hit BACKSPACE to delete last email added.</p>
          <p>Mouseover an email to display the "Remove" button, click it to remove that email from the list.</p>
        </div>
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
