<template>
    <a
        :href="url"
        target="_blank"
        rel="noopener noreferrer"
    >
        <slot></slot>
    </a>
</template>

<script setup>
defineProps({
    url: String,
})
</script>

<script>
export default {
    name: 'NewTabAnchor',
}
</script>
