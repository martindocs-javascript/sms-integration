import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { 
  SMS, 
  NotFoundPage,
} from './pages';

function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SMS />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>  
  )
}

export default App;