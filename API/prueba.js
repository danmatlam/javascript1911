// function suma(a,b){
//     let resultado = a+b
//     console.log(resultado)
 
// }
 
// suma(21,8);
// suma(22,8);
// suma(23,8);
// suma(24,8);
 
// function resta(a,b){
//     let resultado = a-b
//     console.log(resultado)
 
// }
// resta(21,8);
// resta(22,8);
// resta(22,8);
// resta(22,8);
 
// function multiplicacion(a,b){
//     let resultado = a*b
//     console.log(resultado)
 
// }
 
// multiplicacion(20,8);
// multiplicacion(21,8);
// multiplicacion(22,8);
// multiplicacion(23,8);
 
// function division(a,b){
//     let resultado = a/b
//     console.log(resultado)
 
// }
 
// division(20,8);
// division(21,8);
// division(22,8);
// division(23,8);


 
// function ivaInverso (Vt,t){
    
// const tax= (1+(t/100));
// let subtotal = Vt/ tax;
// let valorNeto = subtotal * tax
// let iva = valorNeto-subtotal
 
// console.log("subtotal: " +subtotal.toFixed(2))
// console.log("iva: " +iva.toFixed(2))
// console.log("valorNeto: " +valorNeto.toFixed(2))
 
// }
 
// ivaInverso(100,12)
 
function facturaNormal (st,t){
    
    const tax= (1+(t/100));
    let subtotal = st;
    let valorNeto = subtotal * tax
    let iva = valorNeto-subtotal
    
    
    console.log("subtotal: " +subtotal.toFixed(2))
    console.log("iva: " +iva.toFixed(2))
    console.log("valorNeto: " +valorNeto.toFixed(2))
}    

 
function costoUnitario (ct,q) {
    let costoUnitario = ct/q
    console.log("Costo unitario = " +costoUnitario.toFixed(2))
}costoUnitario(100,7)




