<template>
    <a :href="href" target="_blank" rel="noopener"><img :src="image_url"></a>
</template>

<script setup>
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
            href: "https://pypi.python.org/pypi/" + this.package,
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
