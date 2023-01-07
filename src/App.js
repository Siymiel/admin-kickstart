import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import NotFound from './pages/NotFound';
import Overview from './pages/dashboard/Overview';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <Routes>
      <Route exact path="/" element={<Overview />} />
      <Route exact path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
