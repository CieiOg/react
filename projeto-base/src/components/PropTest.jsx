const PropTest = (props ) => {
    console.log(props)


  return (
    <div>
        <h1>Seu nome é {props.name}</h1>
    </div>
  )
}

export default PropTest