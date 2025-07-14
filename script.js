const cursos = [
  { codigo: "CUR01", nombre: "Administración General", creditos: 4, estado: "bloqueado", requisitos: [], precedentes: [], ciclo: 1 },
  { codigo: "CUR02", nombre: "Análisis de Datos I", creditos: 3, estado: "bloqueado", requisitos: [], precedentes: [], ciclo: 1 },
  { codigo: "CUR03", nombre: "Comunicación y Literatura I", creditos: 3, estado: "bloqueado", requisitos: [], precedentes: [], ciclo: 1 },
  { codigo: "CUR04", nombre: "Filosofía y Ética", creditos: 3, estado: "bloqueado", requisitos: [], precedentes: [], ciclo: 1 },
  { codigo: "CUR05", nombre: "Pensamiento Crítico", creditos: 2, estado: "bloqueado", requisitos: [], precedentes: [], ciclo: 1 },
  { codigo: "CUR06", nombre: "Pre Cálculo", creditos: 3, estado: "bloqueado", requisitos: [], precedentes: [], ciclo: 1 },
  { codigo: "CUR07", nombre: "Taller: Desarrollo de Competencias Personales I", creditos: 1, estado: "bloqueado", requisitos: [], precedentes: [], ciclo: 1 },
  { codigo: "CUR08", nombre: "Cálculo I", creditos: 4, estado: "bloqueado", requisitos: ["Pre Cálculo"], precedentes: [], ciclo: 2 },
  { codigo: "CUR09", nombre: "Contabilidad General", creditos: 3, estado: "bloqueado", requisitos: ["Administración General"], precedentes: [], ciclo: 2 },
  { codigo: "CUR10", nombre: "Comunicación y Literatura II", creditos: 3, estado: "bloqueado", requisitos: ["Comunicación y Literatura I"], precedentes: [], ciclo: 2 },
];

let creditosAprobados = 0;
const creditosTotales = cursos.reduce((sum, c) => sum + c.creditos, 0);

function actualizarVista() {
  const malla = document.getElementById("malla");
  malla.innerHTML = "";

  const ciclosAgrupados = {};

  cursos.forEach(curso => {
    if (!ciclosAgrupados[curso.ciclo]) {
      ciclosAgrupados[curso.ciclo] = [];
    }
    ciclosAgrupados[curso.ciclo].push(curso);
  });

  for (const ciclo in ciclosAgrupados) {
    const columna = document.createElement("div");
    columna.className = "columna-ciclo";

    const titulo = document.createElement("h3");
    titulo.textContent = `Ciclo ${ciclo}`;
    columna.appendChild(titulo);

    ciclosAgrupados[ciclo].forEach((curso, i) => {
      const div = document.createElement("div");
      div.className = "curso";
      div.textContent = `${curso.nombre} (${curso.creditos} cr)`;

      if (curso.estado === "aprobado") {
        div.classList.add("aprobado");
      } else if (!puedeDesbloquear(curso)) {
        div.classList.add("bloqueado");
      }

      div.onclick = () => {
        if (!puedeDesbloquear(curso)) return;

        if (curso.estado === "aprobado") {
          curso.estado = "bloqueado";
          creditosAprobados -= curso.creditos;
        } else {
          curso.estado = "aprobado";
          creditosAprobados += curso.creditos;
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
  const requisitosOk = curso.requisitos.every(nom =>
    cursos.find(c => c.nombre === nom && c.estado === "aprobado")
  );

  const precedentesOk = curso.precedentes.every(nom =>
    cursos.find(c => c.nombre === nom && (c.estado === "aprobado" || c.estado === "bloqueado"))
  );

  return requisitosOk && precedentesOk;
}

actualizarVista();
