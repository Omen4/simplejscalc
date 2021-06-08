let histoire ='';
let mem = '';  
let input = '';
let operant = '';
let isVirguled = false;

function render(){
    document.getElementById('input').innerHTML=input;
    document.getElementById('operation').innerHTML=operant;
    document.getElementById('historique').innerHTML=histoire;
}

function getResultatCalcul(){
    switch (operant){
        case '+':
            return (Number(input) + Number(mem)).toString();
        case '-':
            return (Number(mem) - Number(input)).toString();
        case '*':
            return (Number(mem) * Number(input)).toString();
        case '/':
            return (Number(mem) / Number(input)).toString();
        case '=':
        case '':
            return Number(input).toString();
    }
}

function onLoad(){
    console.log('starting blocks');
    render();
}

function onBackspace(){
    console.log('bkspace');
    console.log('input='+input+'; mem='+mem+'; operant='+operant+'; histoire="'+histoire+'";');
    if (input.charAt(input.length-1)== '.'){
        isVirguled = false;
    }
    input = input.substring(0, input.length - 1);
    render();

}

function onClean(){
    console.log('clean');
    console.log('input='+input+'; mem='+mem+'; operant='+operant+'; histoire="'+histoire+'";');
    input = '';  
    isVirguled = false;
    render();
}

function onCleanEverything(){
    console.log('superclean');
    console.log('input='+input+'; mem='+mem+'; operant='+operant+'; histoire="'+histoire+'";');
    input = '';
    operant = '';
    mem = 0;
    histoire = '';  
    isVirguled = false; 
    render();
}

function onValue(nb){
    input += nb;
    render();
}

function onOperant(symbole){
    console.log('input='+input+'; mem='+mem+'; operant='+operant+'; histoire="'+histoire+'";');
    if (histoire == '' && input == ''){
        histoire = '0';
    }
    if (mem != '' && input != '' ){
        histoire  +=  operant + Number(input).toString();
        mem = getResultatCalcul();
    }
    if (mem == ''){
        histoire  += Number(input).toString();
        mem = input;
    }
    input = '';
    operant = symbole;
    render();
}    

function onCalculer() {
    console.log('egal ' + operant);
    console.log('input='+input+'; mem='+mem+'; operant='+operant+'; histoire="'+histoire+'";');
    if (input ==''){
       input = '0';  
    }
    histoire += operant +  Number(input).toString();
    input = getResultatCalcul();
    operant = '=';
    render();
    input = '';
    operant = '';
    mem = 0;
    histoire = ''; 
}   

function onVirgule(){
    console.log('virgule');
    console.log('input='+input+'; mem='+mem+'; operant='+operant+'; histoire="'+histoire+'";');
    if (isVirguled){
        return;
    }
    input += '.';
    isVirguled = true;
    render();
}    

function onPlusMn(){
    console.log('inversion');
    console.log('input='+input+'; mem='+mem+'; operant='+operant+'; histoire="'+histoire+'";');
    input = -(input)
    render();
}