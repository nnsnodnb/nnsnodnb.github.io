<template>
    <a :href="href" target="_blank" rel="noopener">
        <img :src="image_url" alt="App Store">
    </a>
</template>

<script setup>
defineProps({
    app_id: String,
})
</script>

<script>
export default {
    name: 'AppStoreBadge',
    data () {
        return {
            href: "https://apps.apple.com/us/app/id" + this.app_id + "?mt=8",
            image_url: "https://img.shields.io/itunes/v/" + this.app_id + "?logo=appstore&label=AppStore",
        }
    },
}
</script>
