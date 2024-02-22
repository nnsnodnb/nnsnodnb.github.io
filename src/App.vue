<template>
    <article class="markdown-body">
        <Header />
        <ShortCurriculumVitae />
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
import Header from './components/Header.vue'
import ShortCurriculumVitae from './components/ShortCurriculumVitae.vue'
import Sponcership from './components/Sponsorship.vue'
import Speaker from './components/Speaker.vue'
import PhotosPosted from './components/PhotosPosted.vue'
import Religion from './components/Religion.vue'
import UsableTechnology from './components/UsableTechnology.vue'
import DevelopmentRecord from './components/DevelopmentRecord.vue'
import Contact from './components/Contact.vue'
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
