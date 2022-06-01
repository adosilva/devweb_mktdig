let data_hora = new Date()
let hora = data_hora.getHours()
let previsao_tempo = "chuvoso"

if (hora < 12){
    console.log("Bom dia...");
    if(previsao_tempo == "chuvoso")
    {
        console.log("Está chovendo, leve o guarda-chuva")
    }
}
else {
    if(hora >= 12 && hora < 18)
    {
        console.log("Boa Tarde...");
    }
    else{
        console.log("Boa noite...");
        if(previsao_tempo == "chuvoso")
        {
            console.log("Está chovendo, leve o guarda-chuva!!")
        }
    }
}
