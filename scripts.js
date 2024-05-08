/* Estils generals */
body, html {
  font-family: 'Courier', monospace; /* Utilitza la lletra Courier per a tot el text */
  margin: 0;
  padding: 0;
  background-color: #e8f5e9; /* Fons verd molt clar */
  color: #333; /* Color del text */
}

header {
  background-color: #333;
  color: white;
  padding: 10px 20px;
  display: flex;
  flex-direction: column; /* Organitza els elements verticalment */
  align-items: center; /* Centra els elements horitzontalment */
  width: 100%; /* Assegura que el capçal pren tota l'amplada */
}

.banner img {
  width: 100%; /* El banner ocupa tota l'amplada del capçal */
  height: auto; /* Manté les proporcions del banner */
}

nav .menu, .main-menu {
  width: 100%; /* Assegura que la navegació ocupa tota l'amplada */
  text-align: center; /* Centra el menú dins de la navegació */
}

.main-menu {
  list-style-type: none; /* Elimina els punts dels ítems de la llista */
  padding: 0; /* Elimina el padding predeterminat */
  margin: 20px 0; /* Afegeix un marge vertical per separar del banner */
  display: flex; /* Utilitza flex per ajustar els ítems de la llista en línia */
  justify-content: center; /* Centra els ítems de la llista horitzontalment */
  background-color: #333; /* Fons per a la barra del menú */
}

.main-menu li {
  position: relative; /* Posició relativa per als submenús */
}

.main-menu li a, .dropbtn {
  display: block;
  color: rgb(228, 236, 229);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.main-menu li a:hover, .dropdown:hover .dropbtn {
  background-color: #555;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #393838;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

footer {
  background-color: #388e3c; /* Color de fons del peu de pàgina */
  color: #ffffff; /* Color del text del peu de pàgina */
  text-align: center; /* Centra el text del peu de pàgina */
  padding: 10px 0; /* Padding vertical per al peu de pàgina */
}
main {
  display: flex; /* Estableix main com un contenidor flex */
  flex-direction: column; /* Elements apilats verticalment */
  align-items: center; /* Centra els elements horitzontalment */
  justify-content: center; /* Centra els elements verticalment */
  min-height: 80vh; /* Assegura que main té una alçada mínima */
  padding: 20px; /* Espai al volt
