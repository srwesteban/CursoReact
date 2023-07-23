import logo from './logo.svg';
import './App.css';
import ComponentA from './components/container/componentA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name='William' /> */}
        {/* <GreetingF name='william'/> */}
        {/* <TaskListComponent/> */}
        <ComponentA/>
        
      </header>
    </div>
  );
}

export default App;
