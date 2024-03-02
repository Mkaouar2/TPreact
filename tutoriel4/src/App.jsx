import './App.css'
import Card from './compo/Card.jsx'
function App() {
  return (
    <>
     <h1 className='h1'>La tunisie est fiere de ses champions</h1>
     <div className="row row-cols-1 row-cols-md-3 g-4 "> 
     <Card nom="Ons jabeur" qualif="Joueuse de tennis" imageSrc="./public/OJ.png"/>
     <Card nom="Heykel Megannem" qualif="HandBalleur" imageSrc="./public/HM.png"/>
     <Card nom="Ali Maaloul" qualif="Footballeur" imageSrc="./public/AM.png"/>
     <Card nom="Raoua Tlili" qualif="Athléte Handisport" imageSrc="./public/RT.png"/>
     <Card nom="Ahmed Ayoub Hafnaoui" qualif="Nageur" imageSrc="./public/AAH.png"/>
     <Card nom="Habiba Ghribi" qualif="Athléte" imageSrc="./public/HG.png"/>
    </div>
    </>
  );
}
export default App