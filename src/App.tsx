import { Route, Routes } from 'react-router-dom';
import MyComponents from './components/test/MyComponents';
import BoardGames from './pages/BoardGames';
import Rooms from './pages/Rooms';
import Pricing from './pages/Pricing';
import NavBar from './components/NavBar';
import { useMemberContext } from './contexts/MemberProvider';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Payment from './pages/Payment';
import Loading from './pages/Loading';
import { Toaster } from 'react-hot-toast';
import { toastOptions } from './components/custom/notify';

function App() {
  const { memberType } = useMemberContext()
  return (
    <main className=" h-screen m-0 w-full overflow-hidden overscroll-none">
      <NavBar />
      {(memberType === "admin") ?
        <Routes>
          <Route path="/components" element=<MyComponents /> />
          <Route path="/boardgames" element=<BoardGames /> />
          <Route path="/*" element=<SignIn /> />
          <Route path="/loading/:page" element=<Loading /> />
        </Routes> :
        <Routes>
          <Route path="/components" element=<MyComponents /> />
          <Route path="/boardgames" element=<BoardGames /> />
          <Route path="/rooms" element=<Rooms /> />
          <Route path="/pricing" element=<Pricing /> />
          <Route path="/profile" element=<Profile /> />
          <Route path="/payment" element=<Payment /> />
          <Route path="/*" element=<SignIn /> />
          <Route path="/loading/:page" element=<Loading /> />
        </Routes>}
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={toastOptions}
      />
    </main>
  );
}

export default App;
