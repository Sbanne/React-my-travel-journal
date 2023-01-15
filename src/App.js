import './App.css';
import Header from './components/header'
import Main from './components/main'
import Data from './components/data'
function App() {
  const dataElement = Data.map(item => {
    return (
      <Main
        item={item}
      />
    )
  })
  return (
    <div className="App">
      <Header />
      {dataElement}
    </div>
  );
}

export default App;
