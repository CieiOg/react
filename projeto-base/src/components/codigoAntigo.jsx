import "./App.css";
import Events from "./components/Events";
import NewStates from "./components/NewStates";
import ListRender from "./components/ListRender";
import PropTest from "./components/PropTest";
import Destructing from "./components/Destructing";

function codigoAntigo() {
  // const nome = "Geovane"


  return (
    <div className="App">
      {/* <Events /> */}
      {/* <NewStates/> */}
      {/* <ListRender/> */}

      {/* <PropTest name={nome}/> */}


      <Destructing time="São Paulo" estado="SP" posicao={4} campeao={false}/>
      <Destructing time="Espirto Paulo" estado="EP" posicao={7} campeao={true}/>

    </div>
  );
}

export default codigoAntigo;
