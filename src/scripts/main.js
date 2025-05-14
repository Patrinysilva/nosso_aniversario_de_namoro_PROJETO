// aqui define a data do evento e e transforma em milissegundos
const dataDoEvento = new Date("Sep 01, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

// temporizador que será atualizados de 1 em 1 segundo
const contaAsHoras = setInterval(function(){

    // pega a data atual e transforma em milisegundos
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    // faz a subtração de milisegundos da data do evento com a data atual e salva em uma variavel
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    // Aqui ele cria "medidas" de tempo em milissegundos
    const diaEmMs = 1000 * 60 * 60 * 24
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento =  Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento =  Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento =  Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);
    


    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if(distanciaAteOEvento < 0 ){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML ='Já casamos!';
    }
},1000);