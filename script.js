/* ============================================================
   Malla curricular — Administración y Marketing (ESAN)
   Plan de estudios aprobado por Acuerdo N°011-03/2023
   ============================================================ */

const slug = (s) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// ciclo 0 = Ciclo Introductorio (no cuenta para los 212 créditos de la especialidad)
const CURSOS_RAW = [
  // CICLO INTRODUCTORIO
  { ciclo: 0, nombre: "Comunicaciones", creditos: 0, prereq: [] },
  { ciclo: 0, nombre: "Matemáticas", creditos: 0, prereq: [] },

  // PRIMER CICLO
  { ciclo: 1, nombre: "Administración General", creditos: 4, prereq: [] },
  { ciclo: 1, nombre: "Análisis de Datos I", creditos: 3, prereq: [] },
  { ciclo: 1, nombre: "Comunicación y Literatura I", creditos: 3, prereq: ["Comunicaciones"] },
  { ciclo: 1, nombre: "Filosofía y Ética", creditos: 3, prereq: [] },
  { ciclo: 1, nombre: "Pensamiento Crítico", creditos: 2, prereq: [] },
  { ciclo: 1, nombre: "Pre Cálculo", creditos: 3, prereq: ["Matemáticas"] },
  { ciclo: 1, nombre: "Taller: Desarrollo de Competencias Personales I", creditos: 1, prereq: [] },

  // SEGUNDO CICLO
  { ciclo: 2, nombre: "Cálculo I", creditos: 4, prereq: ["Pre Cálculo"] },
  { ciclo: 2, nombre: "Contabilidad General", creditos: 3, prereq: ["Administración General"] },
  { ciclo: 2, nombre: "Comunicación y Literatura II", creditos: 3, prereq: ["Comunicación y Literatura I"] },
  { ciclo: 2, nombre: "Estadística y Probabilidades", creditos: 3, prereq: ["Pre Cálculo"] },
  { ciclo: 2, nombre: "Fundamentos de Marketing", creditos: 3, prereq: ["Administración General"] },
  { ciclo: 2, nombre: "Taller: Desarrollo de Competencias Profesionales I", creditos: 1, prereq: [] },

  // TERCER CICLO
  { ciclo: 3, nombre: "Cálculo II", creditos: 4, prereq: ["Cálculo I"] },
  { ciclo: 3, nombre: "Comportamiento del Consumidor", creditos: 4, prereq: ["Fundamentos de Marketing"] },
  { ciclo: 3, nombre: "Costos y Presupuestos", creditos: 4, prereq: ["Contabilidad General"] },
  { ciclo: 3, nombre: "Economía General", creditos: 4, prereq: ["Administración General", "Cálculo I"] },
  { ciclo: 3, nombre: "Taller: Desarrollo de Competencias Personales II", creditos: 1, prereq: ["Taller: Desarrollo de Competencias Personales I"] },
  { ciclo: 3, nombre: "Teoría y Diseño Organizacional", creditos: 5, prereq: ["Administración General"] },

  // CUARTO CICLO
  { ciclo: 4, nombre: "Comunicaciones del Marketing", creditos: 3, prereq: ["Comportamiento del Consumidor"] },
  { ciclo: 4, nombre: "Electivo I", creditos: 3, prereq: ["Según Electivo"] },
  { ciclo: 4, nombre: "Finanzas I", creditos: 4, prereq: ["Contabilidad General", "Cálculo I"] },
  { ciclo: 4, nombre: "Gestión del Capital Humano", creditos: 3, prereq: ["Teoría y Diseño Organizacional"] },
  { ciclo: 4, nombre: "Estadística Inferencial", creditos: 5, prereq: ["Estadística y Probabilidades"] },
  { ciclo: 4, nombre: "Microeconomía", creditos: 4, prereq: ["Economía General"] },
  { ciclo: 4, nombre: "Taller: Desarrollo de Competencias Profesionales II", creditos: 1, prereq: ["Taller: Desarrollo de Competencias Profesionales I"] },

  // QUINTO CICLO
  { ciclo: 5, nombre: "Análisis de Datos II", creditos: 3, prereq: ["Análisis de Datos I", "Estadística Inferencial"] },
  { ciclo: 5, nombre: "Electivo II", creditos: 3, prereq: ["Según Electivo"] },
  { ciclo: 5, nombre: "Electivo III", creditos: 3, prereq: ["Según Electivo"] },
  { ciclo: 5, nombre: "Estrategias de Segmentación y Posicionamiento", creditos: 4, prereq: ["80 créditos aprobados", "Comportamiento del Consumidor"] },
  { ciclo: 5, nombre: "Investigación Cualitativa de Mercados", creditos: 4, prereq: ["Estadística Inferencial", "Comportamiento del Consumidor"] },
  { ciclo: 5, nombre: "Finanzas II", creditos: 4, prereq: ["Finanzas I"] },
  { ciclo: 5, nombre: "Taller: Desarrollo de Competencias Personales III", creditos: 1, prereq: ["Taller: Desarrollo de Competencias Personales II"] },

  // SEXTO CICLO
  { ciclo: 6, nombre: "Canales y Estrategias de Distribución", creditos: 4, prereq: ["Estrategias de Segmentación y Posicionamiento"] },
  { ciclo: 6, nombre: "Costeo y Estrategias de Precios", creditos: 4, prereq: ["Costos y Presupuestos"] },
  { ciclo: 6, nombre: "Derecho Empresarial", creditos: 4, prereq: ["80 créditos aprobados"] },
  { ciclo: 6, nombre: "Investigación Cuantitativa de Mercados", creditos: 4, prereq: ["Investigación Cualitativa de Mercados"] },
  { ciclo: 6, nombre: "Gestión de Proyectos de Lanzamiento de Producto", creditos: 4, prereq: ["Estrategias de Segmentación y Posicionamiento"] },
  { ciclo: 6, nombre: "Marketing de Servicios y Retail", creditos: 4, prereq: ["Estrategias de Segmentación y Posicionamiento"] },
  { ciclo: 6, nombre: "Taller: Desarrollo de Competencias Profesionales III", creditos: 1, prereq: ["Taller: Desarrollo de Competencias Profesionales II"] },

  // SEPTIMO CICLO
  { ciclo: 7, nombre: "Electivo IV", creditos: 3, prereq: ["Según Electivo"] },
  { ciclo: 7, nombre: "Electivo V", creditos: 3, prereq: ["Según Electivo"] },
  { ciclo: 7, nombre: "Formulación y Evaluación de Proyectos", creditos: 4, prereq: ["Finanzas II", "Costos y Presupuestos"] },
  { ciclo: 7, nombre: "Gestión de Ventas", creditos: 3, prereq: ["Investigación Cualitativa de Mercados"] },
  { ciclo: 7, nombre: "Investigación Cuantitativa con Modelos Multivariados", creditos: 3, prereq: ["Investigación Cuantitativa de Mercados"] },
  { ciclo: 7, nombre: "Metodología de la Investigación", creditos: 3, prereq: ["105 créditos aprobados"] },
  { ciclo: 7, nombre: "Taller: Desarrollo de Competencias Personales IV", creditos: 1, prereq: ["Taller: Desarrollo de Competencias Personales III"] },

  // OCTAVO CICLO
  { ciclo: 8, nombre: "Electivo VI", creditos: 3, prereq: ["Según Electivo"] },
  { ciclo: 8, nombre: "Electivo Internacional I", creditos: 1.5, prereq: ["Según Electivo"] },
  { ciclo: 8, nombre: "Electivo Internacional II", creditos: 1.5, prereq: ["Según Electivo"] },
  { ciclo: 8, nombre: "Entrepreneurship", creditos: 4, prereq: ["140 créditos aprobados"] },
  { ciclo: 8, nombre: "Gerencia de Operaciones", creditos: 3, prereq: ["100 créditos aprobados"] },
  { ciclo: 8, nombre: "Global Marketing", creditos: 4, prereq: ["140 créditos aprobados"] },
  { ciclo: 8, nombre: "Inteligencia de Negocios Aplicada", creditos: 4, prereq: ["Investigación Cuantitativa de Mercados"] },
  { ciclo: 8, nombre: "Taller: Desarrollo de Competencias Profesionales IV", creditos: 1, prereq: ["Taller: Desarrollo de Competencias Profesionales III"] },

  // NOVENO CICLO
  { ciclo: 9, nombre: "Electivo VII", creditos: 3, prereq: ["Según Electivo"] },
  { ciclo: 9, nombre: "Electivo VIII", creditos: 3, prereq: ["Según Electivo"] },
  { ciclo: 9, nombre: "Electivo IX", creditos: 3, prereq: ["Según Electivo"] },
  { ciclo: 9, nombre: "Electivo X", creditos: 3, prereq: ["Según Electivo"] },
  { ciclo: 9, nombre: "Electivo XI", creditos: 3, prereq: ["Según Electivo"] },
  { ciclo: 9, nombre: "E - Marketing", creditos: 3, prereq: ["Comunicaciones del Marketing"] },
  { ciclo: 9, nombre: "Taller: Desarrollo de Competencias Personales V", creditos: 1, prereq: ["Taller: Desarrollo de Competencias Personales IV"] },
  { ciclo: 9, nombre: "Trabajo de Tesis I", creditos: 3, prereq: ["140 créditos aprobados", "Metodología de la Investigación"] },

  // DÉCIMO CICLO
  { ciclo: 10, nombre: "Branding", creditos: 3, prereq: ["Comunicaciones del Marketing"] },
  { ciclo: 10, nombre: "Dirección Estratégica de Marketing", creditos: 4, prereq: ["175 créditos aprobados"] },
  { ciclo: 10, nombre: "Electivo XII", creditos: 3, prereq: ["Según Electivo"] },
  { ciclo: 10, nombre: "Electivo XIII", creditos: 3, prereq: ["Según Electivo"] },
  { ciclo: 10, nombre: "Electivo XIV", creditos: 3, prereq: ["Según Electivo"] },
  { ciclo: 10, nombre: "Taller: Desarrollo de Competencias Profesionales V", creditos: 1, prereq: ["Taller: Desarrollo de Competencias Profesionales IV"] },
  { ciclo: 10, nombre: "Trabajo de Tesis II", creditos: 3, prereq: ["Trabajo de Tesis I"] },
];

