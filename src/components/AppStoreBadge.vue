<template>
    <NewTabAnchor :url="href">
        <img v-if="type === 'appstore'" :src="appstore_image_url" alt="App Store">
        <img v-else :src="download_count_badge_image_url" alt="Download Count" />
    </NewTabAnchor>
</template>

<script setup>
import NewTabAnchor from './NewTabAnchor.vue'

defineProps({
    app_id: String,
    type: String,
})
</script>

<script>
export default {
    name: 'AppStoreBadge',
    data () {
        return {
            href: "https://apps.apple.com/us/app/id" + this.app_id + "?mt=8",
            appstore_image_url: "https://img.shields.io/itunes/v/" + this.app_id + "?logo=appstore&label=AppStore",
            download_count_badge_image_url: "https://nnsnodnb.moe/self-app-store-download-count-badges/" + this.app_id + "-year.svg"
        }
    },
}
</script>
