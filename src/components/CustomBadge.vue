<template>
    <img :src="image_url" :alt="alt">
</template>

<script setup>
defineProps({
    title: String,
    value: String,
    color: String,
    alt: String,
})
</script>

<script>
export default {
    name: 'CustomBadge',
    data () {
        return {
            image_url: "https://img.shields.io/badge/" + this.title + "-" + this.value + "-" + this.color + ".svg",
        }
    }
}
</script>
