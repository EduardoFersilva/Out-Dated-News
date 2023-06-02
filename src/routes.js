import { BrowserRouter, Routes, Route }
    from 'react-router-dom';
import Erro from './pages/Erro';
import Home from './pages/Home';
import Anos70 from './pages/Anos70';
import Anos80 from './pages/Anos80';
import Anos90 from './pages/Anos90';
import Anos2000 from './pages/Anos2000';
import Header from './components/Header';
import Cadastro from './pages/Cadastro';
function RouterApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/anos70" element={<Anos70 />} />
                <Route path="/anos80" element={<Anos80 />} />
                <Route path="/anos90" element={<Anos90 />} />
                <Route path="/anos2000" element={<Anos2000 />} />
                <Route path='*' element={<Erro />} />

            </Routes>
        </BrowserRouter>
    )
}
export default RouterApp; 