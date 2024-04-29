document.querySelector('#btnSenha').addEventListener('click', () => {
    // recuper o elemento HTML que receberá a senha 
    getSenha = document.querySelector('#senha')
    const caracteres = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "X", "Y", "Z", "!", "@", "#", "$", "%", "&", "*", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    let novasenha = '';
    for (let i = 0; i <= 31; i++) {
        let numero = Math.ceil(Math.random() * 66)


        novasenha += caracteres[numero]
    }
    getSenha.textContent = novasenha
});
document.querySelector('#btnCopia').addEventListener('click', () => {
        const senha = document.querySelector('#senha').textContent;

    if(senha.length==0){
        alert('You need to generate a password first')
    }
    else{
   if (navigator.clipboard) {
       navigator.clipboard.writeText(senha).then(() => {
           alert('Password copied successfully')

       });
   }
    }

 
})
