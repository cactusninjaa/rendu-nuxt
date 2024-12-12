export default function (data) {
    const score = ref(0)
    const currentQuestionIndex = ref(0)
    const selectedAnswer = ref(null)
    const startTime = ref(Date.now())

    const next = () => {
        if (currentQuestionIndex.value < data.questions.length) {
            updateScore()
            currentQuestionIndex.value++
            startTime.value = Date.now() // Reset start time for the next question
            selectedAnswer.value = null // Reset selected answer for the next question
        }
    }

    const updateScore = () => {
        const timeTaken = (Date.now() - startTime.value) / 1000
        if (selectedAnswer.value === data.questions[currentQuestionIndex.value].correctAnswer) {
            // Adjust score based on time taken

            if (timeTaken <= 1) {
                score.value += 5 // Fast response
            } else if (timeTaken <= 5) {
                score.value += 5 - timeTaken
            } else if (timeTaken > 5){
                score.value += 1 // Slow response
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
        roundScore
    };
}