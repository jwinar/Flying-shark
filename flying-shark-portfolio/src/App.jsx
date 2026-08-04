import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProjectDetail from './components/ProjectDetail'
function App() {
  return <BrowserRouter><Routes><Route path="/" element={<ProjectDetail />} /><Route path="/projects/:id" element={<ProjectDetail />} /></Routes></BrowserRouter>
}
export default App
