const Destructing = ({time, estado, posicao, campeao}) => {


  return (
    <div>
        <h2>O nome do time é: {time}</h2>
        <h2>O nome do estado é: {estado}</h2>
        <h2>Sua posicao é: {posicao}</h2>

        {campeao && <h1>Este time é campeão</h1>}
        
    </div>
  )
}

export default Destructing