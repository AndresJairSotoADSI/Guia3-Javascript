cantidadVehi=Number(parse("Cantidad de autos que entraron ala ciudad "));
let cont=1;
while ((cont <=cantidadVehi)) {
    placa = Number(prompt("Digite el ultimo digito de placa"));
    if (((placa === 1) || (placa === 2))) {
        alert("Su color es amarilla");
    } else {
        if (((placa === 3) || (placa === 4))) {
            alert("Su color es rosado");
        } else {
            if (((placa === 5) || (placa === 6))) {
                alert("Su color es rojo");
            } else {
                if (((placa === 7) || (placa === 8))) {
                    alert("Su color es verde");
                } else {
                    if (((placa === 9) || (placa === 0))) {
                        alert("Su color es azul");
                    } else {
                        alert("Vuelva a digitar los codigos:");
                    }
                }
            }
        }
    }
}
