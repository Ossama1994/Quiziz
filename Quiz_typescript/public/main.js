"use strict";
const quiz = {
    "questions": [{
            "questionText": "Which of the following does TypeScript use to specify types?",
            "options": [{
                    "text": ":",
                    "correct": true
                },
                {
                    "text": ";"
                },
                {
                    "text": "!"
                },
                {
                    "text": "&"
                }
            ],
            "explanation": "TS uses a colon (:) to separate the property name from the property type"
        },
        {
            "questionText": "Which of the following is NOT a type used in TypeScript?",
            "options": [{
                    "text": "number"
                },
                {
                    "text": "string"
                },
                {
                    "text": "boolean"
                },
                {
                    "text": "enum",
                    "correct": true
                }
            ],
            "explanation": "enum is not used as a type in TypeScript"
        },
        {
            "questionText": "How can we specify properties and methods for an object in TypeScript?",
            "options": [{
                    "text": "Use classes."
                },
                {
                    "text": "Use interfaces.",
                    "correct": true
                },
                {
                    "text": "Use enums."
                },
                {
                    "text": "Use async/await."
                }
            ],
            "explanation": "interfaces are typically used to list the properties and methods for an object"
        },
        {
            "questionText": "How else can Array<number> be written in TypeScript?",
            "options": [{
                    "text": "@number"
                },
                {
                    "text": "number[]",
                    "correct": true
                },
                {
                    "text": "number!"
                },
                {
                    "text": "number?"
                }
            ],
            "explanation": "number[] is another way of writing Array<number> in TypeScript"
        },
        {
            "questionText": "In which of these does a class take parameters?",
            "options": [{
                    "text": "constructor",
                    "correct": true
                },
                {
                    "text": "destructor"
                },
                {
                    "text": "import"
                },
                {
                    "text": "subscribe"
                }
            ],
            "explanation": "a constructor is used by a class to take in parameters"
        },
        {
            "questionText": "Which is NOT an access modifier?",
            "options": [{
                    "text": "private"
                },
                {
                    "text": "protected"
                },
                {
                    "text": "public"
                },
                {
                    "text": "async",
                    "correct": true
                }
            ],
            "explanation": "async is not used as an access modifier type in TypeScript"
        },
        {
            "questionText": "Which keyword allows us to share information between files in TypeScript?",
            "options": [{
                    "text": "import"
                },
                {
                    "text": "export",
                    "correct": true
                },
                {
                    "text": "async"
                },
                {
                    "text": "constructor"
                }
            ],
            "explanation": "the export keyword allows for the information to be transmitted between files"
        },
        {
            "questionText": "Which is an array method to generate a new array based on a condition?",
            "options": [{
                    "text": "filter",
                    "correct": true
                },
                {
                    "text": "map"
                },
                {
                    "text": "async"
                },
                {
                    "text": "enum"
                }
            ],
            "explanation": "filter is a method used to conditionally create a new array"
        },
        {
            "questionText": "How is a property accessible within a class?",
            "options": [{
                    "text": "Using this.propertyName",
                    "correct": true
                },
                {
                    "text": "Accessors"
                },
                {
                    "text": "Destructuring"
                },
                {
                    "text": "Arrow function"
                }
            ],
            "explanation": "this.propertyName is the way to access a specific property within a class"
        }
    ]
};
const options = document.querySelector('.answers');
const questions = document.querySelector('.questions');
const btn_next = document.querySelector('.btn-next');
const btn_prev = document.querySelector('.btn-prev');
let quizArr = quiz.questions;
let j = 0;
// let que_tag;
// let que_t ag;
while (j < quizArr.length) {
    // que_tag = '<h1>' + quizArr[j].questionText; + '</h1>' ;
    // let que_tag;
    // let que_tag = '<h1>' + quizArr[j].questionText; + '</h1>' ;
    let que_tag = `<h1>${quizArr[j].questionText}</h1>`;
    // console.log('zero', que_tag);
    console.log('XD', quizArr[j]);
    let count = 0;
    btn_next.onclick = () => {
        console.log('one', que_tag);
        // let que_tag = '<h1>' + quizArr[j].questionText; + '</h1>' ;
        // console.log(que_tag);
        console.log('HAHA', quizArr[j]);
        questions.innerHTML += que_tag;
        console.log('two', que_tag);
        console.log(count++);
    };
    console.log(quizArr[j].questionText);
    j++;
}
btn_next.addEventListener('click', function (index) {
    // let que_tag;
    // for(let i = 0; i < quizArr.length; i++) {
    //     que_tag = '<h1>' + quizArr[i].questionText; + '</h1>' ;
    //     questions.innerHTML += que_tag;
    //     console.log(quizArr[i].questionText);
    // }    
});
// btn_next.addEventListener("click", showQuestions(1))
// function showQuestions(index : number){
//     let que_tag = '<h1>' + quiz.questions[index].questionText; + '</h1>' ;
//     questions.innerHTML = que_tag;
//   /*  quiz.questions.forEach(element => {
//         let que_tag = '<h1>' + element.questionText + '</h1>' 
//         questions.innerHTML += que_tag;
//     }); 
//     console.log(quiz.questions[0]); 
//     */
// }
function showAnswer(index) {
    let tag_op1 = '<input type="checkbox" value=' + quiz.questions[index].options[0].text + '>'
        + '<h1>' + quiz.questions[index].options[1].text + '</h1>'
        + '<h1>' + quiz.questions[index].options[2].text + '</h1>'
        + '<h1>' + quiz.questions[index].options[3].text + '</h1>';
    options.innerHTML = tag_op1;
}
;
//showQuestions(0);
showAnswer(0);
/* quiz.questions.forEach(answer => {
     
     let tag_op1 = '<h1>' + answer.options + '</h1>'
     options.innerHTML += tag_op1;

     console.log(answer.options);

 })
 */
