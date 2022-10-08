import React, { Component } from 'react';

// trabalhando com class component e props

class Equipe extends Component{
    render(){
        return(
            <div>
                <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade} />
                <Social social={this.props.linkedin}/>
                <hr />
            </div>
        );
    }
}

class Sobre extends Component{
    render(){
        return(
            <div>
                <h2>Nome: {this.props.nome}</h2>
                <h3>Cargo: {this.props.cargo}</h3>
                <h3>Idade: {this.props.idade}</h3>
            </div>
        );
    }
}

const Social = (props) =>{
    return(
        <div>
            <a href={this.props.linkedin}>Linkedin</a>
        </div>
    );
}

function classComponent(){
    return(
        <div>
            <h1>Conheça-nos:</h1>
            <Equipe nome="Fabricio" cargo="Proprietario" idade="45" linkedin="https://www.linkedin.com/in/matheus-matos-1a523221b/"/>
            <Equipe nome="Matheus" cargo="Recepcionista" idade="19"/>
        </div>
    );
}

export default classComponent;