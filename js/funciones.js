
let comida = prompt("Usted quiere \na)Desayunar $500 +IVA \nb)Almorzar $900 +IVA o \nc)Cenar $800 +IVA? \nSeleccione a - b - c")
let precio = parseInt(prompt("Cuántas personas son en su mesa?: 1 - 2 - 3"))

let costo;
function costoinicial (a,b){
    return costo = a*b
}

let IVA;
function suma(c,d){
    return IVA = (c*d)/100
}
let valorTotal;
function total(e,f) {
    return valorTotal = e+f
}


if (comida == "a"){
    switch(precio) {
        case 1:
        costoinicial (500 , 1);
        suma (500 , 21);
        total (costo , IVA);
        alert("Su desayuno individual costará $" + valorTotal);
        break;

        case 2:
            costoinicial (500 , 2);
            suma (500 , 21);
            total (costo , IVA);
            alert("Su desayuno para 2 costará $" + valorTotal + "\nCada persona abonará $" + (valorTotal /2));
            break;
        case 3:
            costoinicial (500 , 3);
            suma (500 , 21);
            total (costo , IVA);
            alert("Su desayuno para 3 costará $" + valorTotal + "\nCada persona abonará $" + (valorTotal /3));
            break;
    }
} else if (comida == "b"){
    switch(precio){
    case 1:
        costoinicial (900 , 1);
        suma (900 , 21);
        total (costo , IVA);
        alert("Su almuerzo individual costará $" + valorTotal);
        break; 
    case 2:
        costoinicial (900 , 2);
        suma (900 , 21);
        total (costo , IVA);
        alert("Su almuerzo para 2 costará $" + valorTotal + "\nCada persona abonará $" + (valorTotal /2));
        break;
    case 3:
        costoinicial (900 , 3);
        suma (900 , 21);
        total (costo , IVA);
        alert("Su almuerzo para 3 costará $" + valorTotal + "\nCada persona abonará $" + (valorTotal /3));
        break;
}
}else if(comida == "c"){
    switch(precio) {
        case 1:
            costoinicial (800 , 1);
            suma (800 , 21);
            total (costo , IVA);
            alert("Su cena individual costará $" + valorTotal);
            break;

        case 2: 
        costoinicial (800 , 2);
        suma (800 , 21);
        total (costo , IVA);
        alert("Su cena para 2 costará $" + valorTotal + "\nCada persona abonará $" + (valorTotal /2));
        break;

        case 3: 
        costoinicial (800 , 3);
        suma (800 , 21);
        total (costo , IVA);
        alert("Su cena para 3 costará $" + valorTotal + "\nCada persona abonará $" + (valorTotal /3));
        break;
    }
} else{
    alert("Por favor, ingrese una opción adecuada")
}

let condicion = true;
let tarjeta;
let codigo;

while (condicion) {    
 valorTotal = prompt("seleccione su método de pago: \na) Efectivo \nb) Tarjeta ")
 if (valorTotal == "a"){
     let cambio = prompt("Necesita cambio? Diga 'si' o 'no'")
     if(cambio != "no"){
         cambio = prompt("De cuánto?")
         alert("Gracias por su compra!")
     }else{
         alert("Gracias por su compra!")
     }
     break;
 } else if (valorTotal == "b"){
    tarjeta = prompt("Ingrese su numero de tarjeta")
    codigo = prompt("Ingrese el codigo de su tarjeta")
    alert("Gracias por su compra!")
    break;
 } else{
     alert("Ingrese un valor correcto")
 }

}