<script setup>
    const quizz = inject('quizz')
    quizz.roundScore()
</script>

<template>
    <div class="flex text-2xl">
        <p 
        :class="{
            'text-red-500': quizz.score.value === 0,
            'text-orange-500': quizz.score.value > 0 && quizz.score.value <= quizz.data.questions.length / 2 * 5,
            'text-green-500': quizz.score.value > quizz.data.questions.length / 2 * 5
        }"
        >
            {{ quizz.score.value }} 
        </p>
        <p>/</p>
        <p>{{ quizz.data.questions.length * 5 }} </p>
    </div>
</template>