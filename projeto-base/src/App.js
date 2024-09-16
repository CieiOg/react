import {useState} from 'react'
import Singers from './components/Singers'

const App = () => {

  const [cantores] = useState([
    {id:1, name:"Michael Jackson", gender: "Pop", winner: true, position: 1},
    {id:2, name:"Isabelle Rickson", gender: "Pop", winner: false, position: 2},
    {id:3, name:"50 centavos", gender: "Rapo", winner: true, position: 3}
  ])



  return (
    <div>
      {cantores.map((cantor) => (
        <Singers
          key={cantor.id}

          name={cantor.name}
          gender={cantor.gender}
          winner={cantor.winner}
          position={cantor.position}
        />
          
      ))}

      
    </div>
  )
}

export default App