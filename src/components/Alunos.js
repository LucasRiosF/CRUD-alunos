import React from "react";
import { Table } from "react-bootstrap";

class Alunos extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            alunos : [
                {'id':1, 'nome':'Luiz Fernando', 'email':'luiz@gmail.com'},
                {'id':2, 'nome':'João Felipe', 'email':'joao@gmail.com'}
            ]
        }
    }

    render(){
        return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{this.state.alunos[0].nome}</td>
                    <td>Luiz@gmail.com</td>
                    <td>Atualizar Excluir</td>
                </tr>
                <tr>
                    <td>Joao</td>
                    <td>Joao@gmail.com</td>
                    <td>Atualizar Excluir</td>
                </tr>
            </tbody>
        </Table>
    )
    }
}

export default Alunos;