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
      precio: 37000,
      eficiencia: "1.18918918918919E-02",
      aguresidual: "4 Lts",
    },
    {
      marca: "LG",
      modelo: "VM242C6",
      capacidad: "24.000 BTU",
      precio: 1200,
      descripcion: "Aire acondicionado LG con capacidad de 24.000 BTU. Viene con tecnología de enfriamiento rápido y un modo de ahorro de energía para reducir tus costos de electricidad."
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
    div.innerHTML = `<h3>${aireAcondicionado.marca} ${aireAcondicionado.modelo}</h3><p><strong>Tipo:</strong> ${aireAcondicionado.tipo}</p><p><strong>Precio:</strong> $${aireAcondicionado.precio.toFixed(2)}</p><p><strong>Agua residual:</strong> ${aireAcondicionado.aguresidual}</p>`;
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