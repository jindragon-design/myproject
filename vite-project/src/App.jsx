import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Quiz from "./Quiz.jsx";
import Results from "./Results.jsx";


function App() {
  //1. npm install react-router-dom@6
  //2. browserrouter로 감싸기
  //3. routes로 감싸기
  //4. route 태그를 쓰고 path에는 내가 원하는 경로를 적고, element에는 내가 보여주고싶은 컴포넌트 이름을 넣는다.
  //주의할 점 : import에  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/quiz/:nickname" element={<Quiz />}></Route>
          <Route path="/results/:nickname" element={<Results />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
