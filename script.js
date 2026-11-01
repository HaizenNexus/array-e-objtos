/* let obj = {
    nome: "Pedro",
    profissao: "Programador",
    idade: 16, 
    graduacao: "ensino medio",
}

console.log(obj.nome);



let arr = [3, "Pedro", 123, "Alto da Maravilha", "Texto", true, false,]


console.log(arr[1]);

obj.nome = "EVelin"

console.log(obj.nome);

arr[1] = "Evellin";

console.log(arr[1]);

obj.teste = "Money";

console.log(obj); */


function clique() {
    let arr = document.getElementById('arrw').value;
    if (arr == "Pedro") {
        console.log('Olá Pedro seja Bem - vindo!')
    } else {
        console.log('Eu sei lá quem é tu')
    }
   
}