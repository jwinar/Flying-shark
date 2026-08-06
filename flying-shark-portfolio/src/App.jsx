import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProjectDetail from './components/ProjectDetail'
import { AmbientAudioProvider } from './hooks/useAmbientAudio'
function App() {
  return <AmbientAudioProvider><BrowserRouter><Routes><Route path="/" element={<ProjectDetail />} /><Route path="/projects/:id" element={<ProjectDetail />} /></Routes></BrowserRouter></AmbientAudioProvider>
}
export default App
