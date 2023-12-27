import './App.css';

function App() {
  const key = import.meta.env.VITE_TEST_KEY;
  console.log('key : ', key);
  return (
    <>
      {key}
      hello!!!!!fdsfs
    </>
  );
}

export default App;
