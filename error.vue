<template>
  <NuxtLayout name="header">
    <div class="prose">
      <template v-if="error.statusCode === 404">
        <template v-if="error.url && error.url.startsWith('/quizz-')">
          <h1>404!</h1>
          <p>Désolé, le quiz que vous cherchez n'existe pas.</p>
        </template>
        <template v-else>
          <h1>404!</h1>
          <p>Sorry, that page doesn't exist.</p>
        </template>
      </template>
      <template v-else>
        <h1>Dang</h1>
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
