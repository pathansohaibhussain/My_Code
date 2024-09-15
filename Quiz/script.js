let quizContainer = document.querySelector('.quiz-container');
let nextButton = document.querySelector('.next');
let currentQuestion = 0;
let score = 0;
let previousAnswers = [];
let correctAnswers = ['implements', '4 bytes', 'JDB', 'false', 'run()', 'To define a method that can be called without creating an instance', '3030', 'public static void main(String[] args)', 'Use of pointers', 'Object'];
let selectedAnswer = '';


let questions = [

    `<h4 class="question">1. Which of the following is not a Java keyword?</h4>
        <input type="radio" name="q1" id="option1" value="class">
        <label for="option1">class</label><br>
        <input type="radio" name="q1" id="option2" value="interface">
        <label for="option2">interface</label><br>
        <input type="radio" name="q1" id="option3" value="extends">
        <label for="option3">extends</label><br>
        <input type="radio" name="q1" id="option4" value="implements">
        <label for="option4">implements</label><br>
        <input onclick="nextQuestion()" id="next" type="submit" value="Next">
                    <button class="back-button" onclick="goBack()">Back</button>
`,

    `<h4 class="question">2. What is the size of an int in Java?</h4>
        <input type="radio" name="q2" id="option5" value="4 bytes">
        <label for="option5">4 bytes</label><br>
        <input type="radio" name="q2" id="option6" value="2 bytes">
        <label for="option6">2 bytes</label><br>
        <input type="radio" name="q2" id="option7" value="8 bytes">
        <label for="option7">8 bytes</label><br>
        <input type="radio" name="q2" id="option8" value="1 byte">
        <label for="option8">1 byte</label><br>
        <input onclick="nextQuestion()" id="next" type="submit" value="Next">
                    <button class="back-button" onclick="goBack()">Back</button>
`,

    `<h4 class="question">3. Which of the following is used to find and fix bugs in Java programs?</h4>
        <input type="radio" name="q3" id="option9" value="JVM">
        <label for="option9">JVM</label><br>
        <input type="radio" name="q3" id="option10" value="JRE">
        <label for="option10">JRE</label><br>
        <input type="radio" name="q3" id="option11" value="JDK">
        <label for="option11">JDK</label><br>
        <input type="radio" name="q3" id="option12" value="JDB">
        <label for="option12">JDB</label><br>
        <input onclick="nextQuestion()" id="next" type="submit" value="Next">
                    <button class="back-button" onclick="goBack()">Back</button>
`,

    `<h4 class="question">4. What is the default value of a boolean variable in Java?</h4>
        <input type="radio" name="q4" id="option13" value="true">
        <label for="option13">true</label><br>
        <input type="radio" name="q4" id="option14" value="false">
        <label for="option14">false</label><br>
        <input onclick="nextQuestion()" id="next" type="submit" value="Next">
                    <button class="back-button" onclick="goBack()">Back</button>
`,

    ` <h4 class="question">5. Which method must be implemented by all Java threads?</h4>
        <input type="radio" name="q5" id="option15" value="start()">
        <label for="option15">start()</label><br>
        <input type="radio" name="q5" id="option16" value="run()">
        <label for="option16">run()</label><br>
        <input type="radio" name="q5" id="option17" value="wait()">
        <label for="option17">wait()</label><br>
        <input type="radio" name="q5" id="option18" value="notify()">
        <label for="option18">notify()</label><br>
        <input onclick="nextQuestion()" id="next" type="submit" value="Next">
                    <button class="back-button" onclick="goBack()">Back</button>
`,

    ` <h4 class="question">6. What is the purpose of the static keyword in Java?</h4>
        <input type="radio" name="q6" id="option19" value="To define a constant">
        <label for="option19">To define a constant</label><br>
        <input type="radio" name="q6" id="option20" value="To define a method that can be called without creating an instance">
        <label for="option20">To define a method that can be called without creating an instance</label><br>
        <input type="radio" name="q6" id="option21" value="To create a thread">
        <label for="option21">To create a thread</label><br>
        <input type="radio" name="q6" id="option22" value="To define an abstract class">
        <label for="option22">To define an abstract class</label><br>
        <input onclick="nextQuestion()" id="next" type="submit" value="Next">
                    <button class="back-button" onclick="goBack()">Back</button>
`,

    `<h4 class="question">7. What is the output of the following code?
        <br><code>System.out.println(10 + 20 + "30");</code></h4>
        <input type="radio" name="q7" id="option23" value="1030">
        <label for="option23">1030</label><br>
        <input type="radio" name="q7" id="option24" value="3020">
        <label for="option24">3020</label><br>
        <input type="radio" name="q7" id="option25" value="3030">
        <label for="option25">3030</label><br>
        <input type="radio" name="q7" id="option26" value="50">
        <label for="option26">50</label><br>
        <input onclick="nextQuestion()" id="next" type="submit" value="Next">
                    <button class="back-button" onclick="goBack()">Back</button>
`,

    `<h4 class="question">8. Which of these is a valid declaration of a main method in Java?</h4>
        <input type="radio" name="q8" id="option27" value="public void main(String[] args)">
        <label for="option27">public void main(String[] args)</label><br>
        <input type="radio" name="q8" id="option28" value="public static void main(String[] args)">
        <label for="option28">public static void main(String[] args)</label><br>
        <input type="radio" name="q8" id="option29" value="private static void main(String[] args)">
        <label for="option29">private static void main(String[] args)</label><br>
        <input type="radio" name="q8" id="option30" value="static public void main(String[] args)">
        <label for="option30">static public void main(String[] args)</label><br>
        <input onclick="nextQuestion()" id="next" type="submit" value="Next">
                    <button class="back-button" onclick="goBack()">Back</button>
`,

    `<h4 class="question">9. Which of the following is not a feature of Java?</h4>
        <input type="radio" name="q9" id="option31" value="Object-Oriented">
        <label for="option31">Object-Oriented</label><br>
        <input type="radio" name="q9" id="option32" value="Use of pointers">
        <label for="option32">Use of pointers</label><br>
        <input type="radio" name="q9" id="option33" value="Platform Independence">
        <label for="option33">Platform Independence</label><br>
        <input type="radio" name="q9" id="option34" value="Multithreading">
        <label for="option34">Multithreading</label><br>
        <input onclick="nextQuestion()" id="next" type="submit" value="Next">
                    <button class="back-button" onclick="goBack()">Back</button>
`,

    `<h4 class="question">10. Which of the following is a superclass of every class in Java?</h4>
        <input type="radio" name="q10" id="option35" value="Object">
        <label for="option35">Object</label><br>
        <input type="radio" name="q10" id="option36" value="Class">
        <label for="option36">Class</label><br>
        <input type="radio" name="q10" id="option37" value="Main">
        <label for="option37">Main</label><br>
        <input type="radio" name="q10" id="option38" value="Superclass">
        <label for="option38">Superclass</label><br>
        <input onclick="nextQuestion()" id="next" type="submit" value="Next">
                    <button class="back-button" onclick="goBack()">Back</button>
`,
];


