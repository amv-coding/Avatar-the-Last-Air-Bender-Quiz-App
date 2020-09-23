//this is the file to store the quiz questions 
const STORE = {
  questions: [//1
    {
      question: 'What kind of bender is Katara?',
      answers: [
        'Fire',
        'Water',
        'Earth',
        'Air'
      ],
      correctAnswer: 'Water'
    },
    //2
    {
      question: 'What is the name of Aangs Flying-Bison?',
      answers: [
        'Appa',
        'Ap',
        'Papa',
        'not appa'
      ],
      correctAnswer: 'Appa'
    },
    //3
    {
      question: 'How long was Aang missing for?',
      answers: [
        '100 years',
        '100 days',
        '10 years',
        '1 day'
      ],
      correctAnswer: '100 years'
    },
    //4
    {
      question: 'What is name of Zukos uncle?',
      answers: ['Fire', 'Pyro', 'Iroh', 'Flames'],
      correctAnswer: 'Iroh'
    },
    //5
    {
      question: 'How many seasons was the show aired for?',
      answers: [
        '3',
        '4',
        '5',
        '2'
      ],
      correctAnswer: '3'
    }
  ],
  quizStarted: false,
  currentQuestion: 0,
  score: 0
};
