function converter() {
    let moedaOrigem = document.getElementById("fromCurrency").value;
    let moedaDestino = document.getElementById("toCurrency").value;
    let valor = document.getElementById("amount").value;
    switch (moedaOrigem) {
        case "USD":
            if (moedaDestino === "BRL") {
                document.getElementById("result").innerHTML = "USD para BRL: " + (valor * 5.25).toFixed(2) + " BRL";
            } else if (moedaDestino === "EUR") {
                document.getElementById("result").innerHTML = "USD para EUR: " + (valor * 0.85).toFixed(2) + " EUR";
            } else {
                document.getElementById("result").innerHTML = "USD: " + valor + " USD";
            }
            break;
        case "BRL":
            if (moedaDestino === "USD") {
                document.getElementById("result").innerHTML = "BRL para USD: " + (valor / 5.10).toFixed(2) + " USD";
            } else if (moedaDestino === "EUR") {
                document.getElementById("result").innerHTML = "BRL para EUR: " + (valor / 5.91).toFixed(2) + " EUR";
            } else {
                document.getElementById("result").innerHTML = "BRL: " + valor + " BRL";
            }
            break;
        case "EUR":
            if (moedaDestino === "USD") {
                document.getElementById("result").innerHTML = "EUR para USD: " + (valor * 1.18).toFixed(2) + " USD";
            } else if (moedaDestino === "BRL") {
                document.getElementById("result").innerHTML = "EUR para BRL: " + (valor * 5.91).toFixed(2) + " BRL";
            } else {
                document.getElementById("result").innerHTML = "EUR: " + valor + " EUR";
            }
            break;
    }

}