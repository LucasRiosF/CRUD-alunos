import React from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";
import "../pages/alunos.css"

function AlunosModal({ show, hide, id, nome, email, onChangeEmail, onChangeNome, fechar, salvar, novo}) {
    return (
        <div>
            <Button variant="warning" type="button" onClick={novo} className="botaoModal">
                 + Novo Aluno
            </Button>

            <Modal show={show} onHide={hide} className="modal-header">
                <Modal.Header closeButton>
                    <Modal.Title className="modal-title">Dados do aluno</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="text" value={id} readOnly={true} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Digite o nome do aluno" value={nome} onChange={onChangeNome} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Digite o email do aluno" value={email} onChange={onChangeEmail} />
                            <Form.Text className="text-muted">
                                Utilize o melhor e-mail do aluno.
                            </Form.Text>

                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <Button variant="secondary" onClick={fechar}>
                        Cancelar
                    </Button>
                    <Button variant="primary" type="submit" onClick={salvar}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
}

export default AlunosModal;