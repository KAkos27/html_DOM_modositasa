import cipoLista from "./adat.js";
import felsorolasOssz from "./fuggveny.js";
import { divFetltoltes } from "./fuggveny.js";
import { osszAr } from "./fuggveny.js";
import { legdragabb } from "./fuggveny.js";
import { hany } from "./fuggveny.js";

const cipok = document.querySelector("#cipok");
const txt = felsorolasOssz(cipoLista);

cipok.innerHTML = "<h3>Szép nap van</h3>";
cipok.innerHTML += txt;

const div = document.querySelector("#dives");
const divSzoveg = divFetltoltes(cipoLista);
div.innerHTML += divSzoveg;

const ossz = document.querySelector("#osszegzes");
const osszegzes = osszAr(cipoLista);
const draga = legdragabb(cipoLista);
const db = hany(cipoLista);

ossz.innerHTML += osszegzes;
ossz.innerHTML += draga;
ossz.innerHTML += db;
