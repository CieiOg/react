import FirstComponent from './components/FirstComponent'
import floresta from './assets/floresta.jpg'
import OutroComponent from './components/OutroComponent';
import Component3 from './components/Component3';
import './App.css'



function App() {
  let n = 11
  let classDiferente = false
  return (
    <div className="App">

      <FirstComponent/>
      <OutroComponent/>

      <img src= {floresta} alt='' height={'400px'} width={'400px'}></img>

      {/* <p className='douradoPreto'>paragrafo do jsx dourado</p> */}

      {/* <p style= {{color: 'red', backgroundColor: 'purple', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px'}} >paragrafo do jsx estilização in-line</p> */}

      {/* <h3 style={n > 10 ? ({background: 'green'}) : ({background: 'red'})}>Cor muda de acordo com o IF</h3>
      
      <h3 style={n < 10 ? ({background: 'green'}) : ({background: 'red'})}>Cor muda de acordo com o IF</h3> */}


        <h2 className={classDiferente ? 'greenC' : 'redC'}>
          Texto a ter a classe mudada de acordo com a verificação
        </h2>

        <Component3/>
        
    </div>
  );
}

export default App;
