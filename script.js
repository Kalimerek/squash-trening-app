document.addEventListener("DOMContentLoaded", function () {
  const exercises = [
    {
      name: "Boast i do środka",
      description:
        "Uczeń stojąc z tyłu zagrywa na zmianę drive i boast, trener z przodu po boast gra albo cross, albo drop (wtedy uczeń odpowiada crossem).",
      skills: ["uważność", "wracanie"],
      shots: ["boast", "drive", "cross"],
      players: ["1", "2"],
    },
    {
      name: "Boasty I drive",
      description:
        "Dwie osoby stojące po bokach grają boasta, osoba na środku odgrywa piłkę drivem",
      skills: ["uważność"],
      shots: ["boast", "drive"],
      players: ["3"],
    },
    {
      name: "Odbierzesz loba czy drive’a?",
      description:
        "Osoba A zaczyna boastem -> osoba B drop do siebie, a następnie cross-lob / drive do tyłu -> osoba A odbiera drivem do siebie, a następnie odgrywa boastem / drivem do siebie i odgrywa dropem do przodu.",
      skills: ["wracanie do środka kortu"],
      shots: ["boast", "lob", "drop", "cross"],
      players: ["1", "2"],
    },
    {
      name: "Presja na line i atak",
      description:
        "Wymiana na BH lub FH, jeśli piłka spadnie przed linię środkową, można zagrać atakującego crossa.",
      skills: ["atak"],
      shots: ["cross", "drive"],
      players: ["1", "2"],
    },
    {
      name: "Panowanie nad piłką z woleja",
      description:
        "Wolej do siebie, wolej po crossie, odbiór drivem i dopiero wtedy piłkę przejmuje druga strona - ćwiczenie na FH i BH, z połowy kortu.",
      skills: ["refleks"],
      shots: ["wolej"],
      players: ["2"],
    },
  ];

  const searchInput = document.getElementById("searchInput");
  const resultsDiv = document.getElementById("results");

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase().split(",").map((q) => q.trim());
    resultsDiv.innerHTML = "";

    const filtered = exercises.filter((ex) => {
      return query.some(
        (q) =>
          ex.skills.some((s) => s.toLowerCase().includes(q)) ||
          ex.shots.some((s) => s.toLowerCase().includes(q)) ||
          ex.players.includes(q)
      );
    });

    if (filtered.length === 0 && query[0] !== "") {
      resultsDiv.innerHTML = "<p>Brak ćwiczeń spełniających kryteria.</p>";
      return;
    }

    filtered.forEach((ex) => {
      const div = document.createElement("div");
      div.className = "result";
      div.innerHTML = `<h2>${ex.name}</h2>
        <p><strong>Opis:</strong> ${ex.description}</p>
        <p><strong>Umiejętności:</strong> ${ex.skills.join(", ")}</p>
        <p><strong>Zagrania:</strong> ${ex.shots.join(", ")}</p>
        <p><strong>Liczba osób:</strong> ${ex.players.join(", ")}</p>`;
      resultsDiv.appendChild(div);
    });
  });
});
