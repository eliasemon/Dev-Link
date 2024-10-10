import CustomizeLinks from './components/CustomizeLinks';
import NavBar from './components/Navbar';
// import AuthComponent from './pages/Auth/Auth';
import { useStore } from './store/store';

function App() {
  const user = useStore((state) => state.user);
  console.log(user);
  return (
    <div className="h-screen w-screen">
      <NavBar />
      <CustomizeLinks />
      {/* <AuthComponent /> */}
    </div>
  );
}

export default App;
