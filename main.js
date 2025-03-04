document.addEventListener('DOMContentLoaded', function(){
    const nomeGithub = document.getElementById('name');
    const usuarioGithub = document.getElementById('user');
    const imagemPerfil = document.getElementById('profilePic')
    const repositorioGithub = document.getElementById('repositorios');
    const seguidoresGithub = document.getElementById('seguidores');
    const seguindoGithub = document.getElementById('seguindo');
    const linkGithub = document.getElementById('linkgit');





    fetch('https://api.github.com/users/GeorgeBrookss')
        .then(function(respostas){
            return respostas.json();
        })
        .then(function(json){
            nomeGithub.innerText = json.name;
            usuarioGithub.innerText = json.login;
            imagemPerfil.src = json.avatar_url;
            repositorioGithub.innerText = json.public_repos;
            seguidoresGithub.innerText = json.followers;
            seguindoGithub.innerText = json.following;
            linkGithub.href = json.html_url;
        })
})