<template>
    <iframe :src="src" allowtransparency="true" frameborder="0" scrolling="0" width="75" height="20"></iframe>
</template>

<script setup>
defineProps({
    user: String,
    repo: String,
})
</script>

<script>
export default {
    name: 'GitHubStar',
    data () {
        return {
            src: "https://ghbtns.com/github-btn.html?user=" + this.user + "&repo=" + this.repo + "&type=star&count=true"
        }
    },
}
</script>
