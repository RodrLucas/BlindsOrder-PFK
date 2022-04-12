const btn = document.getElementById("btn")


function calculaM2(){
    const valorMetroQuadrado = document.getElementById("valorM2").value
    const valorInstalacao = document.getElementById("valorInst").value
    const valorBando = document.getElementById("valorBand").value
    const larg = document.getElementById("larg").value
    const alt = document.getElementById("alt").value
    const porcentagem = document.getElementById("porcentagem").value
    const resultado = document.getElementById("result")

    let m2 = larg * alt;

    if(m2 < 1.5){
        m2 = 1.5
        //Precisei declarar o tipo da variável para ter certeza que era tipo number 
        const result = Number(m2) * Number(valorMetroQuadrado) + Number(valorInstalacao) + Number(valorBando)
        if(!porcentagem > 0) {
            return resultado.innerHTML = Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL' }).format(result);
        }else {
            const percentValue = (result / 100) * porcentagem
            const finalValueWithPercent = result + percentValue
            resultado.innerHTML = Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL' }).format(finalValueWithPercent);
        }
    }else{
        const result = Number(m2) * Number(valorMetroQuadrado) + Number(valorInstalacao) + Number(valorBando)
        if(!porcentagem > 0) {
            return resultado.innerHTML = Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL' }).format(result);
        }else {
            const percentValue = (result / 100) * porcentagem
            const finalValueWithPercent = result + percentValue
            resultado.innerHTML = Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL' }).format(finalValueWithPercent);
        }
    }
}


btn.addEventListener("click", calculaM2)
