import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AllPost from "./Components/AllPost/AllPost";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <AllPost />
    </div>
  );
}

export default App;
