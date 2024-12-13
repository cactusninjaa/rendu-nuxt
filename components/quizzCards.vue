<script setup>
    const data = await useQuizs()
    provide('data', data)
</script>

<template>
    <div class="flex flex-col gap-8">
        <div v-for="quizz in data.quizzs" :key="quizz" class="flex flex-col gap-2 bg-gray-200 p-4 rounded-md shadow">
            <h3 class="text-xl">{{ quizz.title }}</h3>
            <p class="text-sm">Nombre de questions : {{ quizz.questions.length }}</p>
            <NuxtLink 
                :to="`/${quizz._path.split('/').pop()}`"
                class="bg-blue-500 text-white p-2 rounded-md text-center"
                >
                Start
            </NuxtLink>
        </div>
    </div>
</template>
