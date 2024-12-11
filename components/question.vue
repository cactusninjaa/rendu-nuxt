<script setup>
    const quizz = inject('quizz')
</script>

<template>
    <div>
        <p>{{ quizz.data.questions[quizz.currentQuestionIndex.value].title }}</p>
        <p>Question {{ quizz.currentQuestionIndex.value + 1 }} / {{ quizz.data.questions.length }}</p>
        
        <form @submit.prevent="quizz.next()">
            <div v-for="(answer, index) in quizz.data.questions[quizz.currentQuestionIndex.value].answers" :key="index">
                <input 
                    type="radio" 
                    :value="answer" 
                    v-model="quizz.selectedAnswer.value" 
                    name="quiz-answer" 
                />
                <label>{{ answer }}</label>
            </div>
            <button type="submit">Next</button>
        </form>
    </div>
</template>