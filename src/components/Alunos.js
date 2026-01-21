import React from "react";
import { Table, Button } from "react-bootstrap";

class Alunos extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            alunos : [
                
            ]
        }
    }

    componentDidMount(){
        this.buscarAluno();
    }

    componentWillUnmount(){
        
    }

    buscarAluno = () => {
        fetch("https://6971465278fec16a63007800.mockapi.io/alunos")
         .then(resposta => resposta.json())
         .then(dados => {
            this.setState({alunos : dados})
         });
    };

    deletarAluno = (id) => {
        fetch("https://6971465278fec16a63007800.mockapi.io/alunos/"+id, {method: 'DELETE'})
        .then(resposta => {
            if(resposta.ok){
                this.buscarAluno();
            }
        });
    }

    renderTabela() {
        return <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.alunos.map((aluno) => 
                        <tr>
                            <td>{aluno.nome}</td>
                            <td>{aluno.email}</td>
                            <td>Atualizar <Button variant="danger" onClick={() => this.deletarAluno(aluno.id)}>Excluir</Button></td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    }

    render() {
    return (
        <div>
            {this.renderTabela()}
        </div>
    );
 }
}

export default Alunos;