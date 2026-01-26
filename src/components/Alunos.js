import React from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";
import { buscarAlunos, atualizarAluno, deletarAlunos, cadastrarAlunos } from "../service/alunosService";
import { validarAluno } from "../utils/validarAluno";
import AlunosTabela from "./AlunosTable";
import AlunosModal from "./AlunosModal";
import "./alunos.css"

class Alunos extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            nome: '',
            email: '',
            alunos: [],
            modalAberto: false
        }
    }

    componentDidMount() {
        this.buscarAluno();
    }

    componentWillUnmount() {

    }

    buscarAluno = async () => {
        const alunos = await buscarAlunos();
        this.setState({ alunos });
    }

    deletarAluno = async (id) => {
        const resposta = await deletarAlunos(id);

        if (resposta) {
            this.buscarAluno();
        }
    }

    atualizarDados = (id) => {
        fetch("https://6971465278fec16a63007800.mockapi.io/alunos/" + id, { method: 'GET' })
            .then(resposta => resposta.json())
            .then(aluno => {
                this.setState({ id: aluno.id, nome: aluno.nome, email: aluno.email })
            });
        this.abrirModal();
    }

    cadastrarAluno = async (aluno) => {
        const resposta = await cadastrarAlunos(aluno)

        if (resposta) {
            this.buscarAluno()
        } else {
            alert("Não foi possivel adicionar o aluno");
        }
    }

    atualizarAluno = async (aluno) => {
        const resposta = await atualizarAluno(aluno);

        if (resposta) {
            this.buscarAluno()
        } else {
            alert("Não foi possivel atualizar os dados do aluno");
        }
    }

    atualizaNome = (e) => {
        this.setState(
            {
                nome: e.target.value
            }
        )
    }

    atualizaEmail = (e) => {
        this.setState(
            {
                email: e.target.value
            }
        )
    }

    submit = (e) => {
        e.preventDefault();

        const resultado = validarAluno(this.state.nome, this.state.email)
        if (!resultado.valido) {
            alert(resultado.mensagem);
            return;
        }

        if (this.state.id === 0) {
            const aluno = {
                nome: this.state.nome,
                email: this.state.email
            }

            this.cadastrarAluno(aluno);
        } else {
            const aluno = {
                id: this.state.id,
                nome: this.state.nome,
                email: this.state.email
            }

            this.atualizarAluno(aluno);
        }

        this.fecharModal();

    }

    reset = (e) => {
        e.preventDefault();

        this.setState(
            {
                id: 0,
                nome: '',
                email: ''
            }
        )

        this.abrirModal();
    }

    fecharModal = () => {
        this.setState({
            modalAberto: false
        });
    }

    abrirModal = () => {
        this.setState({
            modalAberto: true
        });
    }


    render() {
        return (
            <div className="alunos-container">

                <AlunosModal 
                show={this.state.modalAberto}
                hide={this.fecharModal}
                id={this.state.id}
                nome={this.state.nome}
                onChangeNome={this.atualizaNome}
                email={this.state.email}
                onChangeEmail={this.atualizaEmail}
                fechar={this.fecharModal}
                salvar={this.submit}
                novo={this.reset}
                />

                <AlunosTabela
                alunos={this.state.alunos}
                Atualizar={this.atualizarDados}
                Excluir={this.deletarAluno}
                />

            </div>
        );
    }
}

export default Alunos;