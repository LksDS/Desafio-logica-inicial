

let nome = "Lucas"
let experience = 6001
let rank = "na"

if(experience<0){
    console.log("O nível de experiência não pode ser negativo")
}else{
    if(experience > 10000){
        rank = "Radiante"
    }else if(experience > 9000){
        rank = "Imortal"
    }else if(experience > 8000){
        rank = "Ascendente"
    }else if(experience > 7000){
        rank = "Platina"
    }
    else if(experience > 6000){
        rank = "Ouro"
    }
    else if(experience > 2000){
        rank = "Prata"
    }
    else if(experience > 1000){
        rank = "Bronze"
    }else{
        rank = "Ferro"
    }
        console.log("O Herói de nome",nome,"está no nível de",rank)
}