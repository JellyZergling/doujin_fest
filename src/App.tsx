import MainPage from './pages/MainPage';
import ArtistPage from './pages/ArtistPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Main Page */}
        <Route path='/' element={<MainPage />} />
        <Route path='/Artist' element={<ArtistPage />} />
        <Route path='*' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
