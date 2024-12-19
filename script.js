
const key = "9aafc808184614acfa015cc552270992"

function inserirDados(dados) {

    console.log(dados)
    document.querySelector('.regiao').innerHTML = "Tempo em " + dados.name
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector('.text-previsao').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = "Umidade : " + dados.main.humidity + "%" 
    document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    inserirDados(dados)
}

function cliqueinoBotao() {
    const cidade = document.querySelector('.input-cidade').value

    buscarCidade(cidade)
}