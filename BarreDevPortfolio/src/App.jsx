import Header from "../components/Header";
import Profil from "../components/Profil";
import Competences from "../components/Competences";
// import Hangman from "./Hangman";
import FxHangman from "../components/FxHangman";

function App() {
 return  (
 <>
   <Header />
   <Profil />
   <Competences />
   {<FxHangman />}
 </> 

 );
        
 
}

export default App
