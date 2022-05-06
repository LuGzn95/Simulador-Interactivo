const edadDelUsuario = parseInt(prompt("¿Cuál es tu edad?"));
if(edadDelUsuario >= 18){
    let ingreso = prompt("Bienvenidos a Deliver Drink! Tenemos en stock 10 combos disponibles. Si desea ver nuestro catálogo ingrese 'Si/No'").toLowerCase();;
}else{
    alert("Eres menor de edad, podrás volver cuando cumplas 18 años.");
}

let misBebidas = []
let variedades = [
    {name: "Cerveza"},
    {name: "Fernet"},
    {name: "Vodka"},
    {name: "Gin"},
    {name: "Vino"},
]
let costo = 0
let reset;
let comoPaga;
let propina;
let direccion;

function propinaFunc(montoPropina) {
    propina = montoPropina;
    while (isNaN(propina) || propina == "") {
        propina = prompt("Ingrese un valor correcto expresado en números");
    }
    return costo += parseInt(propina);
}
function envio(dir) {
    return direccion = dir;
}

while (true) {
    let ingreso = prompt("Bienvenidos a Deliver Drink! Tenemos en stock una lista de 10 bebidas disponibles. Si desea ver nuestro catálogo ingrese 'Si/No'").toLowerCase();
    if (ingreso == "si") {
        while (reset != "no") {
            let compra = parseInt(prompt("Si desea agregar una de las opciones ingrese su número correspondiente\n1) Patagonia 24,7 (Lata 473cc) $230\n2) Vodka Absolut regular 750 $2670\n3) Gin Bombay $3800\n4) Alma Mora Malbec $500\n5) Combo 1:Fernet Branca 750 + 2 cocas 1,5 lt $1390\n6) Combo 2: 1 smirnoff grapefruit+ 4 redbull+ six pack andes rubia $2430\n7) Combo 3:Fernet 1882 + 2 cocas 1,5 lt $890\n8) Combo 4: 1 Fernet 1882 + 2 Cocas 1,5 lt + Six Pack Andes IPA $1780\n9) Combo 5: 1 Malibu + 4 Jugos Baggio Naranja 1 lt + 1 Campari 750 $3400\n10) Combo 6: 1 Espumante Novecento + 2 Redbull Tropical $690"))
            if (compra != "1" && compra != "2" && compra != "3" && compra != "4" && compra != "5" && compra != "6" && compra != "7" && compra != "8" && compra != "9" && compra != "10") {
                alert("Debe ingresar un valor correcto")
                continue
            }
            switch (compra) {
                case 1:
                    misBebidas.push(`Patagonia 24,7 (Lata 473cc)\n`)
                    costo += 1200
                    break;
                case 2:
                    misBebidas.push(`Vodka Absolut regular 750\n`)
                    costo += 2200
                    break;
                case 3:
                    misBebidas.push(`Gin Bombay\n`)
                    costo += 1150
                    break;
                case 4:
                    misBebidas.push(`Alma Mora Malbec\n`)
                    costo += 3300
                    break;
                case 5:
                    misBebidas.push(`Combo 1: Fernet Branca 750 + 2 cocas 1,5 lt\n`)
                    costo += 1500
                    break;
                case 6:
                    misBebidas.push(`Combo 2: 1 Smirnoff grapefruit+ 4 redbull+ six pack andes rubia\n`)
                    costo += 5200
                    break;
                case 7:
                    misBebidas.push(`Combo 3: Fernet 1882 + 2 cocas 1,5 lt\n`)
                    costo += 3400
                    break;
                case 8:
                    misBebidas.push(`Combo 4: 1 Fernet 1882 + 2 Cocas 1,5 lt + Six Pack Andes IPA\n`)
                    costo += 1700
                    break;
                case 9:
                    misBebidas.push(`Combo 5: 1 Malibu + 4 Jugos Baggio Naranja 1 lt + 1 Campari 750 \n`)
                    costo += 4200
                    break;
                case 10:
                    misBebidas.push(`Combo 6: 1 Espumante Novecento + 2 Redbull Tropical $690 \n`)
                    costo += 1000
                    break;
            }
            reset = prompt(`Su carrito incluye:\n${misBebidas.join("")}\nDesea seguir comprando? (Si/No)`)
            while (reset != "si" && reset != "no") {
                reset = prompt(`Desea seguir comprando?\nDebe ingresar Si/No`)
            }
        }        
        while (true) {
            comoPaga = prompt(`Su compra final es de:\n${misBebidas.join("")}\nPrecio final credito $${costo}\nPrecio final en efectivo -10% $${costo - costo * 0.1}\nCómo desea abonar?`).toLowerCase()
            switch (comoPaga) {
                case "credito":
                    alert(`Su ticket final es de $${costo}`)
                    propinaFunc(prompt("Ingrese propina para el cadete"))
                    envio(prompt("Ingrese su dirección para el envío"))
                    alert(`Información de su pedido:\nProductos:\n${misBebidas.join("")}\nMonto final más propina: $${costo}\nDirección de envío: ${direccion}\nTiempo estimado de demora: 1 hora\n\n¡¡¡Gracias por su compra. Beba con moderación!!!`)
                    break
                case "efectivo":
                    alert(`Su ticket final es de $${costo - costo * 0.1}`)
                    propinaFunc(parseInt(prompt("Ingrese propina para el cadete")))
                    envio(prompt("Ingrese su dirección para el envío"))
                    alert(`Información de su pedido:\nProductos:\n${misBebidas.join("")}\nMonto final más propina: $${costo}\nDirección de envío: ${direccion}\nTiempo estimado de demora: 1 hora \n\n¡¡¡Gracias por su compra. Beba con moderación!!!`)
                    break
                default:
                    alert("Debe ingresar una opción correcta")
                    continue
            } break
        }
        break
    } else if (ingreso == "no") {
        alert("Gracias por visitarnos. Le dejamos nuestro teléfono de contacto por si se arrepiente. Hasta pronto!")
        break
    } else {
        alert("La respuesta debe ser Si/No")
    }
}
console.log(misBebidas)

const respuesta = prompt("Antes de irse, ¿desea buscar en nuestra tienda alguna bebida que no esté en la lista? (Si/No)")

if (respuesta == "si") {
    const variedades = prompt("¿Qué bebida desea buscar?")
    resp = variedades.find(x => x.name == variedades);    
    if (resp != undefined) {
        alert(`La bebida${resp.name} se encuentra en stock`)
    } else {
        alert(`Por el momento, la opción ingresada no se encuentra en stock`)
    }
}

