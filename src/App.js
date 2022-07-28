import Navbar from "./componets/Nav";
import Container from "./componets/About"
import { Parallax } from 'react-parallax';
import about from './img/about.jpg'

//import Home from "./componets/Home";

function App() {
  return (
    <Parallax bgImage={about} bgImageAlt="the cat" strength={800}>
      <Navbar />
      <Container />
    </Parallax>
  );
}

export default App;
