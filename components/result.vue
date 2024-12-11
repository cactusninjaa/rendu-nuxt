<script setup>
    const quizz = inject('quizz')
</script>

<template>
    <div>
        <h1>Result</h1>
        <p>Your score is {{ quizz.score.value }} / {{ quizz.data.questions.length }}</p>
        <p>Correct answer were : </p>
        <ul>
            <li v-for="(question, index) in quizz.data.questions" :key="index">
                {{ question.title }} : {{ question.correctAnswer }}
            </li>
        </ul>
        <button @click="quizz.reset()">Try again</button>
        <NuxtLink to="/">Autre quizz</NuxtLink>
    </div>
</template>