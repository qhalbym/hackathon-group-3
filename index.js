let score = 4
let namaPemain = "abi"
let pertanyaan = {}

function randomQuestion() {
  let listMovie = [
    {
      question: "<em>What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?</em>",
      option: [2005, 2008, 2010, 2012],
      answer: 2008,
    },
    {
      question: "<em>WWhat is the name of Thor hammer?</em>",
      option: ["Vanir", "Mjolnir", "Aesir", "Norn"],
      answer: "Mjolnir",
    },
    {
      question: "<em>In the Incredible Hulk, what does Tony tell Thaddeus Ross at the end of the film?</em>",
      option: ["That he wants to study The Hulk", "That he knows about S.H.I.E.L.D.", "That they are putting a team together", "That Thaddeus owes him money"],
      answer: "That they are putting a team together",
    },
    {
      question: "<em>The Flerkens are a race of extremely dangerous aliens that resembles what?</em>",
      option: ["Cats", "Ducks", "Reptiles", "Raccoons"],
      answer: "Cats",
    },
    {
      question: "<em>Before becoming Vision, what is the name of Iron Man A.I. butler?</em>",
      option: ["H.O.M.E.R.", "J.A.R.V.I.S.", "A.L.F.R.E.D.", "M.A.R.V.I.N."],
      answer: "J.A.R.V.I.S.",
    },
    {
      question: "<em>What is the alien race Loki sends to invade Earth in The Avengers?</em>",
      option: ["The Chitauri", "The Skrulls", "The Kree", "The Flerkens"],
      answer: "The Chitauri",
    },
    {
      question: "<em>Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet?</em>",
      option: ["Thor", "Loki", "The Collector", "Tony Stark"],
      answer: "Loki",
    },
    {
      question: "<em>Who is killed by Loki in the Avengers?</em>",
      option: ["Maria Hill", "Nick Fury", "Agent Coulson", "Thanos"],
      answer: "Agent Coulson",
    },
    {
      question: "<em>What fake name does Natasha use when she first meets Tony?</em>",
      option: ["Natalie Rushman", "Natalia Romanoff", "TNicole Rohan", "Naya Rabe"],
      answer: "Natalie Rushman",
    },
    {
      question: "<em>About which city do Hawkeye and Black Widow often reminisce</em>",
      option: ["Budapest", "Prague", "Istanbul", "Sokovia"],
      answer: "Budapest",
    },
    {
      question: "<em>Who does the Mad Titan sacrifice to acquire the Soul Stone?</em>",
      option: ["Nebula", "Ebony Maw", "Cull Obsidian", "Gamora"],
      answer: "Gamora",
    },
    {
      question: "<em>What word does Tony utter that makes Steve say Language?</em>",
      option: ["Crap!", "Asshole", "Shit", "Idiot"],
      answer: "Shit",
    },
    {
      question: "<em>Who is Black Panther sister?</em>",
      option: ["Shuri", "Nakia", "Ramonda", "Okoye"],
      answer: "Shuri",
    },
    {
      question: "<em>What landmark does Peter Parker rescue his classmates from in Spider-Man: Homecoming?</em>",
      option: ["Washington Monument", "Statue of Liberty", "Mount Rushmore", "Golden Gate Bridge"],
      answer: "Washington Monument",
    },
    {
      question: "<em>What type of doctor is Stephen Strange?</em>",
      option: ["Neurosurgeon", "Cardiothoracic Surgeon", "Trauma Surgeon", "Plastic Surgeon"],
      answer: "Neurosurgeon",
    },
  ];
  
  //random pertanyaan2
  let randIndex = Math.floor(Math.random() * listMovie.length)
  pertanyaan = listMovie[randIndex]
  return listMovie[randIndex]
}

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

function loginBtn(playerName){
  let alfabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ '
  let countAlphabetName = 0
  for(let i = 0; i < playerName.length; i++){
    for(let j = 0; j < alfabet.length; j++){
      if(playerName[i] === alfabet[j]){
        countAlphabetName++
      }
    }
  }

  if(!playerName){
    return 'Silahkan input Player terlebih dahulu'
  } else if(countAlphabetName !== playerName.length){
    return 'Nama tidak boleh berkarakter'
  }else if(playerName.length < 3){
    return 'Minimal mengisi 3 alfabet'
  } else {
    return `Hallo ${playerName}, Semoga berhasil menjawab!`
  }
}

function checkJawaban(jawaban, jawabanBenar) { //Jawaban adalah value dari tombol yg dipilih user, jawabanBenar adalah jawaban dari object pertanyaan
  if (jawaban == jawabanBenar) {
    score++
    return "Jawaban Benar"
  } else {
    return "Jawaban Salah Coba Lagi"
  }
}
