<template>
    <div class="min-h-screen flex flex-col overflow-x-hidden">
        <AppHeader />
        <main class="flex-grow">
            <slot/>
        </main>
        <AppFooter />
    </div>
</template>