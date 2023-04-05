const form = document.querySelector("form")
form.addEventListener('submit', function (event) {
    event.preventDefault()
    const repositorio = document.querySelector("#repositorio").value
    const dataInicial = document.querySelector("#dataInicial").value
    const dataFinal = document.querySelector("#dataFinal").value
    

    buscarCommits(repositorio, dataInicial, dataFinal)
})

function buscarCommits(repositorio, dataInicial, dataFinal) {
    let repoAutor = '';
    let repoNome = '';

    if (repositorio.startsWith("https://github.com/")) {
        repositorio = repositorio.slice(19);
    }
    const options = {
        headers: {}
    }

    const token = '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';
    options.headers['Authorization'] = `Bearer ${token}`;

    const url = `https://api.github.com/repos/${repositorio}/commits?since=${dataInicial}&until=${dataFinal}`
    fetch(url).then(response => response.json()).then(commits => {
        contarCommits(commits)
        displayCommitMessages(commits, repositorio )
    })

    const repoUrl = `https://api.github.com/repos/${repositorio}`
    fetch(repoUrl).then(response => response.json()).then(repo => {
        displayRepoInfo(repo)
    }).catch(error => {
        console.log(error)
        document.getElementById("repo-info").innerHTML = "Ocorreu um erro ao buscar as informações do repositório."
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
        table = table + `<td>${commit.data.replace(/-/g, '/')}</td>`;
        table = table + `<td>${commit.quantidade}</td>`;
        table += `</tr>`;
    });
    table += "</table>";
    document.getElementById("commits-table").innerHTML = table;
}

function displayRepoInfo(repo) {
    const info = `Estrelas ${repo.stargazers_count}, Forks: ${repo.forks_count}`
    document.getElementById("repo-info").innerHTML = info;
}

function displayCommitMessages(commits, repositorio) {
    let table = '<table border="1">';
    table += `<tr><th>Autor</th><th>Repositório</th><th>Data</th><th>Quantidade</th><th>Mensagem</th></tr>`;

    let prevDate = null;
    let count = 0;

    commits.forEach((commit, index) => {
        const dataCommit = commit.commit.author.date.substr(0, 10).replace(/-/g, '/');
        const repoName = repositorio.split("/").pop();

        if (prevDate !== null && prevDate !== dataCommit) {
            table = table + `<tr><td colspan="3"></td><td>${count}</td><td></td></tr>`;
            count = 0;
        }


        table = table + `<tr>`;
        table = table + `<td>${commit.commit.author.name}</td>`;
        table = table + `<td>${repoName}</td>`;
        table = table + `<td>${dataCommit}</td>`;
        table = table + `<td></td>`;
        table = table + `<td>${commit.commit.message}</td>`;
        table += `</tr>`;

        prevDate = dataCommit;
        count++;
    });

    if (prevDate !== null) {
        table = table + `<tr><td colspan="3"></td><td>${count}</td><td></td></tr>`;
    }

    table += "</table>";
    document.getElementById("commits-messages").innerHTML = table;
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
