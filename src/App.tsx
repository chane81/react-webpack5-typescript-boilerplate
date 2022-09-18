import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClassDefault from './components/ClassDefault';
import { ClassNamed } from './components/ClassNamed';
import FunctionDefault from './components/FunctionDefault';
import { FunctionNamed } from './components/FunctionNamed';
import BadStateUpdate from './pages/BadStateUpdate';
import BestStateUpdate from './pages/BestStateUpdate';
const LazyComponent = React.lazy(() => import('./components/LazyComponent'));

function App() {
  return (
    <div>
      <ClassDefault />
      <ClassNamed />
      <FunctionDefault />
      <FunctionNamed />
      <React.Suspense fallback={<h1>Loading</h1>}>
        <LazyComponent />
      </React.Suspense>
      <Router>
        <Routes>
          <Route path='/' element={<BadStateUpdate />} />
          <Route path='/BadStateUpdate' element={<BadStateUpdate />} />
          <Route path='/BestStateUpdate' element={<BestStateUpdate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
