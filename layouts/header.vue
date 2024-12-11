<template>
    <main>
        <header class="max-w-sm sm:max-w-xl mx-auto text-black py-6 mb-6">
            <div class="max-w-xl flex justify-between mx-auto items-center">
                <p>Quizz</p>
                <NuxtLink to="/">
                    <Button>Home</Button>
                </NuxtLink>
            </div>
        </header>
        <slot />
    </main>
</template>