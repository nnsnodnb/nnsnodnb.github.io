<template>
    <a :href="url" target="_blank" rel="noopener">
        <CustomBadge :title="title" :value="value" :color="color"/>
    </a>
</template>

<script setup>
import CustomBadge from './CustomBadge.vue';

defineProps({
    url: String,
    title: String,
    value: String,
    color: String,
    alt: String,
})
</script>

<script>

export default {
    name: 'AnchorCustomBadge',
}
</script>
