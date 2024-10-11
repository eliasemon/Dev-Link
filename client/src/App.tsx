import CustomizeLinks from './components/CustomizeLinks/CustomizeLinks';
import Layout from './components/Layout';
import NavBar from './components/Navbar';
import PreviewLinks from './components/PreviewLinks';
import Profile from './components/Profile';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="bg-neutral-100 h-full w-100">
      <Router>
        <NavBar />
        <div className="h-32"></div>
        <div className="container mx-auto flex justify-between items-center">
          <Routes>
            <Route
              path="/profile"
              element={
                <Layout>
                  <Profile />
                </Layout>
              }
            />
            <Route
              path="/links"
              element={
                <Layout>
                  <CustomizeLinks />
                </Layout>
              }
            />
            <Route path="/preview/:userId" element={<PreviewLinks />} />
            <Route path="/preview" element={<PreviewLinks />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
