let vehiculos = Number(prompt("Ingrese La cantidad de vehivulos"))
let cont=1;
let autobus=0;
let camion=0;
let motocicleta=0;
let turismo=0;
let pasajeros=0;
while(vehiculos>=cont){
    let vehiculo= prompt("Ingrese el tipo de vehiculo");
    if (vehiculo=="autobus"){
        autobus++;
    } else if (vehiculo=="camion"){
        camion++;
    } else if (vehiculo=='motocicleta'){
        motocicleta++;
    } else if (vehiculo='turismo'){
        pasajeros+=Number(prompt("Cantidad de turistas en el vehiculo: "));
        turismo++;
    }
    cont++;
}
alert("La cantidad de autobuses son"+autobus);
alert("La cantidad de camion son:"+camion);
alert("La cantidad de motocicleta son:"+motocicleta);
alert("La cantidad de turistas son: "+turismo+ "y sus pasajeros totales son "+pasajeros);