import { MainPage, ArtistPage } from './pages/Pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App:React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*Main Page */}
        <Route path='/' element={<MainPage />} />
        <Route path='/Artists' element={<ArtistPage />} />
        <Route path='/Events' element={<ArtistPage />} />
        <Route path='*' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
