export default function (quizzs) {
    const selectedFilter = ref('')
    const uniqueTags = ref([])

    const getUniqueTags = () => {
        uniqueTags.value = [...new Set(quizzs.map(quizz => quizz.tags).flat())];
    }

    getUniqueTags()


    return {
        quizzs,
        getUniqueTags,
        selectedFilter, 
        uniqueTags
    };
}