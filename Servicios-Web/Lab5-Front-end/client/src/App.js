import './App.css';
import React from "react";
import Dashboard from './Components/dashboard';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src="/vinyl.png" className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <Dashboard/>
      </header>
    </div>
  );
}

export default App;
