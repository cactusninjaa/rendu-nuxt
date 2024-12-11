<script setup>
    const quizz = inject('quizz')
</script>

<template>
    <div class="max-w-sm sm:max-w-xl mx-auto flex flex-col gap-6">
        <div class="flex justify-between">
            <p>{{ quizz.data.questions[quizz.currentQuestionIndex.value].title }}</p>
            <p> {{ quizz.currentQuestionIndex.value + 1 }} / {{ quizz.data.questions.length }}</p>
        </div>
       
        <form @submit.prevent="quizz.next()">
            <div class="flex gap-2 pb-6 flex-col sm:flex-row">
                <AnswerCards />
            </div>
           
            <Button type="submit" class="w-full">Next</Button>
        </form>
    </div>
</template>