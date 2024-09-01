import { Route, Routes } from "react-router-dom";
import { boardList } from "./App-definitions";
import BoardIndex from "./hexboards";
import Layout from "./layout";

function App() {



  return (
    // {/* Routes nest inside one another. Nested route paths build upon
    //         parent route paths, and nested route elements render inside
    //         parent route elements. See the note about <Outlet> below. */}


    < Routes >
      <Route path='/' element={<Layout />}>
        <Route index element={<BoardIndex />} />
        {/* <Route path="about" element={<About />} /> */}
        {boardList.map((eachBoard) => {
          const path = `/${eachBoard.uid}`;
          return (<Route key={eachBoard.uid} path={path} element={eachBoard.element} />);
        })}

      </Route>
    </Routes >
  )
}

export default App
