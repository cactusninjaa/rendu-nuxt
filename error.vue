<template>
  <NuxtLayout name="header">
    <div class="prose max-w-xl mx-auto">
      <template v-if="error.statusCode === 404">
        <template v-if="error.url && error.url.startsWith('/quizz-')">
          <h1 class="text-3xl text-red-500">404!</h1>
          <p>Désolé, le quiz que vous cherchez n'existe pas.</p>
        </template>
        <template v-else>
          <h1 class="text-3xl text-red-500">404!</h1>
          <p>Sorry, that page doesn't exist.</p>gi
        </template>
      </template>
      <template v-else>
        <h1 class="text-3xl text-red-500">Dang</h1>
        <p>
          <strong>{{ error.message }}</strong>
        </p>
        <p>It looks like something broke.</p>
        <p>Sorry about that.</p>
      </template>
      <NuxtLink to="/">
        <Button>Home</Button>
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>

<script setup>
defineProps(['error']);
</script>
