<template>
    <a :href="url" target="_blank" rel="noopener">
        <CustomBadge :title="title" :value="value" :color="color"/>
    </a>
</template>

<script setup>
defineProps({
    url: String,
    title: String,
    value: String,
    color: String,
    alt: String,
})
</script>

<script>
import CustomBadge from './CustomBadge.vue';

export default {
    name: 'AnchorCustomBadge',
    components: {
        CustomBadge,
    },
}
</script>
