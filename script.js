function informar(){
    let n = document.getElementById("emergency-select").value;
    switch(n){
        case "null":
            alert("Selecione uma opção válida.");
            break;
        case "bomb":
            alert("Ligue para o Corpo de Bombeiros: 193");
            break;
        case "pm":
            alert("Ligue para a Polícia Militar: 190");
            break;
        case "samu":
            alert("Ligue para o SAMU: 192");
            break;
        case "civil":
            alert("Ligue para a Polícia Civil: 197");
            break;
        case "dfcivil":
            alert("Ligue para a Defesa Civil: 199");
            break;
        case "prf":
            alert("Ligue para a Polícia Rodoviária Federal: 198");
            break;
        case "deat":
            alert("Ligue para a Delegacia do Turismo: 196");
            break;
        case "denuncia":
            alert("Ligue para o Disque Denúncia: 181");
            break;
        case "mulher":
            alert("Ligue para a Central de Atendimento a Mulher: 180");
            break;
        case "dh":
            alert("Ligue para os Direitos Humanos: 182");
            break;
        case "procon":
            alert("Ligue para o Procon: 183");
            break;
        case "hemorio":
            alert("Ligue para o Hemorio: 184");
            break;
        case "detran":
            alert("Ligue para o Detran: 185");
            break;
        case "ambiente":
            alert("Ligue para o Disque Ambiente: 186");
            break;
    }
}