import React from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";
import { buscarAlunos, atualizarAluno, deletarAlunos, cadastrarAlunos } from "../service/alunosService";
import { validarAluno } from "../utils/validarAluno";

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
                        <tr key={aluno.id}>
                            <td>{aluno.nome}</td>
                            <td>{aluno.email}</td>
                            <td>
                                <Button variant="secondary" onClick={() => this.atualizarDados(aluno.id)}>Atualizar</Button>
                                <Button variant="danger" onClick={() => this.deletarAluno(aluno.id)}>Excluir</Button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
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
            <div>

                <Modal show={this.state.modalAberto} onHide={this.fecharModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Dados do aluno</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>ID</Form.Label>
                                <Form.Control type="text" value={this.state.id} readOnly={true} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="Digite o nome do aluno" value={this.state.nome} onChange={this.atualizaNome} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Digite o email do aluno" value={this.state.email} onChange={this.atualizaEmail} />
                                <Form.Text className="text-muted">
                                    Utilize o melhor e-mail do aluno.
                                </Form.Text>

                            </Form.Group>
                        </Form>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.fecharModal}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" onClick={this.submit}>
                            Salvar
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Button variant="warning" type="button" onClick={this.reset}>
                    Novo
                </Button>

                {this.renderTabela()}
            </div>
        );
    }
}

export default Alunos;