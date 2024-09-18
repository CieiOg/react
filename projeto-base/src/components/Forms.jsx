import { useState } from "react"

const Forms = (props) => {
    const [name, setName] = useState(props ? props.name : "")
    const [email, setEmail] = useState(props ? props.email : "" )
    const [desc, setDesc] = useState(props ? props.desc : "" )
    const [tipo, setTipo] = useState(props ? props.desc : "" )
    
    const handleSubmit = (e)=>{
        e.preventDefault()

        console.log(email)
        console.log(desc)
        console.log(name)
        console.log(tipo)

        setName("")
        setEmail("")
        setDesc("")
        
        setTipo("")
    }

    const handleName = (e)=>{
        
       
            
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" placeholder="digite seu nome" onChange={(e)=>{setName(e.target.value)}} value= {name}/>
            
            
            <br />
            
            <label>
                <span>Email:</span> 

                <input type="text" name="email" placeholder="Digite seu email" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
            </label>

            <br />

            <label >
                <span>Descrição</span>
                <textarea name="descricao" id="descricao" placeholder="Descreva a si mesmo" onChange={(e)=>setDesc(e.target.value) } value={desc}></textarea>
            </label>
            
                
            <br />
            
            <label>
                <span>Tipo de usuário</span>

                <select
                name="tipoU"
                onChange={(e)=>{
                    setTipo(e.target.value)
                }}
                >

                    <option value="user">Usuário</option>
                    <option value="adm">Administrador</option>
                    <option value="client">Client</option>
                </select>
            </label>
            
            <input type="submit" action="enviar"  />

        </form>
        

    </div>
  )
}

export default Forms