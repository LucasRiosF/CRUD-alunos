import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Menu from "../components/Navbar"
import "./home.css"

function Home() {
    return (
        <>
            <div>
                <Menu />

                <div className="home">
                    <section className="home-hero">
                        <h1>Sistema de Gestão de Alunos</h1>
                        <p>
                            Gerencie alunos de forma simples, rápida e organizada.
                        </p>
                    </section>

                    <section className="home-cards">

                        <div className="card">
                            <h3>Cadastro</h3>
                            <p>
                                Cadastre novos alunos de forma rápida e intuitiva.
                            </p>
                        </div>

                        <div className="card">
                            <h3>Edição</h3>
                            <p>
                                Edite informações de alunos já cadastrados com facilidade.
                            </p>
                        </div>

                        <div className="card">
                            <h3>Remoção</h3>
                            <p>
                                Remova alunos do sistema com confirmação de segurança.
                            </p>
                        </div>
                    </section>
                </div>
        </div >
        </>
    )
}

export default Home;