const CURSOS = CURSOS_RAW.map((c) => ({
  ...c,
  id: `c${c.ciclo}-${slug(c.nombre)}`,
}));

const STORAGE_KEY = "malla-adyma-progreso";

// -------- estado (aprobado / no aprobado) --------
function cargarEstado() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

let estado = cargarEstado();

function guardarEstado() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
}

function estaAprobado(curso) {
  return !!estado[curso.id];
}

// -------- requisitos --------
// Interpreta cada texto de requisito: un curso previo, un mínimo de
// créditos aprobados, o "Según Electivo" (informativo, no bloquea).
function parseRequisito(texto) {
  const credMatch = texto.match(/^(\d+)\s*créditos aprobados$/i);
  if (credMatch) return { tipo: "credito", valor: parseInt(credMatch[1], 10), texto };
  if (/^según electivo$/i.test(texto.trim())) return { tipo: "libre", texto };
  return { tipo: "curso", nombre: texto, texto };
}

function requisitoCumplido(req) {
  if (req.tipo === "credito") return creditosAprobados() >= req.valor;
  if (req.tipo === "libre") return true;
  const cursoPrevio = CURSOS.find((c) => c.nombre === req.nombre);
  return cursoPrevio ? estaAprobado(cursoPrevio) : false;
}

