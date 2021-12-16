let countGame = 0
let score = 0
let namaPemain = ""
let getNama = document.getElementById("nama-pemain")
let getScore = document.getElementById("score-board")
let currentPertanyaan = {}
let sudahMuncul = {}
let btnJawaban1 = document.getElementById("jawaban-1")
let btnJawaban2 = document.getElementById("jawaban-2")
let btnJawaban3 = document.getElementById("jawaban-3")
let btnJawaban4 = document.getElementById("jawaban-4")



function randomQuestion() {
  let listMovie = [
    {
      id: 1,
      question: "<em>What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?</em>",
      option: [2005, 2008, 2010, 2012],
      answer: 2008,
    },
    {
      id: 2,
      question: "<em>WWhat is the name of Thor hammer?</em>",
      option: ["Vanir", "Mjolnir", "Aesir", "Norn"],
      answer: "Mjolnir",
    },
    {
      id: 3,
      question: "<em>In the Incredible Hulk, what does Tony tell Thaddeus Ross at the end of the film?</em>",
      option: ["That he wants to study The Hulk", "That he knows about S.H.I.E.L.D.", "That they are putting a team together", "That Thaddeus owes him money"],
      answer: "That they are putting a team together",
    },
    {
      id: 4,
      question: "<em>The Flerkens are a race of extremely dangerous aliens that resembles what?</em>",
      option: ["Cats", "Ducks", "Reptiles", "Raccoons"],
      answer: "Cats",
    },
    {
      id: 5,
      question: "<em>Before becoming Vision, what is the name of Iron Man A.I. butler?</em>",
      option: ["H.O.M.E.R.", "J.A.R.V.I.S.", "A.L.F.R.E.D.", "M.A.R.V.I.N."],
      answer: "J.A.R.V.I.S.",
    },
    {
      id: 6,
      question: "<em>What is the alien race Loki sends to invade Earth in The Avengers?</em>",
      option: ["The Chitauri", "The Skrulls", "The Kree", "The Flerkens"],
      answer: "The Chitauri",
    },
    {
      id: 7,
      question: "<em>Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet?</em>",
      option: ["Thor", "Loki", "The Collector", "Tony Stark"],
      answer: "Loki",
    },
    {
      id: 8,
      question: "<em>Who is killed by Loki in the Avengers?</em>",
      option: ["Maria Hill", "Nick Fury", "Agent Coulson", "Thanos"],
      answer: "Agent Coulson",
    },
    {
      id: 9,
      question: "<em>What fake name does Natasha use when she first meets Tony?</em>",
      option: ["Natalie Rushman", "Natalia Romanoff", "TNicole Rohan", "Naya Rabe"],
      answer: "Natalie Rushman",
    },
    {
      id: 10,
      question: "<em>About which city do Hawkeye and Black Widow often reminisce</em>",
      option: ["Budapest", "Prague", "Istanbul", "Sokovia"],
      answer: "Budapest",
    },
    {
      id: 11,
      question: "<em>Who does the Mad Titan sacrifice to acquire the Soul Stone?</em>",
      option: ["Nebula", "Ebony Maw", "Cull Obsidian", "Gamora"],
      answer: "Gamora",
    },
    {
      id: 12,
      question: "<em>What word does Tony utter that makes Steve say Language?</em>",
      option: ["Crap!", "Asshole", "Shit", "Idiot"],
      answer: "Shit",
    },
    {
      id: 13,
      question: "<em>Who is Black Panther sister?</em>",
      option: ["Shuri", "Nakia", "Ramonda", "Okoye"],
      answer: "Shuri",
    },
    {
      id: 14,
      question: "<em>What landmark does Peter Parker rescue his classmates from in Spider-Man: Homecoming?</em>",
      option: ["Washington Monument", "Statue of Liberty", "Mount Rushmore", "Golden Gate Bridge"],
      answer: "Washington Monument",
    },
    {
      id: 1,
      question: "<em>What type of doctor is Stephen Strange?</em>",
      option: ["Neurosurgeon", "Cardiothoracic Surgeon", "Trauma Surgeon", "Plastic Surgeon"],
      answer: "Neurosurgeon",
    },
  ];

  //random pertanyaan2
  let randIndex = Math.floor(Math.random() * listMovie.length)
  if (!sudahMuncul[randIndex]) {
    sudahMuncul[randIndex] = 0
    pertanyaan = listMovie[randIndex]
  } else {
    while (sudahMuncul[randIndex]) {
      randIndex = Math.floor(Math.random() * listMovie.length)
      if (!sudahMuncul[randIndex]) {
        pertanyaan = listMovie[randIndex]
        break
      }
    }
  }
  let colPertanyaan = document.getElementById("pertanyaan")
  colPertanyaan.innerHTML = pertanyaan.question
  btnJawaban1.innerHTML = pertanyaan.option[0]
  btnJawaban2.innerHTML = pertanyaan.option[1]
  btnJawaban3.innerHTML = pertanyaan.option[2]
  btnJawaban4.innerHTML = pertanyaan.option[3]
  currentPertanyaan = pertanyaan
}
randomQuestion()

function getReward(score) {
  let output = ""
  let reward = ["Paling baik", "Boleh lah", "Alakadarnya", "Ejek Pemainnya"] // Nanti isi reward popup dari frontend
  if (score >= 9) {
    output = reward[0]
  } else if (score >= 7) {
    output = reward[1]
  } else if (score >= 5) {
    output = reward[2]
  } else {
    output = reward[3]
  }
  return output // output create element untuk popup berdasarkan score
}

function loginBtn(playerName) {
  let alfabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ '
  let countAlphabetName = 0
  for (let i = 0; i < playerName.length; i++) {
    for (let j = 0; j < alfabet.length; j++) {
      if (playerName[i] === alfabet[j]) {
        countAlphabetName++
      }
    }
  }

  if (!playerName) {
    return 'Silahkan input Player terlebih dahulu'
  } else if (countAlphabetName !== playerName.length) {
    return 'Nama tidak boleh berkarakter'
  } else if (playerName.length < 3) {
    return 'Minimal mengisi 3 alfabet'
  } else {
    return `Hallo ${playerName}, Semoga berhasil menjawab!`
  }
}

function checkJawaban(jawaban) { //Jawaban adalah value dari tombol yg dipilih user, jawabanBenar adalah jawaban dari object pertanyaan
  let getJawaban = currentPertanyaan.option[jawaban]
  if (getJawaban == currentPertanyaan.answer) {
    score++
    getScore.innerHTML = score
  }
  countGame++
  console.log(countGame)

  if (countGame === 10) {
    let reward = getReward(score)
    console.log(reward)
    // return reward
    score = 0
    countGame = 0
  }
  randomQuestion()
}

function login(event) {
  event.preventDefault()
  
  let namaField = document.getElementById("nama")
  let ageField = document.getElementById("age")
  namaPemain = namaField.value;
  getNama.innerHTML = namaPemain
  let umur = Number(ageField.value);
  

  if (!namaPemain || !umur) {
    alert("nama & umur harus diisi")
    } else if (typeof namaPemain === "string" && typeof umur === "number") {
      afterLogin()
  } else  {
    alert("nama & umur harus diisi")
  }

}

function afterLogin() {
 
  let login = document.getElementById("login")
  let main = document.getElementById("main")
  login.style.display = "none";
  main.style.display = "block"
}

function beforeLogin() {
 
  let login = document.getElementById("login")
  let main = document.getElementById("main")
  login.style.display = "flex";
  main.style.display = "none"
}

beforeLogin()

let audioBatman = document.getElementById("audio")
function batman() {
  audioBatman.play()
}
