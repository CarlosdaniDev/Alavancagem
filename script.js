function calcular() {
  const bancaInicial = Number(document.getElementById("banca").value);
  const odds = [
    Number(document.getElementById("odd1").value),
    Number(document.getElementById("odd2").value),
    Number(document.getElementById("odd3").value)
  ];

  let banca = bancaInicial;
  let tbody = document.getElementById("resultado");
  tbody.innerHTML = "";

  odds.forEach((odd, index) => {
    let retorno = banca * odd;

    let tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${banca.toFixed(2)}</td>
      <td>${odd.toFixed(2)}</td>
      <td>${retorno.toFixed(2)}</td>
    `;
    tbody.appendChild(tr);

    banca = retorno;
  });

  let lucro = banca - bancaInicial;
  document.getElementById("lucro").innerText = lucro.toFixed(2);
}
