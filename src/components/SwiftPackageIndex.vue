<template>
    <NewTabAnchor
        :url="`https://swiftpackageindex.com/${username}/${package_name}`"
    >
        <img :src="`https://img.shields.io/endpoint?url=https%3A%2F%2Fswiftpackageindex.com%2Fapi%2Fpackages%2F${username}%2F${package_name}%2Fbadge%3Ftype%3Dswift-versions`" alt="" style="max-width: 100%;">
    </NewTabAnchor>
    <NewTabAnchor
    :url="`https://swiftpackageindex.com/${username}/${package_name}`"
    >
        <img :src="`https://img.shields.io/endpoint?url=https%3A%2F%2Fswiftpackageindex.com%2Fapi%2Fpackages%2F${username}%2F${package_name}%2Fbadge%3Ftype%3Dplatforms`" alt="Platforms" style="max-width: 100%;">
    </NewTabAnchor>
</template>

<script setup>
import NewTabAnchor from './NewTabAnchor.vue'
</script>

<script>
export default {
    name: 'SwiftPackageIndex',
    props: {
        username: {
            type: String,
            required: true,
        },
        package_name: {
            type: String,
            required: true,
        },
    },
}
</script>
