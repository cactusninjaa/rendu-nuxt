<script setup>
    const quizzs = inject('quizzs')
</script>

<template>
    <div class="flex flex-col ">
        <select v-model="quizzs.selectedFilter.value" name="" id="" class="bg-gray-200 rounded p-4">
            <option value="" disabled>Choisissez un filtre</option>
            <option :value="tag" v-for="tag in quizzs.uniqueTags.value"  :key="tag">{{ tag }}</option>
        </select>
        
        <div v-for="quizz in quizzs.quizzs" :key="quizz._id">
            <div v-if="quizz.tags.includes(quizzs.selectedFilter.value) || quizzs.selectedFilter.value === ''"
                class="flex flex-col bg-gray-200 p-4 gap-2 rounded-md shadow my-6">
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
    </div>
</template>
