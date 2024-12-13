<script setup>
    const quizz = inject('quizz')
</script>

<template>
    <div>
    <div v-for="(answer, index) in quizz.data.questions[quizz.currentQuestionIndex.value].answers" 
    :key="index"
    class="flex gap-2 border p-2 rounded-md w-full"
    >
        <label class="flex gap-2 w-full cursor-pointer">
            <input 
            type="radio" 
            :value="answer" 
            v-model="quizz.selectedAnswer.value" 
            name="quiz-answer" 
            class="cursor-pointer"
            required
            />
            <span>{{ answer }}</span>
        </label>
    </div>
</div>
</template>