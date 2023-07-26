import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Preview from './pages/Preview';
import Edit from './pages/Edit';



const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="/Edit" element={<Edit />} />
      <Route path="/*" element={<Home />} />

    </Routes>
  </Router>
);

export default AppRouter;
