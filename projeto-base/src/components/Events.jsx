import React from "react";



const consolar = (e) => {
  console.log(e)
  
  console.log("funcionou 2");
};



const Events = () => {
  return (
    <div>
      <button onClick={() => console.log("funcionou")}>Clique aqui</button>
      <br />
      <button onClick={consolar}>Ou aqui</button>
    </div>
  );
};

export default Events;
