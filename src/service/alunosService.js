const API_URL = "https://6971465278fec16a63007800.mockapi.io/alunos";

export async function buscarAlunos() {
    const response = await fetch(API_URL);
    const dados = await response.json();
    return dados;
}

export async function cadastrarAlunos(aluno) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(aluno),
    });
    return response.ok;
}

export async function atualizarAluno(aluno){
    const response = await fetch(`${API_URL}/${aluno.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(aluno),
    })
    return response.ok;
}

export async function deletarAlunos(id){
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });
    return response.ok;
}