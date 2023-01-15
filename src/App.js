import './App.css';
import Header from './components/header'
import Main from './components/main'
import Data from './components/data'
function App() {
  const dataElement = Data.map(item => {
    return (
      <Main
        title={item.title}
        location={item.location}
        googleMap={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        image={item.imageUrl}
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
