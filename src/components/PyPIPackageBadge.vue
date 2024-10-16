<template>
    <NewTabAnchor :url="href">
        <img :src="image_url">
    </NewTabAnchor>
</template>

<script setup>
import NewTabAnchor from './NewTabAnchor.vue'

defineProps({
    type: String,
    package: String,
})
</script>

<script>
export default {
    name: 'PyPIPackageBadge',
    data () {
        return {
            href: "https://pypi.python.org/project/" + this.package,
        }
    },
    computed: {
        image_url() {
            switch (this.type) {
                case "version":
                    return "https://badge.fury.io/py/" + this.package + ".svg"
                case "download":
                    return "https://img.shields.io/pypi/dm/" + this.package + ".svg"
                default:
                    return ""
            }
        },
    },
}
</script>
