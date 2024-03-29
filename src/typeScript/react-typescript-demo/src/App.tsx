import Greet from './componnets/Greet';
import Heading from './componnets/Heading';
import Main from './componnets/Main';

function App() {
  const personObject = {
    first: "ALi",
    last: "Adil"
  }

  const arrayOfList = [
    {
      first: "ALi",
      last: "Adil"
    },
    {
      first: "ALi",
      last: "Adil"
    },
    {
      first: "ALi",
      last: "Adil"
    }
  ]
  return (
    <div className="App">
      <Greet name="ali" person={personObject} array={arrayOfList} status="loading" personCount={0}>
        <Heading>PlaceHolder Text</Heading>
      </Greet>
      <Main/>
    </div>
  );
}

export default App;
