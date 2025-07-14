const cursos = [
  // Ciclo 1
  { codigo: "CUR001", nombre: "Administración General", creditos: 4, estado: "bloqueado", requisitos: [], precedentes: [], ciclo: 1 },
  { codigo: "CUR002", nombre: "Análisis de Datos I", creditos: 3, estado: "bloqueado", requisitos: [], precedentes: [], ciclo: 1 },
  { codigo: "CUR003", nombre: "Comunicación y Literatura I", creditos: 3, estado: "bloqueado", requisitos: [], precedentes: [], ciclo: 1 },
  { codigo: "CUR004", nombre: "Filosofía y Ética", creditos: 3, estado: "bloqueado", requisitos: [], precedentes: [], ciclo: 1 },
  { codigo: "CUR005", nombre: "Pensamiento Crítico", creditos: 2, estado: "bloqueado", requisitos: [], precedentes: [], ciclo: 1 },
  { codigo: "CUR006", nombre: "Pre Cálculo", creditos: 3, estado: "bloqueado", requisitos: [], precedentes: [], ciclo: 1 },
  { codigo: "CUR007", nombre: "Taller: Desarrollo de Competencias Personales I", creditos: 1, estado: "bloqueado", requisitos: [], precedentes: [], ciclo: 1 },

  // Ciclo 2
  { codigo: "CUR008", nombre: "Cálculo I", creditos: 4, estado: "bloqueado", requisitos: ["Pre Cálculo"], precedentes: [], ciclo: 2 },
  { codigo: "CUR009", nombre: "Contabilidad General", creditos: 3, estado: "bloqueado", requisitos: ["Administración General"], precedentes: [], ciclo: 2 },
  { codigo: "CUR010", nombre: "Comunicación y Literatura II", creditos: 3, estado: "bloqueado", requisitos: ["Comunicación y Literatura I"], precedentes: [], ciclo: 2 },
  { codigo: "CUR011", nombre: "Estadística y Probabilidades", creditos: 4, estado: "bloqueado", requisitos: ["Pre Cálculo"], precedentes: [], ciclo: 2 },
  { codigo: "CUR012", nombre: "Fundamentos de Marketing", creditos: 3, estado: "bloqueado", requisitos: ["Administración General"], precedentes: [], ciclo: 2 },
  { codigo: "CUR013", nombre: "Taller: Desarrollo de Competencias Personales I", creditos: 1, estado: "bloqueado", requisitos: [], precedentes: [], ciclo: 2 },

  // Ciclo 3
  { codigo: "CUR014", nombre: "Cálculo II", creditos: 4, estado: "bloqueado", requisitos: ["Cálculo I"], precedentes: ["Cálculo I"], ciclo: 3 },
  { codigo: "CUR015", nombre: "Comportamiento del Consumidor", creditos: 4, estado: "bloqueado", requisitos: ["Fundamentos de Marketing"], precedentes: [], ciclo: 3 },
  { codigo: "CUR016", nombre: "Costos y Presupuestos", creditos: 4, estado: "bloqueado", requisitos: ["Contabilidad General"], precedentes: [], ciclo: 3 },
  { codigo: "CUR017", nombre: "Economía General", creditos: 4, estado: "bloqueado", requisitos: ["Administración General"], precedentes: ["Cálculo I"], ciclo: 3 },
  { codigo: "CUR018", nombre: "Taller: Desarrollo de Competencias Personales II", creditos: 1, estado: "bloqueado", requisitos: ["Taller: Desarrollo de Competencias Personales I"], precedentes: [], ciclo: 3 },
  { codigo: "CUR019", nombre: "Teoría y Diseño Organizacional", creditos: 5, estado: "bloqueado", requisitos: ["Administración General"], precedentes: [], ciclo: 3 },
   // Ciclo 4
  { codigo: "CUR25", nombre: "Comunicaciones del Marketing", creditos: 3, estado: "bloqueado", requisitos: ["Comportamiento del Consumidor"], precedentes: [], ciclo: 4 },
  { codigo: "CUR26", nombre: "Electivo I", creditos: 3, estado: "bloqueado", requisitos: ["Según Electivo"], precedentes: [], ciclo: 4 },
  { codigo: "CUR27", nombre: "Finanzas I", creditos: 4, estado: "bloqueado", requisitos: ["Contabilidad General", "Cálculo I"], precedentes: [], ciclo: 4 },
  { codigo: "CUR28", nombre: "Gestión del Capital Humano", creditos: 3, estado: "bloqueado", requisitos: ["Teoría y Diseño Organizacional"], precedentes: [], ciclo: 4 },
  { codigo: "CUR29", nombre: "Estadística Inferencial", creditos: 5, estado: "bloqueado", requisitos: ["Estadística y Probabilidades"], precedentes: [], ciclo: 4 },
  { codigo: "CUR30", nombre: "Microeconomía", creditos: 4, estado: "bloqueado", requisitos: ["Economía General"], precedentes: [], ciclo: 4 },
  { codigo: "CUR31", nombre: "Taller: Desarrollo de Competencias Profesionales III", creditos: 1, estado: "bloqueado", requisitos: ["Taller: Desarrollo de Competencias Profesionales II"], precedentes: [], ciclo: 4 },

  // Ciclo 5
  { codigo: "CUR32", nombre: "Análisis de Datos II", creditos: 3, estado: "bloqueado", requisitos: ["Análisis de Datos I", "Estadística Inferencial"], precedentes: [], ciclo: 5 },
  { codigo: "CUR33", nombre: "Electivo II", creditos: 3, estado: "bloqueado", requisitos: ["Según Electivo"], precedentes: [], ciclo: 5 },
  { codigo: "CUR34", nombre: "Electivo III", creditos: 3, estado: "bloqueado", requisitos: ["Según Electivo"], precedentes: ["Comportamiento del Consumidor"], ciclo: 5 },
  { codigo: "CUR35", nombre: "Estrategias de Segmentación y Posicionamiento", creditos: 4, estado: "bloqueado", requisitos: ["80 créditos aprobados"], precedentes: [], ciclo: 5 },
  { codigo: "CUR36", nombre: "Investigación Cualitativa de Mercados", creditos: 4, estado: "bloqueado", requisitos: ["Estadística Inferencial", "Comportamiento del Consumidor"], precedentes: [], ciclo: 5 },
  { codigo: "CUR37", nombre: "Finanzas II", creditos: 4, estado: "bloqueado", requisitos: ["Finanzas I"], precedentes: [], ciclo: 5 },
  { codigo: "CUR38", nombre: "Taller: Desarrollo de Competencias Personales III", creditos: 1, estado: "bloqueado", requisitos: ["Taller: Desarrollo de Competencias Profesionales II"], precedentes: [], ciclo: 5 },

 // Ciclo 6
  { codigo: "CUR39", nombre: "Canales y Estrategias de Distribución", creditos: 4, estado: "bloqueado", requisitos: [], precedentes: ["Estrategias de Segmentación y Posicionamiento"], ciclo: 6 },
  { codigo: "CUR40", nombre: "Costeo y Estrategias de Precios", creditos: 4, estado: "bloqueado", requisitos: ["Costos y Presupuestos"], precedentes: [], ciclo: 6 },
  { codigo: "CUR41", nombre: "Derecho Empresarial", creditos: 4, estado: "bloqueado", requisitos: ["80 créditos aprobados"], precedentes: [], ciclo: 6 },
  { codigo: "CUR42", nombre: "Investigación Cuantitativa de Mercados", creditos: 4, estado: "bloqueado", requisitos: ["Investigación Cualitativa de Mercados"], precedentes: [], ciclo: 6 },
  { codigo: "CUR43", nombre: "Gestión de Proyectos de Lanzamiento de Producto", creditos: 4, estado: "bloqueado", requisitos: ["Estrategias de Segmentación y Posicionamiento"], precedentes: [], ciclo: 6 },
  { codigo: "CUR44", nombre: "Marketing de Servicios y Retail", creditos: 4, estado: "bloqueado", requisitos: ["Estrategias de Segmentación y Posicionamiento"], precedentes: [], ciclo: 6 },
  { codigo: "CUR45", nombre: "Taller: Desarrollo de Competencias Profesionales III", creditos: 1, estado: "bloqueado", requisitos: ["Taller: Desarrollo de Competencias Profesionales II"], precedentes: [], ciclo: 6 },

  // Ciclo 7
  { codigo: "CUR46", nombre: "Electivo IV", creditos: 3, estado: "bloqueado", requisitos: ["Según Electivo"], precedentes: [], ciclo: 7 },
  { codigo: "CUR47", nombre: "Electivo V", creditos: 3, estado: "bloqueado", requisitos: ["Según Electivo"], precedentes: [], ciclo: 7 },
  { codigo: "CUR48", nombre: "Formulación y Evaluación de Proyectos", creditos: 4, estado: "bloqueado", requisitos: ["Finanzas II", "Costos y Presupuestos"], precedentes: [], ciclo: 7 },
  { codigo: "CUR49", nombre: "Gestión de Ventas", creditos: 3, estado: "bloqueado", requisitos: ["Investigación Cualitativa de Mercados"], precedentes: [], ciclo: 7 },
  { codigo: "CUR50", nombre: "Investigación Cuantitativa con Modelos Multivariados", creditos: 3, estado: "bloqueado", requisitos: ["Investigación Cuantitativa de Mercados"], precedentes: [], ciclo: 7 },
  { codigo: "CUR51", nombre: "Metodología de la Investigación", creditos: 3, estado: "bloqueado", requisitos: ["105 créditos aprobados"], precedentes: [], ciclo: 7 },
  { codigo: "CUR52", nombre: "Taller: Desarrollo de Competencias Personales IV", creditos: 1, estado: "bloqueado", requisitos: ["Taller: Desarrollo de Competencias Profesionales III"], precedentes: [], ciclo: 7 },

  // Ciclo 8
  { codigo: "CUR53", nombre: "Electivo VI", creditos: 1.5, estado: "bloqueado", requisitos: ["Según Electivo"], precedentes: [], ciclo: 8 },
  { codigo: "CUR54", nombre: "Electivo Internacional I", creditos: 1.5, estado: "bloqueado", requisitos: ["Según Electivo"], precedentes: [], ciclo: 8 },
  { codigo: "CUR55", nombre: "Electivo Internacional II", creditos: 1.5, estado: "bloqueado", requisitos: ["Según Electivo"], precedentes: [], ciclo: 8 },
  { codigo: "CUR56", nombre: "Entrepreneurship", creditos: 4, estado: "bloqueado", requisitos: ["140 créditos aprobados"], precedentes: [], ciclo: 8 },
  { codigo: "CUR57", nombre: "Gerencia de Operaciones", creditos: 3, estado: "bloqueado", requisitos: ["100 créditos aprobados"], precedentes: [], ciclo: 8 },
  { codigo: "CUR58", nombre: "Global Marketing", creditos: 4, estado: "bloqueado", requisitos: ["140 créditos aprobados"], precedentes: [], ciclo: 8 },
  { codigo: "CUR59", nombre: "Inteligencia de Negocios Aplicada", creditos: 4, estado: "bloqueado", requisitos: ["Investigación Cuantitativa de Mercados"], precedentes: [], ciclo: 8 },
  { codigo: "CUR60", nombre: "Taller: Desarrollo de Competencias Profesionales IV", creditos: 1, estado: "bloqueado", requisitos: ["Taller: Desarrollo de Competencias Profesionales III"], precedentes: [], ciclo: 8 },

  // Ciclo 9
  { codigo: "CUR61", nombre: "Electivo VII", creditos: 3, estado: "bloqueado", requisitos: ["Según Electivo"], precedentes: [], ciclo: 9 },
  { codigo: "CUR62", nombre: "Electivo VIII", creditos: 3, estado: "bloqueado", requisitos: ["Según Electivo"], precedentes: [], ciclo: 9 },
  { codigo: "CUR63", nombre: "Electivo IX", creditos: 3, estado: "bloqueado", requisitos: ["Según Electivo"], precedentes: [], ciclo: 9 },
  { codigo: "CUR64", nombre: "Electivo X", creditos: 3, estado: "bloqueado", requisitos: ["Según Electivo"], precedentes: [], ciclo: 9 },
  { codigo: "CUR65", nombre: "Electivo XI", creditos: 3, estado: "bloqueado", requisitos: ["Según Electivo"], precedentes: [], ciclo: 9 },
  { codigo: "CUR66", nombre: "E - Marketing", creditos: 3, estado: "bloqueado", requisitos: ["Comunicaciones del Marketing"], precedentes: [], ciclo: 9 },
  { codigo: "CUR67", nombre: "Taller: Desarrollo de Competencias Personales V", creditos: 1, estado: "bloqueado", requisitos: ["Taller: Desarrollo de Competencias Profesionales IV"], precedentes: [], ciclo: 9 },
  { codigo: "CUR68", nombre: "Trabajo de Tesis I", creditos: 3, estado: "bloqueado", requisitos: ["140 créditos aprobados", "Metodología de la Investigación"], precedentes: [], ciclo: 9 },

   // Ciclo 10
  { codigo: "CUR69", nombre: "Branding", creditos: 3, estado: "bloqueado", requisitos: ["Comunicaciones del Marketing"], precedentes: [], ciclo: 10 },
  { codigo: "CUR70", nombre: "Dirección Estratégica de Marketing", creditos: 4, estado: "bloqueado", requisitos: ["175 créditos aprobados"], precedentes: [], ciclo: 10 },
  { codigo: "CUR71", nombre: "Electivo XII", creditos: 3, estado: "bloqueado", requisitos: ["Según Electivo"], precedentes: [], ciclo: 10 },
  { codigo: "CUR72", nombre: "Electivo XIII", creditos: 3, estado: "bloqueado", requisitos: ["Según Electivo"], precedentes: [], ciclo: 10 },
  { codigo: "CUR73", nombre: "Electivo XIV", creditos: 3, estado: "bloqueado", requisitos: ["Según Electivo"], precedentes: [], ciclo: 10 },
  { codigo: "CUR74", nombre: "Taller: Desarrollo de Competencias Profesionales V", creditos: 1, estado: "bloqueado", requisitos: ["Taller: Desarrollo de Competencias Profesionales IV"], precedentes: [], ciclo: 10 },
  { codigo: "CUR75", nombre: "Trabajo de Tesis II", creditos: 3, estado: "bloqueado", requisitos: ["Trabajo de Tesis I"], precedentes: [], ciclo: 10 }
];


