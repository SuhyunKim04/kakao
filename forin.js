const imgInfo = [
  {
    src: "../images/icons/pause.svg",
    alt: "pause",
  },
  {
    src: "../images/icons/play.svg",
    alt: "play",
  },
];

const obj = {
  name: "ejey",
  mbti: "infj",
};

for (let a in obj) {
  console.log(`${a}는${obj[a]} 입니다`);
}

// console.log(obj["name"]);
// console.log(obj.name);

// name은 EJEY 입니다.
// MPTI는  INFJ 입니다.
