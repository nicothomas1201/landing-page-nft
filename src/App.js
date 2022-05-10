import { Header } from './componets/header'
import { Hero } from './componets/hero';
import { ThreeCollections } from './componets/three-collections';
import './css/index.css'


function App() {
  return (
    <div>
      <Header height='48' width='48'/>
      <Hero />
      <ThreeCollections />
    </div>
  );
}

export default App;
