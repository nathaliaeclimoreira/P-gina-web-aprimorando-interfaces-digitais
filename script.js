const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;
    botao.addEventListener("click", botaoClicado);
    function botaoClicado() {
        console.log("fui clicado");
        let texto = botao.querySelector("span");
        if (curtiu === false){
            texto.textContent++;
            curtiu = true;
        } else{
            texto.textContent--;
            curtiu = false;
        }
    }
})

const botaoAlternar = document.getElementById('toggleTheme');

botaoAlternar.addEventListener('click', () => {
    document.body.classList.toggle('tema-escuro');
    
    if (document.body.classList.contains('tema-escuro')) {
        botaoAlternar.textContent = 'Modo Claro';
    } else {
        botaoAlternar.textContent = 'Modo Escuro';
    }
});
