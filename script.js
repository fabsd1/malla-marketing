const cursos = [
  {
    "codigo": "CUR01",
    "nombre": "Administración General",
    "creditos": 4,
    "estado": "aprobado",
    "requisitos": [],
    "precedentes": [],
    "ciclo": 1
  },
  {
    "codigo": "CUR02",
    "nombre": "Análisis de Datos I",
    "creditos": 3,
    "estado": "bloqueado",
    "requisitos": [],
    "precedentes": [],
    "ciclo": 1
  },
  {
    "codigo": "CUR03",
    "nombre": "Comunicación y Literatura I",
    "creditos": 3,
    "estado": "bloqueado",
    "requisitos": [],
    "precedentes": [],
    "ciclo": 1
  },
  {
    "codigo": "CUR04",
    "nombre": "Filosofía y Ética",
    "creditos": 3,
    "estado": "bloqueado",
    "requisitos": [],
    "precedentes": [],
    "ciclo": 1
  },
  {
    "codigo": "CUR05",
    "nombre": "Pensamiento Crítico",
    "creditos": 2,
    "estado": "bloqueado",
    "requisitos": [],
    "precedentes": [],
    "ciclo": 1
  },
  {
    "codigo": "CUR06",
    "nombre": "Pre Cálculo",
    "creditos": 3,
    "estado": "bloqueado",
    "requisitos": [],
    "precedentes": [],
    "ciclo": 1
  },
  {
    "codigo": "CUR07",
    "nombre": "Taller: Desarrollo de Competencias Personales I",
    "creditos": 1,
    "estado": "bloqueado",
    "requisitos": [],
    "precedentes": [],
    "ciclo": 1
  },
  {
    "codigo": "CUR08",
    "nombre": "Cálculo I",
    "creditos": 4,
    "estado": "bloqueado",
    "requisitos": [],
    "precedentes": [],
    "ciclo": 2
  },
  {
    "codigo": "CUR09",
    "nombre": "Contabilidad General",
    "creditos": 3,
    "estado": "bloqueado",
    "requisitos": [],
    "precedentes": [],
    "ciclo": 2
  },
  {
    "codigo": "CUR10",
    "nombre": "Comunicación y Literatura II",
    "creditos": 3,
    "estado": "bloqueado",
    "requisitos": [],
    "precedentes": [],
    "ciclo": 2
  }
];


let creditosTotales = cursos.reduce((sum, c) => sum + c.creditos, 0);
let creditosAprobados = 0;

function actualizarVista() {
  const contenedor = document.getElementById("contenedor-ciclos");
  contenedor.innerHTML = "";

  const ciclos = {}; // Agrupar cursos por ciclo
  cursos.forEach(curso => {
    if (!ciclos[curso.ciclo]) {
      ciclos[curso.ciclo] = [];
    }
    ciclos[curso.ciclo].push(curso);
  });

  Object.keys(ciclos).forEach(ciclo => {
    const columna = document.createElement("div");
    columna.className = "columna-ciclo";

    const titulo = document.createElement("h3");
    titulo.textContent = `Ciclo ${ciclo}`;
    columna.appendChild(titulo);

    ciclos[ciclo].forEach(curso => {
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
        } else {
          curso.estado = "bloqueado";
          creditosAprobados -= curso.creditos;
        }

        actualizarVista();
      };

      columna.appendChild(div);
    });

    contenedor.appendChild(columna);
  });

  document.getElementById("creditos-aprobados").textContent = creditosAprobados;
  document.getElementById("creditos-faltantes").textContent = creditosTotales - creditosAprobados;
  document.getElementById("barra").style.width = `${(creditosAprobados / creditosTotales) * 100}%`;
}


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
    cursos.find(c => c.nombre === nom && (c.estado === "aprobado" || c.estado === "llevado"))
  );

  return requisitosOk && precedentesOk;
}

actualizarVista();
