
const exercises = [
  {
    name: "Boast i do środka",
    description: "Uczeń stojąc z tyłu zagrywa na zmianę drive i boast, trener z przodu po boast gra albo cross, albo drop (wtedy uczeń odpowiada crossem).",
    skills: ["uważność", "wracanie"],
    shots: ["boast", "drive", "cross"],
    players: ["1", "2"]
  },
  {
    name: "Boasty i drive",
    description: "Dwie osoby stojące po bokach grają boasta, osoba na środku odgrywa piłkę drivem",
    skills: ["uważność"],
    shots: ["boast", "drive"],
    players: ["3"]
  },
  {
    name: "Odbierzesz loba czy drive’a?",
    description: "Osoba A zaczyna boastem -> osoba B drop do siebie, a następnie cross-lob / drive do tyłu -> osoba A odbiera drivem do siebie, a następnie odgrywa boastem / drivem do siebie i odgrywa dropem do przodu.",
    skills: ["wracanie do środka kortu"],
    shots: ["boast", "lob", "drop", "cross"],
    players: ["1", "2"]
  },
  {
    name: "Presja na line i atak",
    description: "Wymiana na BH lub FH, jeśli piłka spadnie przed linię środkową, można zagrać atakującego crossa.",
    skills: ["atak"],
    shots: ["cross", "drive"],
    players: ["1", "2"]
  },
  {
    name: "Panowanie nad piłką z woleja",
    description: "Wolej do siebie, wolej po crossie, odbiór drivem i dopiero wtedy piłkę przejmuje druga strona - ćwiczenie na FH i BH, z połowy kortu.",
    skills: ["refleks"],
    shots: ["wolej"],
    players: ["2"]
  },
 {
    name: "Poprawa techniki line'a i boasta",
    description: "Osoby A i B - stojące po bokach - grają drive do siebie, a potem boast, osoba C - stojąca na środku - odgrywa driveami",
    skills: ["technika"],
    shots: ["drive", "boast"],
    players: ["3"]
  },
   {
    name: "Drop czy boast",
    description: "Osoba z tyłu gra najpierw drive do siebie, a następnie drop albo boast. Osoba na środku musi rozpoznać zagranie i odebrać oraz odegrać - crossem albo drivem.",
    skills: ["uważność"],
    shots: ["drive", "boast", "drop", "cross"],
    players: ["2"]
  },
    {
    name: "Drop do siebie i na tył",
    description: "Osoba z tyłu gra drive, osoba z przodu dropa do siebie, a następnie drive'a do tyłu. Ćwiczenie wymaga szybkiego przejścia z krótkiego zamachu dropowego, do pełnego drive'owego",
    skills: ["refleks", "wracanie"],
    shots: ["drive", "drop"],
    players: ["1", "2"]
  },
    {
    name: "eLka",
    description: "Jedna ćwiartka kortu zostaje wyłączona z gry, na pozostałych 3 grają dwie osoby rozpoczynając serwisem. Wpadnięcie piłki w ćwiartkę niegrającą (serwisowa jest niegrająca) jest traktowane jak aut. Zawodnik, który traci punkt, schodzi, a w jego miejsce wchodzi jedna z osób oczekujących"],
    skills: ["wracanie", "gra"],
    shots: ["drive", "drop", "boast", "cross"],
    players: ["2", "3", "4"]
  }

];

document.getElementById("searchInput").addEventListener("input", function() {