function requisitosDe(curso) {
  return curso.prereq.map(parseRequisito);
}

function cumpleRequisitos(curso) {
  return requisitosDe(curso).every(requisitoCumplido);
}

function toggleAprobado(curso) {
  const yaAprobado = estaAprobado(curso);
  // Solo se puede desmarcar libremente; para marcar como aprobado
  // el curso debe cumplir sus requisitos.
  if (!yaAprobado && !cumpleRequisitos(curso)) return;
  estado[curso.id] = !yaAprobado;
  guardarEstado();
  render();
}

// -------- cálculo de créditos --------
const CURSOS_CON_CREDITO = CURSOS.filter((c) => c.ciclo >= 1); // ciclo 0 no suma
const CREDITOS_TOTALES = CURSOS_CON_CREDITO.reduce((sum, c) => sum + c.creditos, 0);

function creditosAprobados() {
  return CURSOS_CON_CREDITO.reduce((sum, c) => sum + (estaAprobado(c) ? c.creditos : 0), 0);
}

function fmtCreditos(n) {
  return Number.isInteger(n) ? String(n) : n.toFixed(1).replace(/\.0$/, "");
}

// -------- render --------
function render() {
  const aprobados = creditosAprobados();
  const pendientes = CREDITOS_TOTALES - aprobados;
  const pct = CREDITOS_TOTALES ? (aprobados / CREDITOS_TOTALES) * 100 : 0;

  document.getElementById("pct-label").textContent = `${pct.toFixed(1)}%`;
  document.getElementById("barra-fill").style.width = `${pct}%`;
  document.getElementById("creditos-totales").textContent = fmtCreditos(CREDITOS_TOTALES);
  document.getElementById("creditos-aprobados").textContent = fmtCreditos(aprobados);
  document.getElementById("creditos-pendientes").textContent = fmtCreditos(pendientes);

  const cursosCompletados = CURSOS_CON_CREDITO.filter(estaAprobado).length;
  document.getElementById("cursos-label").textContent =
    `${cursosCompletados} / ${CURSOS_CON_CREDITO.length} cursos`;

  renderCiclos();
  renderRuta(pct);
}

