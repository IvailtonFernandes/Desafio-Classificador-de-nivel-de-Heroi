const btnOpenModal = document.getElementById("btn-calculate-xp");
const btnCloseModal = document.getElementById("btn-close-modal");

btnOpenModal.addEventListener("click", () => {
  const modal = document.getElementById("level-modal");
  const heroName = document.getElementById("name");
  const heroNameSpan = document.getElementById("hero-name");
  const heroXP = document.getElementById("xp");
  const levelTitle = modal.querySelector("h2");
  const levelDesc = modal.querySelector("p");

  heroNameSpan.textContent = heroName.value;

  let level = " ";
  let description = " ";

  switch (true) {
    case heroXP.value <= 1000:
      level = "Ferro";
      description =
        "Um herói em seus primeiros passos. Ainda há muito a aprender, mas a coragem já é sua maior arma.";
      break;
    case heroXP.value >= 1001 && heroXP.value <= 2000:
      level = "Bronze";
      description =
        "A jornada começou de verdade. Seus feitos já ecoam entre os mais humildes vilarejos.";
      break;
    case heroXP.value >= 2001 && heroXP.value <= 5000:
      level = "Prata";
      description =
        "Com habilidade e determinação, o herói começa a ser reconhecido nas tavernas e campos de batalha.";
      break;
    case heroXP.value >= 5001 && heroXP.value <= 7000:
      level = "Ouro";
      description =
        "Um guerreiro experiente e respeitado. Seus feitos inspiram outros a seguirem seus passos.";
      break;
    case heroXP.value >= 7001 && heroXP.value <= 8000:
      level = "Platina";
      description =
        "Poucos alcançam este nível. Estratégia, força e honra caminham ao lado deste herói lendário.";
      break;
    case heroXP.value >= 8001 && heroXP.value <= 9000:
      level = "Ascendente";
      description =
        "Um ser à beira da transcendência. Sua presença muda o rumo das batalhas e das histórias.";
      break;
    case heroXP.value >= 9001 && heroXP.value <= 10000:
      level = "Imortal";
      description =
        "As lendas falam sobre você. Não pela quantidade de inimigos derrotados, mas por aquilo que representa.";
      break;
    default:
      level = "Radiante";
      description =
        "Um herói de luz inigualável. Não existe mais limite para seu poder — você é a própria lenda viva.";
  }

  levelTitle.textContent = level;
  levelDesc.textContent = description;

  modal.showModal();
});

btnCloseModal.addEventListener("click", () => {
  const modal = document.getElementById("level-modal");
  console.log("Fechando modal");
  modal.close();
});