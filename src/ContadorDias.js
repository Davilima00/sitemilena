function atualizarContador() {
    // Defina a data de início (pode ser qualquer data que você quiser)
    const dataInicio = new Date("2025-01-01T12:00:00");
    const dataAtual = new Date();

    // Calcula a diferença em milissegundos
    const diferenca = dataAtual - dataInicio;

    // Converte para anos, meses, dias, horas, minutos e segundos
    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Atualiza os elementos HTML com os valores calculados
    document.getElementById("anos").textContent = anos;
    document.getElementById("meses").textContent = meses;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);

// Atualiza imediatamente ao carregar
atualizarContador();
