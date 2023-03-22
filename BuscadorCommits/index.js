const form = document.querySelector("form")
form.addEventListener('submit', function (event) {
    event.preventDefault()
    const repositorio = document.querySelector("#repositorio").value
    const dataInicial = document.querySelector("#dataInicial").value
    const dataFinal = document.querySelector("#dataFinal").value
    buscarCommits(repositorio, dataInicial, dataFinal)

})

function buscarCommits(repositorio, dataInicial, dataFinal) {
    const token = "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"
    const options = {
        headers: {
            Authorization: `Token ${token}`
        }
    }
    const url = `https://api.github.com/repos/${repositorio}/commits?since=${dataInicial}&until=${dataFinal}`
    fetch(url, options).then(response => response.json()).then(commits => {
        contarCommits(commits)
    })
}



function contarCommits(commits) {
    const commitsPorDia = {}
    commits.forEach(element => {
        const dataCommit = element.commit.author.date.substr(0, 10)
        if (commitsPorDia[dataCommit]) {
            commitsPorDia[dataCommit].quantidade++
        } else {
            commitsPorDia[dataCommit] = { quantidade: 1, data: dataCommit }
        }
    })
    console.log(commitsPorDia)

    const commitsPorDiaArray = Object.keys(commitsPorDia).map(dataCommit => {
        return { data: dataCommit, quantidade: commitsPorDia[dataCommit].quantidade }
    })

    displayCommits(commitsPorDiaArray)
    //mostrarTela(commitsPorDiaArray)
}

function displayCommits(commits) {
    let table = '<table border="1">';
    table += `<tr><th>Data</th><th>Quantidade</th></tr>`;
    commits.forEach((commit, index) => {
        table = table + `<tr>`;
        table = table + `<td>${commit.data}</td>`;
        table = table + `<td>${commit.quantidade}</td>`;
        table += `</tr>`;
    });
    table += "</table>";
    document.getElementById("commits-table").innerHTML = table;
}



/*
function mostrarTela(commits) {
    const dados = document.querySelector("#dados")
    commits.forEach(element => {
        const h1 = document.createElement("h1")
        h1.innerHTML = element.data + " - " + element.quantidade
        dados.appendChild(h1)
    })
}
*/