const Singers = ({id, name, gender, winner, position}) => {


  return (
    <div>
      <hr />

      <h2>O artista é:  {name}</h2>
      <h2>Canta o genero: {gender}</h2>
      <h2>Esta ná posição: {position}</h2>
      {winner && <h2 >É vencedor</h2>}
    </div>
  )
}

export default Singers