<script setup>
    const quizzs = inject('quizzs')
</script>

<template>
    <div class="flex flex-col ">
        <select v-model="quizzs.selectedFilter.value" name="" id="" class="bg-gray-200 rounded p-4">
            <option value="" disabled>Choisissez un filtre</option>
            <option :value="tag" v-for="tag in quizzs.uniqueTags.value"  :key="tag">{{ tag }}</option>
        </select>
        
        <QuizzCard />
    </div>
</template>
