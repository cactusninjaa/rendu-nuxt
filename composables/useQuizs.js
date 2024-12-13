export default function (quizzs) {
    const selectedFilter = ref('')
    const uniqueTags = ref([])


    uniqueTags.value = [...new Set(quizzs.map(quizz => quizz.tags).flat())];
    



    return {
        quizzs,
        selectedFilter, 
        uniqueTags
    };
}