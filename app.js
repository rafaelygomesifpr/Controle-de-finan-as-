let salario = Number(localStorage.getItem("salario")) || 0;
let despesas = JSON.parse(localStorage.getItem("despesas")) || [];

document.addEventListener("DOMContentLoaded", function() {
    atualizarTela();
});

function salvarSalario() {
    let valor = document.getElementById("salario").value;

    if (valor === "") {
        alert("Digite um salário válido!");
        return;
    }

    salario = Number(valor);
    localStorage.setItem("salario", salario);
    atualizarTela();
}
function apagartudo(){
     despesas.forEach((d, i) => {
         tabela.innerHTML += `
     }
    
}

function adicionarDespesa() {
    let data = document.getElementById("data").value;
    let nome = document.getElementById("nome").value;
    let valor = document.getElementById("valor").value;

    if (data === "" || nome === "" || valor === "") {
        alert("Preencha todos os campos!");
        return;
    }

    despesas.push({ data, nome, valor: Number(valor) });

    localStorage.setItem("despesas", JSON.stringify(despesas));

    atualizarTela();
}

function excluirDespesa(indice) {
    despesas.splice(indice, 1);
    localStorage.setItem("despesas", JSON.stringify(despesas));
    atualizarTela();
}

function atualizarTela() {
    document.getElementById("ressalario").innerText = salario;

    let totalDespesas = despesas.reduce((soma, d) => soma + d.valor, 0);
    document.getElementById("restotal").innerText = totalDespesas;

    document.getElementById("ressaldo").innerText = salario - totalDespesas;

    let tabela = document.getElementById("tabeladespesas");
    tabela.innerHTML = "";

    despesas.forEach((d, i) => {
        tabela.innerHTML += `
            <tr>
                <td>${d.data}</td>
                <td>${d.nome}</td>
                <td>R$ ${d.valor}</td>
                <td><button onclick="excluirDespesa(${i})">Excluir</button></td>
            </tr>
        `;
    });
}





