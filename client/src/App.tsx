import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomizeLinks from '@/pages/CustomizeLinks/CustomizeLinks';
import Layout from '@/components/Layout';
import NavBar from '@/components/Navbar';
import PreviewLinks from '@/pages/PreviesLinks/PreviewLinks';
import Profile from '@/pages/Profile';
import NotFound from '@/pages/NotFound'; // New 404 component
import { useStore } from '@/store/store';

function App() {
  const isLoggedIn = useStore((state) => state.user?.token);

  return (
    <div className="bg-neutral-100 w-full">
      <Router>
        {isLoggedIn && (
          <>
            <NavBar />
            <div className="h-20 xl:h-32"></div>
          </>
        )}

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
              path="/"
              element={
                <Layout>
                  <CustomizeLinks />
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
            <Route path="*" element={<NotFound />} /> {/* 404 NotFound Route */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
