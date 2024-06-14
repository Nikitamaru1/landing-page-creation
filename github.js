// function fetchHtml() {
//     fetch('https://api.github.com/users/Nikitamaru1')
//     .then((response) => {
//       return response.text();
      
//     })
//     .then((html) => {
//       document.body.innerHTML = html 
//       console.log(html)    
//     });
//   }
let githubDataHTML = document.querySelector(".githubData1");
let githubData = [];

const addDataToHTML = () => {
    githubDataHTML.innerHTML = "";
    if(githubData.length > 0){
        githubData.forEach(data => {
            let newData = document.createElement("div");
            newData.classList.add("card")
            newData.dataset.id = data.id;
            newData.innerHTML = `
            <h2>${(data.login)}</h2>`;
            githubDataHTML.appendChild(newData);
        })
    }
}


const initApp = () => {
    //get data from json
    fetch('github.json')
    .then(response => response.json())
    .then(data => {
        githubData = data;
        console.log(githubData)
        addDataToHTML();
        })
}
initApp();