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
      marca: "GE",
      modelo: "Cools up to 700 sq",
      tipo: "Ventana",
      temperatura: "Ambos",
      precio: "28,193.10",
      eficiencia: "0.0135",
      aguresidual: "2.5 Lts",
    },
    {
      marca: "Hisense",
      modelo: "Aire acondicionado Inverter",
      tipo: "MiniSplit",
      temperatura: "Ambos",
      precio: "10,500",
      eficiencia: "0.0105",
      aguresidual: "2 Lts",
    },
    {
      marca: "IUSA",
      modelo: "Mod. 267658",
      tipo: "MiniSplit",
      temperatura: "Frío",
      precio: "5,599",
      eficiencia: "0.00875",
      aguresidual: "4 Lts",
    },
    {
      marca: "LG",
      modelo: "SP182ACA",
      tipo: "MiniSplit",
      temperatura: "Frío",
      precio: "20,000",
      eficiencia: "0.011",
      aguresidual: "3 Lts",
    },
    {
      marca: "Mabe",
      modelo: "Mini split tradicional",
      tipo: "MiniSplit",
      temperatura: "Ambos",
      precio: "12,300",
      eficiencia: "1.13333333333333E-02",
      aguresidual: "3 Lts",
    },
    {
      marca: "Midea",
      modelo: "Serie Aurora",
      tipo: "MiniSplit",
      temperatura: "Frío",
      precio: "7,200",
      eficiencia: "0.00875",
      aguresidual: "5 Lts",
    },
    {
      marca: "Midea Aire",
      modelo: "MAP12C1PSP",
      tipo: "Portátil",
      temperatura: "Frío",
      precio: "7,232",
      eficiencia: "0.0175",
      aguresidual: "3.5 Lts",
    },
    {
      marca: "Mirage",
      modelo: "Mirage Life",
      tipo: "MiniSplit",
      temperatura: "Ambos",
      precio: "8,500",
      eficiencia: "0.0065",
      aguresidual: "3 Lts",
    },
    {
      marca: "Mirage Magnum",
      modelo: "CMF120F",
      tipo: "MiniSplit",
      temperatura: "Ambos",
      precio: "11,069",
      eficiencia: "1.77777777777778E-02",
      aguresidual: "4.5 Lts",
    },
    {
      marca: "Mirage Nex",
      modelo: "CHF121R",
      tipo: "MiniSplit",
      temperatura: "Frío",
      precio: "6,499",
      eficiencia: "1.22222222222222E-02",
      aguresidual: "4.5 Lts",
    },
    {
      marca: "Parker",
      modelo: "HydroWally",
      tipo: "MiniSplit",
      temperatura: "Frío",
      precio: "10,300",
      eficiencia: "0.009375",
      aguresidual: "5 Lts",
    },
    {
      marca: "Samsung",
      modelo: "Air Mirage Life",
      tipo: "MiniSplit",
      temperatura: "Frío",
      precio: "18,000",
      eficiencia: "0.004",
      aguresidual: "4 Lts",
    },
    {
      marca: "Trane",
      modelo: "4TXK6548G1",
      tipo: "MiniSplit",
      temperatura: "Ambos",
      precio: "52,000",
      eficiencia: "0.010625",
      aguresidual: "5 Lts",
    },
    {
      marca: "Mirage",
      modelo: "Macc1221L",
      tipo: "Ventana",
      temperatura: "Frío",
      precio: "4,589",
      eficiencia: "1.88888888888889E-02",
      aguresidual: "5 Lts",
    },
    {
      marca: "Whirlpool",
      modelo: "Minisplit Whirlpool",
      tipo: "Minisplit",
      temperatura: "Ambos",
      precio: "7,000",
      eficiencia: "9.44444444444444E-03",
      aguresidual: "4.5 Lts",
    },
    {
      marca: "YORK",
      modelo: "Triple Inverter",
      tipo: "Minisplit",
      temperatura: "Ambos",
      precio: "27,000",
      eficiencia: "0.011",
      aguresidual: "5 Lts",
    }
  ];
  
  let indiceActual = 0;
  
  function mostrarAireAcondicionado() {
    const info = document.getElementById("info");
    info.innerHTML = "";
    const aireAcondicionado = airesAcondicionados[indiceActual];
    const div = document.createElement("div");
    div.innerHTML = `<h3>${aireAcondicionado.marca} ${aireAcondicionado.modelo}</h3><p><strong>Tipo:</strong> ${aireAcondicionado.tipo}</p><p><strong>Temperatura:</strong> ${aireAcondicionado.temperatura}</p><p><strong>Precio:</strong> $${aireAcondicionado.precio}</p><p><strong>Eficiencia energética:</strong> ${aireAcondicionado.eficiencia}</p><p><strong>Agua residual/hora:</strong> ${aireAcondicionado.aguresidual}</p>`;
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

  //Código para mostrar el número de página o de avance en el consultor de climas//
  var pageNumber = 1;
var totalPages = 20; // Este valor puede variar dependiendo del número total de páginas

function updatePageNumber() {
  document.getElementById("page-number").textContent = pageNumber;
  document.getElementById("total-pages").textContent = totalPages;
}

function nextPage() {
  if (pageNumber < totalPages) {
    pageNumber++;
    updatePageNumber();
  }
}

function previousPage() {
  if (pageNumber > 1) {
    pageNumber--;
    updatePageNumber();
  }
}

updatePageNumber(); // Llama a la función para actualizar el número de página inicialmente
document.getElementById("siguiente").addEventListener("click", nextPage);
document.getElementById("anterior").addEventListener("click", previousPage);