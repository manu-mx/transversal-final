const salutdo = document.querySelector('.h1j');
fecha = new Date();
hora = fecha.getHours();
if(hora >= 0 && hora < 12){
salutdo.textContent = 'Buenos días';
}
if(hora >= 12 && hora < 18){
salutdo.textContent = 'Buenas tardes';
}
if(hora >= 18 && hora < 24){
salutdo.textContent = 'Buenas noches';
};
//Código para Consultor de aires acondicionados//
const airesAcondicionados = [
    {
      marca: "Carrier",
      modelo: "Absolut Filter",
      tipo: "Ventana",
      temperatura: "Ambos",
      precio: "37,000",
      eficiencia: "1.18918918918919E-02",
      aguresidual: "4 Lts",
    },
    {
      marca: "Emerson",
      modelo: "Silencioso kool",
      tipo: "MiniSplit",
      temperatura: "Ambos",
      precio: "11,500",
      eficiencia: "1.33333333333333E-02",
      aguresidual: "2 Lts",
    },
    {
      marca: "Freyven",
      modelo: "Freyven Minisplit",
      tipo: "MiniSplit",
      temperatura: "Frío",
      precio: "3,500",
      eficiencia: "0.00475",
      aguresidual: "3 Lts",
    },
    {
      marca: "FRIKKO",
      modelo: "Fit 17 2",
      tipo: "MiniSplit",
      temperatura: "Ambos",
      precio: "22,579",
      eficiencia: "0.011",
      aguresidual: "4.5 Lts",
    },
    {
      marca: "Mitsubishi",
      modelo: "MSZ-GE24NA",
      capacidad: "24.000 BTU",
      precio: 1300,
      descripcion: "Aire acondicionado Mitsubishi con capacidad de 24.000 BTU. Viene con tecnología de enfriamiento rápido y un filtro anti-alergias para reducir la cantidad de alérgenos en el aire."
    }
  ];
  
  let indiceActual = 0;
  
  function mostrarAireAcondicionado() {
    const info = document.getElementById("info");
    info.innerHTML = "";
    const aireAcondicionado = airesAcondicionados[indiceActual];
    const div = document.createElement("div");
    div.innerHTML = `<h3>${aireAcondicionado.marca} ${aireAcondicionado.modelo}</h3><p><strong>Tipo:</strong> ${aireAcondicionado.tipo}</p><p><strong>Temperatura:</strong> ${aireAcondicionado.temperatura}</p><p><strong>Precio:</strong> $${aireAcondicionado.precio}</p><p><strong>Eficiencia energética:</strong> ${aireAcondicionado.eficiencia}</p><p><strong>Agua residual:</strong> ${aireAcondicionado.aguresidual}</p>`;
    info.appendChild(div);
  }
  
  function mostrarSiguiente() {
    if (indiceActual < airesAcondicionados.length - 1) {
      indiceActual++;
      mostrarAireAcondicionado();
    }
  }
  
  function mostrarAnterior() {
    if (indiceActual > 0) {
      indiceActual--;
      mostrarAireAcondicionado();
    }
  }
  
  const siguiente = document.getElementById("siguiente");
  siguiente.addEventListener("click", mostrarSiguiente);
  
  const anterior = document.getElementById("anterior");
  anterior.addEventListener("click", mostrarAnterior);
  
  mostrarAireAcondicionado();  