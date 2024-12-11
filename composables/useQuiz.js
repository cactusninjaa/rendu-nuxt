export default function (data) {
    const score = ref(0)
    const currentQuestionIndex = ref(0)
    const selectedAnswer = ref(null)

    const next = () => {
        if (currentQuestionIndex.value < data.questions.length ) {
        currentQuestionIndex.value++
        }
        updateScore()
    }

    const updateScore = () => {  
        if (selectedAnswer.value === data.questions[currentQuestionIndex.value - 1].correctAnswer) {
            score.value ++;
            selectedAnswer.value = null
        }
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
        reset
    };
}