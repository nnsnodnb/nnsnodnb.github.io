<template>
    <article class="markdown-body">
        <Header />
        <ShortCurriculumVitae />
        <Reward />
        <Sponcership />
        <Speaker />
        <PhotosPosted />
        <Religion />
        <UsableTechnology />
        <DevelopmentRecord />
        <Contact />
    </article>
</template>

<script setup>
import Header from './Header.vue'
import ShortCurriculumVitae from './ShortCurriculumVitae.vue'
import Reward from './Reward.vue'
import Sponcership from './Sponsorship.vue'
import Speaker from './Speaker.vue'
import PhotosPosted from './PhotosPosted.vue'
import Religion from './Religion.vue'
import UsableTechnology from './UsableTechnology.vue'
import DevelopmentRecord from './DevelopmentRecord.vue'
import Contact from './Contact.vue'
</script>

<script>
export default {
    name: 'Profile',
}
</script>

<style scoped>
.markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 1000px;
    margin: 0 auto;
    padding: 45px;
}
</style>
