console.log('js carregou')
const btnaddEquipamento = document.getElementById('adicionar');
const span = document.getElementById('teste');

const lista = []

function calcularbitola(corrente){
    

    if(corrente <= 14.5){
        return '1,5 milimetros, disjuntor recomendado: 10a'};
        
    if(corrente > 14.5 && corrente <= 19.5){
        return '2,5 milimetros, disjuntor recomendado: 16a '};

    if(corrente > 19.5 && corrente <= 26){
        return '4 milimetros, disjuntor recomendado: 25a'};
    
    if(corrente > 26 && corrente <=34){
        return '6 milimetros, disjuntor recomendado: 32a '};
    
    if(corrente > 34 && corrente <= 46){
        return '10 milimetros, disjuntor recomendado: 40a'};
    
    if(corrente > 46 && corrente <= 61){
        return '16 milimetros, disjuntor recomendado: 60a '};
    
    if(corrente > 61 && corrente <=80){
        return '25 milimetros, disjuntor recomendado: 75a'};
    
    if(corrente >80 && corrente <=99){
        return'35 milimetros, disjuntor recomendado: 90a'};

    if(corrente > 99 && corrente <=119){
        return '50 milimetros, disjuntor recomendado: 110a' };
    
    if(corrente > 119 && corrente <= 151){
        return '70 milimetros, disjuntor recomendado: 125a'}
    
    if(corrente > 151 && corrente <= 182){
        return'95 milimetros, disjuntor recomendado: 150a '}
    
    if(corrente > 182 && corrente <= 210){
        return '95 milimetros, disjuntor recomendado: 200 \n (cabo limite em redes de baixa tensão)'}
    
    if(corrente > 210 ){
        return 'bitola acima de 120 milimetros, procure um engenheiro eletricista'
    }

    return bitola;
}

btnaddEquipamento.addEventListener('click', () =>{
    const aparelho = document.getElementById('nome').value;
    const watts = Number(document.getElementById('potencia').value);
    const tensao = Number(document.getElementById('tensao').value);
    

    lista.push({
        aparelho, watts
    })

    const wattsTotal = lista.reduce((acc , n) =>{
        return acc+ Number(n.watts)
    },0)
    
    const amperagem = wattsTotal / tensao
    const corrente = amperagem *1.1

    const sessao = calcularbitola(corrente)
    span.textContent = sessao
    
    

    console.log(lista)
    console.log(wattsTotal)
    console.log(corrente)

})