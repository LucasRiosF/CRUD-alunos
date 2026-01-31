import api from "./api.js";

export async function buscarAlunos() {
    const response = await api.get("/alunos");
    return response.data;
}

export async function buscarAlunoPorID(id) {
    const response = await api.get(`/alunos/${id}`);
    return response.data;
}

export async function cadastrarAlunos(aluno) {
    const response = await api.post("/alunos", aluno)
    return response.data;
}

export async function atualizarAluno(aluno){
    const response = await api.put(`/alunos/${aluno.id}`, aluno)
    return response.data;
}

export async function deletarAlunos(id){
    await api.delete(`/alunos/${id}`);
    return true;
}