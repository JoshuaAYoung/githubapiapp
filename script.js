'use strict';

const githubUrl = "https://api.github.com/users/";
const repoText = "/repos";
let githubUser = "wrong";
let url = "";

function displayResults (responseJson) {
    $(".results").empty();
    for (let i = 0; i < responseJson.length; i++) {
        $(".results").append(
           `<h2>Repo ${i+1}:</h2>
           <p>Name: ${responseJson[i].name}</p>
           <p><a href=${responseJson[i].html_url} alt="${responseJson[i].name} repo link">${i+1} Link</a></p>`
        )
    }
}

function getRepos() {
    fetch(url)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson));
}

function getUser() {
    $('.form').on('submit', function(event){
        event.preventDefault();
        githubUser = $(this).find('input[name="handle"]').val();
        url = githubUrl + githubUser + repoText;
        getRepos();
})
}

$(function(){
    getUser();
})