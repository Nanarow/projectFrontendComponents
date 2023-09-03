import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element=<div>Hello world</div> />
      </Routes>
    </Router >
  );
}

export default App;
