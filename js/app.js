const quizdata = [
    {
        question:"What does CSS stand for?",
        a:"Central Style Sheet",
        b:"Cascading Style sheet",
        c:"Cascding Simple sheets",
        d:"Century System Sheets",
        e:"Control Style Sheets",
        correct:"b"
    },

    {
        question:"What does HTML stand for?",
        a:"HyperText Markup Language",
        b:"Hyper to make language",
        c:"Highest in the room",
        d:"Hyper To Mark Line",
        e:"Control Style Sheets",
        correct:"a"
    },

    {
        question:"What year was Javascript launched ?",
        a:"1996",
        b:"1995",
        c:"1885",
        d:"1990",
        e:"2000",
        correct:"b"
    },
    {
        question:"What language runs in a browser?",
        a:"C",
        b:"Java",
        c:"Python",
        d:"Javascript",
        e:"Php",
        correct:"d"
    },
];

// console.log(quizdata);
const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const answerels = document.querySelectorAll('.answer');

// console.log(answers);
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text');

const submit = document.getElementById('submit');

let currentquiz = 0;
let score = 0;

function loadquiz (){
    const currentquizdata = quizdata[currentquiz];

    deselected();

    question.innerText = currentquizdata.question;
    a_text.innerText = currentquizdata.a;
    b_text.innerText = currentquizdata.b;
    c_text.innerText = currentquizdata.c;
    d_text.innerText = currentquizdata.d;
    e_text.innerText = currentquizdata.e;
}

loadquiz();

function deselected(){
    answerels.forEach((answerel)=> answerel.checked = false);
}

function getselected(){
    let answer;

    answerels.forEach((answerel)=>{
        // console.log(answerel);
        if(answerel.checked){
            answer = answerel.id;
        }

    })

    return answer;
}





submit.addEventListener('click',()=>{
    // console.log("hya");
    // console.log(getselected());

    let answer = getselected();

    if(answer){
        if(answer === quizdata[currentquiz].correct){
            score++;
        }

        currentquiz++;

        if(currentquiz < quizdata.length){
            loadquiz();
        }
        else{
            quiz.innerHTML=` 
                <h2>You answered correct at ${score} / ${quizdata.length}</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    };
    
});