function renderCiclos() {
  const cont = document.getElementById("malla");
  cont.innerHTML = "";

  const ciclos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  ciclos.forEach((n) => {
    const cursosDelCiclo = CURSOS.filter((c) => c.ciclo === n);
    if (!cursosDelCiclo.length) return;

    const totalCiclo = cursosDelCiclo.reduce((s, c) => s + c.creditos, 0);
    const aprobCiclo = cursosDelCiclo.reduce((s, c) => s + (estaAprobado(c) ? c.creditos : 0), 0);
    const pctCiclo = totalCiclo ? (aprobCiclo / totalCiclo) * 100 : 0;

    const col = document.createElement("section");
    col.className = "columna";
    col.style.setProperty("--ciclo-hue", huePorCiclo(n));

    col.innerHTML = `
      <header class="columna-header">
        <span class="columna-num">${n === 0 ? "Intro" : n}</span>
        <h2>${n === 0 ? "Ciclo introductorio" : `Ciclo ${n}`}</h2>
        <span class="columna-creditos">${fmtCreditos(totalCiclo)} cr.</span>
      </header>
      <div class="columna-progreso"><div class="columna-progreso-fill" style="width:${pctCiclo}%"></div></div>
    `;

    const lista = document.createElement("div");
    lista.className = "lista-cursos";

    cursosDelCiclo.forEach((curso) => {
      lista.appendChild(renderCurso(curso));
    });

    col.appendChild(lista);
    cont.appendChild(col);
  });
}

function renderCurso(curso) {
  const aprobado = estaAprobado(curso);
  const requisitos = requisitosDe(curso);
  const habilitado = aprobado || requisitos.every(requisitoCumplido);
  const tienePrereq = curso.prereq.length > 0;

  const card = document.createElement("article");
  card.className = "curso" + (aprobado ? " aprobado" : habilitado ? "" : " bloqueado");

  const main = document.createElement("button");
  main.type = "button";
  main.className = "curso-main";
  main.setAttribute("aria-pressed", String(aprobado));
  main.disabled = !aprobado && !habilitado;
  if (main.disabled) main.title = "Aún no cumples los prerrequisitos de este curso";
  main.innerHTML = `
    <span class="curso-check" aria-hidden="true"></span>
    <span class="curso-info">
      <span class="curso-nombre">${curso.nombre}</span>
      <span class="curso-creditos">${fmtCreditos(curso.creditos)} cr.</span>
    </span>
  `;
  main.addEventListener("click", () => toggleAprobado(curso));
  card.appendChild(main);

  if (tienePrereq) {
    const details = document.createElement("details");
    details.className = "curso-prereq";

    const summary = document.createElement("summary");
    summary.textContent = habilitado ? "Prerrequisitos" : "Prerrequisitos pendientes";
    details.appendChild(summary);

    const ul = document.createElement("ul");
    requisitos.forEach((req) => {
      const li = document.createElement("li");
      li.textContent = req.texto;
      li.className = req.tipo === "libre" ? "libre" : requisitoCumplido(req) ? "cumplido" : "pendiente";
      ul.appendChild(li);
    });
    details.appendChild(ul);

    card.appendChild(details);
  }

  return card;
}

function huePorCiclo(n) {
  // recorre de azul (ciclo 1) a ámbar (ciclo 10); intro en gris
  if (n === 0) return 210;
  const t = (n - 1) / 9;
  return Math.round(210 - t * 155); // 210 -> 55
}

function renderRuta(pctGlobal) {
  const ruta = document.getElementById("ruta");
  ruta.innerHTML = "";
  for (let n = 1; n <= 10; n++) {
    const cursosDelCiclo = CURSOS_CON_CREDITO.filter((c) => c.ciclo === n);
    const totalCiclo = cursosDelCiclo.reduce((s, c) => s + c.creditos, 0);
    const aprobCiclo = cursosDelCiclo.reduce((s, c) => s + (estaAprobado(c) ? c.creditos : 0), 0);
    const completo = totalCiclo > 0 && aprobCiclo >= totalCiclo;

    const paso = document.createElement("div");
    paso.className = "paso" + (completo ? " completo" : "");
    paso.style.setProperty("--ciclo-hue", huePorCiclo(n));
    paso.innerHTML = `<span>${n}</span>`;
    paso.title = `Ciclo ${n}: ${fmtCreditos(aprobCiclo)} / ${fmtCreditos(totalCiclo)} cr.`;
    ruta.appendChild(paso);
  }
}

render();

const btnReiniciar = document.getElementById("reiniciar");
if (btnReiniciar) {
  btnReiniciar.addEventListener("click", () => {
    const ok = confirm("¿Borrar todo tu progreso guardado en este navegador? Esta acción no se puede deshacer.");
    if (!ok) return;
    estado = {};
    guardarEstado();
    render();
  });
}
