const cursos = [{"codigo": "CUR001", "nombre": "Administración General", "creditos": 4, "estado": "bloqueado", "requisitos": [], "precedentes": []}, {"codigo": "CUR002", "nombre": "Análisis de Datos I", "creditos": 3, "estado": "bloqueado", "requisitos": [], "precedentes": []}, {"codigo": "CUR003", "nombre": "Comunicación y Literatura I", "creditos": 3, "estado": "bloqueado", "requisitos": [], "precedentes": []}, {"codigo": "CUR004", "nombre": "Filosofía y Ética", "creditos": 3, "estado": "bloqueado", "requisitos": [], "precedentes": []}, {"codigo": "CUR005", "nombre": "Pensamiento Crítico", "creditos": 2, "estado": "bloqueado", "requisitos": [], "precedentes": []}, {"codigo": "CUR006", "nombre": "Pre Cálculo", "creditos": 3, "estado": "bloqueado", "requisitos": [], "precedentes": []}, {"codigo": "CUR007", "nombre": "Taller: Desarrollo de Competencias Personales I", "creditos": 1, "estado": "bloqueado", "requisitos": [], "precedentes": []}, {"codigo": "CUR008", "nombre": "Cálculo I", "creditos": 4, "estado": "bloqueado", "requisitos": ["Pre Cálculo"], "precedentes": []}, {"codigo": "CUR009", "nombre": "Contabilidad General", "creditos": 3, "estado": "bloqueado", "requisitos": ["Administración General"], "precedentes": []}, {"codigo": "CUR010", "nombre": "Comunicación y Literatura II", "creditos": 3, "estado": "bloqueado", "requisitos": ["Comunicación y Literatura I"], "precedentes": []}];

let creditosTotales = cursos.reduce((sum, c) => sum + c.creditos, 0);
let creditosAprobados = 0;

function actualizarVista() {
  const malla = document.getElementById("malla");
  malla.innerHTML = "";

  cursos.forEach((curso, i) => {
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

      if (curso.estado !== "aprobado") {
        curso.estado = "aprobado";
        creditosAprobados += curso.creditos;
      }

      actualizarVista();
    };

    malla.appendChild(div);
  });

  document.getElementById("creditos-aprobados").textContent = creditosAprobados;
  document.getElementById("creditos-faltantes").textContent = creditosTotales - creditosAprobados;
  document.getElementById("barra").style.width = `${(creditosAprobados / creditosTotales) * 100}%`;
}

function puedeDesbloquear(curso) {
  const requisitosOk = curso.requisitos.every(nom =>
    cursos.find(c => c.nombre === nom && c.estado === "aprobado")
  );

  const precedentesOk = curso.precedentes.every(nom =>
    cursos.find(c => c.nombre === nom && (c.estado ===
