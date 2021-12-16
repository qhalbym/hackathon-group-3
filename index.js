function randomQuestion(array) {
  //random pertanyaan2
  let randIndex = Math.floor(Math.random() * array.length)
  return array[randIndex]
}

let mcu = [
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
    option: ["Adamantium", "Vibranium", "Promethium", "Carbonadium"],
    answer: "Vibranium",
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
    question: "<em>Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet?</em>",
    option: ["Thor", "Loki", "The Collector", "Tony Stark"],
    answer: "Loki",
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