export function validarAluno(nome, email){
    if (!nome || nome.trim() === "") {
            return {
                valido: false,
                mensagem: "Preencha o nome!"
            };
        }

        if (!email || email.trim() === "") {
            return{
                valido: false,
                mensagem: "Preencha o email!"
            }
        }

        if (!email.includes("@") || !email.includes(".")) {
            return{
                valido: false,
                mensagem: "Email inválido!"
            }
        }

        return {
            valido: true
        }
}