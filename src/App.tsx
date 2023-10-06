import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MyComponents from './components/test/MyComponents';
import BoardGames from './pages/BoardGames';
import Rooms from './pages/Rooms';
import Pricing from './pages/Pricing';
import NavBar from './components/NavBar';
import { MemberProvider } from './contexts/MemberProvider';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Router >
      <main className=" h-screen m-0 w-full overflow-hidden overscroll-none">
        <MemberProvider>
          <NavBar />
          <Routes>
            <Route path="/components" element=<MyComponents /> />
            <Route path="/boardgames" element=<BoardGames /> />
            <Route path="/rooms" element=<Rooms /> />
            <Route path="/recent" element=<div>recent</div> />
            <Route path="/pricing" element=<Pricing /> />
            <Route path="/*" element=<SignIn /> />
          </Routes>
        </MemberProvider>
      </main>
    </Router >
  );
}

export default App;
