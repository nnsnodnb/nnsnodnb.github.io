<template>
    <NewTabAnchor :url="url">
        <CustomBadge :title="title" :value="value" :color="color"/>
    </NewTabAnchor>
</template>

<script setup>
import CustomBadge from './CustomBadge.vue'
import NewTabAnchor from './NewTabAnchor.vue'

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
