import { BrowserRouter, Routes, Route }
    from 'react-router-dom';
import Erro from './pages/Erro';
import Home from './pages/Home';
import Anos70 from './pages/Anos70';
import Anos80 from './pages/Anos80';
import Header from './components/Header';

function RouterApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/anos70" element={<Anos70 />} />
                <Route path="/anos80" element={<Anos80 />} />
                <Route path='*' element={<Erro />} />

            </Routes>
        </BrowserRouter>
    )
}
export default RouterApp; 