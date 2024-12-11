<script setup>
    const { params } = useRoute()
    const data = await queryContent(`/quizz/${params.quizz}`).findOne();
    const quizz = useQuiz(data)
    provide('quizz', quizz)
</script>

<template>
    <NuxtLayout name="header">
        <div>
            <Question v-if="quizz.currentQuestionIndex.value < quizz.data.questions.length"/>
            <Result v-else-if="quizz.currentQuestionIndex.value >= quizz.data.questions.length"/>
        </div>
    </NuxtLayout>
</template>