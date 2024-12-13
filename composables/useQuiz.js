export default function (data) {
    const score = ref(0)
    const currentQuestionIndex = ref(0)
    const selectedAnswer = ref(null)
    const startTime = ref(Date.now())
    const answers = ref([])

    const next = () => {
        saveAnswer()
        if (currentQuestionIndex.value < data.questions.length) {
            updateScore()
            currentQuestionIndex.value++
            startTime.value = Date.now()
            selectedAnswer.value = null 
        }
    }

    const saveAnswer = () => {
        answers.value.push({
            question: data.questions[currentQuestionIndex.value].title,
            answer: selectedAnswer.value,
            correctAnswer: data.questions[currentQuestionIndex.value].correctAnswer,
            correct : selectedAnswer.value === data.questions[currentQuestionIndex.value].correctAnswer
        })
    }

    const updateScore = () => {
        const timeTaken = (Date.now() - startTime.value) / 1000
        if (selectedAnswer.value === data.questions[currentQuestionIndex.value].correctAnswer) {

            if (timeTaken <= 1) {
                score.value += 5 
            } else if (timeTaken <= 5) {
                score.value += 5 - timeTaken
            } else if (timeTaken > 5){
                score.value += 1 
            }
        }
    }

    const roundScore = () => {
        score.value = Math.round(score.value * 1000) / 1000
    }

    const reset = () => {
        score.value = 0
        currentQuestionIndex.value = 0
        selectedAnswer.value = null
    }

    return {
        data,
        next,
        score,
        currentQuestionIndex,
        selectedAnswer,
        reset, 
        roundScore,
        answers
    };
}