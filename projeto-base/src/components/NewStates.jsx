import {useState} from 'react'

const NewStates = () => {


    let [valor, setNumber] = useState(1)
    console.log(valor)
    
  return (
    <div>
        <p>Valor: {valor}</p>
        <button onClick={()=> setNumber(valor * 999999999)}>Aumente o valor</button>
    </div>
  )
}

export default NewStates