let participantes = [
    {
        nome: "José Vitor",
        email: "zevitor@gmail.com",
        dataInscricao: new Date(2024, 2, 22, 19, 20),
        dataCheckIn: new Date(2024, 2, 25, 22, 0)
    },
    {
        nome: "Yuri Fernandes",
        email: "yuri@gmail.com",
        dataInscricao: new Date(2024, 2, 23, 19, 23),
        dataCheckIn: new Date(2024, 2, 25, 20, 20)
    },
    {
        nome: "Pedro Neto",
        email: "pedroneto@gmail.com",
        dataInscricao: new Date(2024, 0, 3, 19, 23),
        dataCheckIn: new Date(2024, 0, 4, 20, 20)
    },
    {
        nome: "Leticia Vitor",
        email: "leticia@gmail.com",
        dataInscricao: new Date(2023, 11, 4, 19, 23),
        dataCheckIn: new Date(2023, 11, 5, 20, 20)
    },
    {
        nome: "Nascimento Cardoso",
        email: "nascimento@gmail.com",
        dataInscricao: new Date(2023, 10, 5, 19, 23),
        dataCheckIn: null
    },
    {
        nome: "Carolina Lacerda",
        email: "carolina@gmail.com",
        dataInscricao: new Date(2023, 9, 6, 19, 23),
        dataCheckIn: new Date(2023, 9, 7, 20, 20)
    },
    {
        nome: "Luis Araujo",
        email: "luis@gmail.com",
        dataInscricao: new Date(2023, 8, 7, 19, 23),
        dataCheckIn: new Date(2023, 8, 8, 20, 20)
    },
    {
        nome: "Eloah Marjorie",
        email: "eloah@gmail.com",
        dataInscricao: new Date(2023, 6, 9, 19, 23),
        dataCheckIn: null
    },
    {
        nome: "Lucas Couto",
        email: "lucas@gmail.com",
        dataInscricao: new Date(2023, 7, 8, 19, 23),
        dataCheckIn: null
    },

    {
        nome: "Gabriel Ferreira",
        email: "ferreira@gmail.com",
        dataInscricao: new Date(2023, 5, 10, 19, 23),
        dataCheckIn: new Date(2023, 5, 11, 20, 20)
    }
]


const criarNovoParticipante = (participante) => {
    const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao);
    let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn);

    if (participante.dataCheckIn == null) {
        dataCheckIn = `
        <button 
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)">
        Confirmar check-in
        </button>
        `
    }

    return ` 
            <tr>
            <td>
                <strong>
                    ${participante.nome}
                </strong>
                <br>
                <small>
                ${participante.email}
              </small>
            </td>
            <td> ${dataInscricao}</td>
            <td>  ${dataCheckIn}</td>
            </tr>
`
}

const atualizarLista = (participantes) => {
    let output = ""

    for (let participante of participantes) {
        output = output + criarNovoParticipante(participante);
    }

    document.querySelector("tbody").innerHTML = output;
}

atualizarLista(participantes);

const adicionarParticipante = (event) => {
    event.preventDefault();
    const dadosDoFormulario = new FormData(event.target);

    const participante = {
        nome: dadosDoFormulario.get("nome"),
        email: dadosDoFormulario.get("email"),
        dataInscricao: new Date(),
        dataCheckIn: null
    }

    const participanteExiste = participantes.find(
        (p) => p.email == participante.email
    )

    if (participanteExiste) {
        alert("E-mail já cadastrado!");
        return;
    }

    participantes = [participante, ...participantes];
    atualizarLista(participantes);

    event.target.querySelector('[name="nome"]').value = "";
    event.target.querySelector('[name="email"]').value = "";
}

const fazerCheckIn = (event) => {

    const mensagemConfirmacao = "Tem certeza que deseja fazer o check-in?"
    if (confirm(mensagemConfirmacao) == false) {
        return
    }

    const participante = participantes.find(
        (p) => p.email == event.target.dataset.email
    )
    participante.dataCheckIn = new Date();

    atualizarLista(participantes);
}



















// nova maneira de criar uma function
//const atualizarLista = () => {
//    alert("Hello World")
//}