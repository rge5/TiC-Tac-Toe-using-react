
import './App.css'
import Card from './Components/Card/Card';
import Grid from './Components/Grid/Grid';

function App() {

  return (
    <div className='container'>
      {/* <Card/> */}
      <Grid numberOfCards={9}/>
    </div>
  )
}

export default App;
