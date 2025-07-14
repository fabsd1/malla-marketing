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
