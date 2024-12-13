<script setup>
    const data = await queryContent('quizz').find();
    const quizzs = useQuizs(data)
    provide('quizzs', quizzs)
</script>

<template>
    <NuxtLayout name="header">

        <div class='flex flex-col gap-3 text-2xl max-w-xl mx-auto'>
            <h1>Quizz disponibles</h1>
            <QuizzCards />
        </div>
    </NuxtLayout>
</template>