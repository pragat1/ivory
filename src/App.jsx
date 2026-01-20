import { BrowserRouter, Routes, Route } from "react-router-dom"
import Quiz from "./pages/QuizPage"
import Routine from "./pages/RoutinePage"
import Diary from "./pages/DiaryPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/routine" element={<Routine />} />
        <Route path="/diary" element={<Diary />} />
      </Routes>
    </BrowserRouter>
  )
}