const creditosTotales = cursos.reduce((sum, c) => sum + c.creditos, 0);
let creditosAprobados = 0;

function actualizarVista() {
  const malla = document.getElementById("malla");
  malla.innerHTML = "";

  for (let ciclo = 1; ciclo <= 10; ciclo++) {
    const columna = document.createElement("div");
    columna.className = "ciclo";
    const titulo = document.createElement("h3");
    titulo.textContent = `Ciclo ${ciclo}`;
    columna.appendChild(titulo);

    cursos.filter(c => c.ciclo === ciclo).forEach(curso => {
      const div = document.createElement("div");
      div.className = "curso";
      div.textContent = `${curso.nombre} (${curso.creditos} cr)`;

      if (curso.estado === "aprobado") {
        div.classList.add("aprobado");
      } else if (!puedeDesbloquear(curso)) {
        div.classList.add("bloqueado");
      }

      div.onclick = () => {
        if (curso.estado === "aprobado") {
          curso.estado = "bloqueado";
          creditosAprobados -= curso.creditos;
        } else if (puedeDesbloquear(curso)) {
          curso.estado = "aprobado";
          creditosAprobados += curso.creditos;
        } else {
          return;
        }
        actualizarVista();
      };

      columna.appendChild(div);
    });

    malla.appendChild(columna);
  }

  document.getElementById("creditos-aprobados").textContent = creditosAprobados;
  document.getElementById("creditos-faltantes").textContent = creditosTotales - creditosAprobados;
  document.getElementById("barra").style.width = `${(creditosAprobados / creditosTotales) * 100}%`;
}

function puedeDesbloquear(curso) {
  const requisitosOk = curso.requisitos.every(req => cursos.find(c => c.nombre === req && c.estado === "aprobado"));
  const precedentesOk = curso.precedentes.every(pre => cursos.find(c => c.nombre === pre && c.estado !== "bloqueado"));
  return requisitosOk && precedentesOk;
}

actualizarVista();
