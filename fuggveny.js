function felsorolasOssz(lista) {
  let txt = "<ul>";
  for (let i = 0; i < lista.length; i++) {
    txt += `<li> Típus: ${lista[i].tipus}, ár: ${lista[i].ar} </li>`;
  }
  txt += "</ul>";
  return txt;
}

export function divFetltoltes(lista) {
  let txt = "";
  for (let i = 0; i < lista.length; i++) {
    txt += `<div class='termek'><h3>${lista[i].tipus}</h3><p>${lista[i].szin}</p><p>${lista[i].ar}</p></div>`;
  }
  return txt;
}

export function osszAr(lista) {
  let ar = 0;
  for (let i = 0; i < lista.length; i++) {
    ar += lista[i].ar;
  }
  return "<p>A cipők össz. ára: " + ar + "</p><br>";
}

export function legdragabb(lista) {
  let m = 0;
  for (let i = 1; i < lista.length; i++) {
    if (lista[m].ar < lista[i].ar) {
      m = i;
    }
  }
  return "<p>A legdrágább cipő: " + lista[m].tipus + "</p><br>";
}

export function hany(lista) {
  let szamlalo = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].tipus === "Körömcipő") {
      szamlalo++;
    }
  }
  return "<p>" + szamlalo + "db körömcipő van.</p>";
}

export default felsorolasOssz;
