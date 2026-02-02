import React from "react";
import { Table, Button } from "react-bootstrap";
import "../pages/alunos.css"

function AlunosTabela({ alunos, Atualizar, Excluir }) {
    return (
        <Table striped bordered hover className="alunos-table shadow-sm">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th className="opcoes">Opções</th>
                </tr>
            </thead>
            <tbody>
                {alunos.map((aluno) =>
                        <tr key={aluno.id}>
                            <td>{aluno.nome}</td>
                            <td>{aluno.email}</td>
                            <td>
                                <Button variant="secondary" onClick={() => Atualizar(aluno.id)}>Atualizar</Button>
                                <Button variant="danger" onClick={() => Excluir(aluno.id)}>Excluir</Button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    );
}

export default AlunosTabela;