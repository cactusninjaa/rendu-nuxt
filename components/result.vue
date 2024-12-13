<script setup>
    const quizz = inject('quizz')
</script>

<template>
    <div class="max-w-sm sm:max-w-xl mx-auto flex flex-col gap-6">
        <div class="flex justify-between items-center">
            <h1 class="text-2xl">Result</h1>
            <ResultScore />
        </div>
     
        <ul class="flex flex-col gap-4">
            <li 
            v-for="(question, index) in quizz.answers.value" 
            :key="index"
            class="border border-gray-300 p-4 rounded flex flex-col gap-2"
            :class="question.correct ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500'"
            >
                {{ question.question }} 
                <span v-if="! question.correct" class="line-through">{{ question.answer }}</span>
                <p class="font-bold">{{ question.correctAnswer }}</p>
            </li>
        </ul>

        <div class="flex justify-between">
            <Button @click="quizz.reset()">Try again</Button>
            <NuxtLink to="/">
                <Button>Autre quizz</Button>
            </NuxtLink>
        </div>
    </div>
</template>