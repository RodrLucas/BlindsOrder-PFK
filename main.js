const btn = document.getElementById("btn")


function calculaM2(){
    const valorMetroQuadrado = document.getElementById("valorM2").value
    const valorInstalacao = document.getElementById("valorInst").value
    const larg = document.getElementById("larg").value
    const alt = document.getElementById("alt").value
    const porcentagem = document.getElementById("porcentagem").value
    const resultado = document.getElementById("result")

    const m2 = larg * alt;

    //Precisei declarar o tipo da variável para ter certeza que era tipo number 
    const result = Number(m2) * Number(valorMetroQuadrado) + Number(valorInstalacao)
    if(!porcentagem > 0) {
        return resultado.innerHTML = Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL' }).format(result);
    }else {
        const percentValue = (result / 100) * porcentagem
        const finalValueWithPercent = result + percentValue
        resultado.innerHTML = Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL' }).format(finalValueWithPercent);
    }


}


btn.addEventListener("click", calculaM2)
