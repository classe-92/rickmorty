<template>
    <header>
        <h1 class="text-center mb-4">{{ title }}</h1>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    props: {
        title: String
    }
}
</script>

<style lang="scss" scoped></style>