let startQuiz = () => {
    document.querySelector('.heading').style.display = 'none';
    document.querySelector('.heading2').style.display = 'none';
    document.querySelector('.start-Button-container').style.display = 'none';
    document.querySelector('.quiz-container').classList.add("quiz-container-style");
    loadQuestion(currentQuestion);
};


let loadQuestion = (index) => {
    if (index < questions.length) {
        quizContainer.innerHTML = questions[index];
        let prevAnswer = previousAnswers[index];
        if (prevAnswer) {
            document.querySelector(`input[name="q${index + 1}"][value="${prevAnswer}"]`).checked = true;
        }
    } else {
        quizContainer.innerHTML = `<h2 class="score-heading">Your Score is ${score}</h2><h3 class="thanks-msg">Thanks for participating</h3>`;
    }
};

let nextQuestion = () => {
    let radios = document.querySelectorAll('input[type="radio"]');
    let isChecked = false;
    let selectedAnswer = '';

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedAnswer = radios[i].value;
            isChecked = true;
            break;
        }
    }

    if (isChecked) {
        // Check previous answer and adjust score if needed
        if (previousAnswers[currentQuestion] === correctAnswers[currentQuestion]) {
            score--;
        }

        // Save the selected answer and update the score
        previousAnswers[currentQuestion] = selectedAnswer;
        if (selectedAnswer === correctAnswers[currentQuestion]) {
            score++;
        }

        currentQuestion++;
        loadQuestion(currentQuestion);
    } else {
        alert('Please select an option to proceed');
    }
};


let goBack = () => {
    if (currentQuestion > 0) {
        // Check current answer and adjust score if needed
        let currentAnswer = previousAnswers[currentQuestion];
        if (currentAnswer === correctAnswers[currentQuestion]) {
            score--;
        }

        currentQuestion--;
        loadQuestion(currentQuestion);

        // Update the answer to the previous answer
        let prevAnswer = previousAnswers[currentQuestion];
        if (prevAnswer) {
            document.querySelector(`input[name="q${currentQuestion + 1}"][value="${prevAnswer}"]`).checked = true;
        }
    } else {
        alert('You are on the first question');
    }
};


