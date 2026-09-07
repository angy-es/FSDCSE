import ICard from "./component/ICard";
import "./App.css";
import ReactHook from "./component/ReactHook";
import ImageManipulation from "./component/ImageManipulation";

function App() {
  return (
    <div>
      
  
      <image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300" alt="Profile" width="100" height="100" style={{ borderRadius: "50%" }} />
      <ImageManipulation/>
    </div>
    
  );
}

export default App;