import React from 'react';

// trabalhando com props e componentes:

const Equipe = (props) => {
  return(
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
      <Social linkedin={props.linkedin}/>
    </div>
  );
}

const Sobre = (props) => {
  return(
    <div>
      <h2>Olá, sou o {props.nome}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h4>Idade: {props.idade}</h4>
    </div>
  );
}

const Social = (props) => {
  return(
    <div>
      <a href={props.linkedin}>Linkedin</a>
    </div>
  );
}

function propsComponentes(){
  return(
    <di>
      <h1>Conheça nossa equipe:</h1> 
      <Equipe nome = "Matheus" cargo = "Desenvolvedor Jr" idade = "19" linkedin="https://www.linkedin.com/in/matheus-matos-1a523221b/"/> 
      <Equipe nome = "Livia" cargo = "Biomedica" idade = "20" linkedin="https://www.linkedin.com/in/livia-sperandio-gutter-35a88920b/"/> 
    </di>
  );
}

export default propsComponentes;