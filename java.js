var nome = window.prompt('nome do aluno: ');
var nota1 = Number(window.prompt('primeira nota: '))
var nota2 = Number(window.prompt('segunda nota: '))
var nota3 = Number(window.prompt('terceira nota'))

var media = ((nota1 + nota2 + nota3)/3)//questão 5

if(media >= 8){
    window.alert (`você foi aprovado, sua media é:  ${media}`)
} else{
    window.alert(`você foi reprovado, sua media é:  ${media}`)
}


var num1 =parseInt(window.prompt('coloque um numero: '))
var num2 =parseInt(window.prompt('coloque outro numero: '))
var cod = parseInt(window.prompt('digite 1 (pra soma), 2 (pra multiplicação) ou 3(para divisão): ')) // questão 6


if(cod ==1 ){
    document.write( 'soma: ', num1 + num2)
} else if (cod == 2){
    document.write(' multiplicação: ', num1 * num2)
} else if(cod == 3) {
    document.write(' divisão:', num1/num2)
} else {
    document.write (`tente novamente`)
}

 switch (cod) {
    case (cod == 1):
        document.write( 'soma: ', num1 + num2);
        break;
    case (cod == 2):
        document.write(' multiplicação: ', num1 * num2);
        break;
    case (cod == 3) :
        document.write(' divisão:', num1/num2)
        break;
 }
