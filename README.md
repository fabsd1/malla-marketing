# Malla curricular — Administración y Marketing (ESAN)

Malla interactiva de la carrera de Administración y Marketing de la
Universidad ESAN (plan aprobado por Acuerdo N°011-03/2023).

## Qué hace

- Muestra los 72 cursos de la carrera organizados por ciclo (ciclo
  introductorio + 10 ciclos regulares).
- Cada curso se marca como **aprobado** con un clic; el progreso se
  guarda en el navegador (localStorage), no requiere cuenta ni backend.
- Barra de progreso general en % y una fila de 10 pasos (uno por
  ciclo) que se colorea al completar cada ciclo.
- Créditos totales, aprobados y pendientes, calculados automáticamente.
- Prerrequisitos de cada curso en una lista desplegable ("Prerrequisitos").

## Uso local

Solo son archivos estáticos (`index.html`, `style.css`, `script.js`).
Puedes abrir `index.html` directamente en el navegador, o publicarlo
con GitHub Pages: **Settings → Pages → Deploy from branch → main / (root)**.

## Actualizar los datos de los cursos

Todos los cursos, créditos y prerrequisitos están en el arreglo
`CURSOS_RAW` al inicio de `script.js`. Edita esa lista si el plan de
estudios cambia.
