// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
// import Layout from "./Layouts/Layout";
// import Home from "./Composants/Home";
// const App = () => {
//     return (
//       <Router> 
        
//         <Routes>
//           <Route path="/" element={<Layout />}>
//           <Route path="/" element={<Home />} />
//           </Route>
          
//         </Routes>
//       </Router>
//     );
//   };
  
//   export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./Layouts/Layout";
import Home from "./Composants/Home";
import Blog from "./Composants/Blog";
import SinglePost from "./Composants/SinglePost";
import Page from "./Composants/Page";
const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Layout theme={theme} setTheme={setTheme} />}
        >
          <Route path="/" element={<Home theme={theme} />} />
        <Route path="/Blog" element={<Blog theme={theme} />} />
          <Route path="/SinglePost" element={<SinglePost theme={theme} />} />
          <Route path="/Page" element={<Page theme={theme} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;


  