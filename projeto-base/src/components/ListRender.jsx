import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus", "Marcos", "Lucas", "João", ])
    const [team] = useState([
        {id: 1, name: "a", number: 100, pais: "Brasil"},
        {id: 2, name: "b", number: 200, pais: "Inglaterra"},
        {id: 3, name: "c", number: 300, pais: "Dubai"}]
    )
    // let novoValorInput = document.querySelector("#novoValorInput")
    // let novoValor = ''
    // let adicionarValor = ()=>{
    //     novoValor = novoValorInput.value
    //     console.log(novoValor)
            
    //     list.unshift(novoValor)
    //     console.log(list)
    // }

  return (
    <div>
        
        
        <h1>Lista atual :</h1>

        {/* <input type="text" id='novoValorInput' /> */}
        {/* <button onClick={adicionarValor}>Adicionar mais valores</button> */}

        <ul>
            {
                list.map((item, index) => ( <li key={index}> {item} </li> ))
            }
        </ul>

        <ol>
            {team.map((player) => (
                 <li key={player.id}>  
                    {player.name} - Camisa {player.number} - País - {player.pais}
                 </li> 
                 
            ))}
        </ol>


    </div>
  )
}

export default ListRender