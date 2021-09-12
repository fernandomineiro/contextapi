
import React, {useState, useEffect} from 'react';

const App = () => {
  const aContext = React.createContext('someInitialValue')
  const [customers, setCustomers] = useState([]);
  const [teste, setTeste] = useState();
  

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => {
        setCustomers(data); // set customers in state
      });
  }, []);
  return (
    <div>
      <aContext.Provider value={'belinha'}>
        <aContext.Consumer>
        { (value) => setTeste(value)}
      </aContext.Consumer>
      </aContext.Provider>
      {teste}
      <aContext.Provider value={'teste'}>
      <aContext.Consumer>
        { (value) => <div>Rsrsrs: {value}</div>}
      </aContext.Consumer>
      </aContext.Provider>
      <aContext.Consumer>
        { (value) => <div>aqui vamos lá: {value}</div>}
      </aContext.Consumer>
      {customers.map((number) => number.login)}
      
    </div>
  );
}

export default App;
