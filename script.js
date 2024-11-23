function voto(elementId){
    const votos = document.getElementById(elementId);

    let sumadeVotos = parseInt(votos.innerText);
    votos.innerText = sumadeVotos + 1;
}
