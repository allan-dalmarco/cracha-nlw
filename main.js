// Funções
function showMeSomething(texto) {
  alert(texto);
}

function changeSocialMediaLinks(newValue) {
  //   document.getElementById('userName').textContent = newValue;
  //   userName.textContent = "fixed Value";
  //   userName.textContent = newValue
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");
    // alert(social);
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`; // template string

    // showMeSomething(li.children[0].href);
  }
}

// variáveis: let ou const

// variável simples
let accept = true;

// variável estruturada = objeto
let user = {
  name: "Allan Dalmarco",
  phone: 123456789,
};

const linksSocialMedia = {
  github: "allan-dalmarco",
  youtube: "allan-dalmarco",
  facebook: "allan.dalmarco",
  instagram: "allan.dalmarco",
  twitter: "allan.dalmarco",
};

// showMeSomething(linksSocialMedia.github);

changeSocialMediaLinks("Bernardo");

function getGitHubProfileInfos() {
    // const url = "https://api.github.com/users/allan-dalmarco"
    // const url = `https://api.github.com/users/${linksSocialMedia.github}`
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    // showMeSomething(url)

    // Promise - promessa de pegar algum recurso
    // Arrow Function - função anônima
    // argumento => {} 
    // () => {}
    // (parametro1, parametro2) => {}
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // document.getElementById('userName').textContent = data.name
        // pode ser acessado diretamente pelo ID do elemento HTML
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGitHubProfileInfos();