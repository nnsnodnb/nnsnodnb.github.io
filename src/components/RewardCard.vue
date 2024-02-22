<template>
    <div class="card_container card_radius">
        <article class="card">
            <div class="card_header">
                <p class="card_title">{{ title }}</p>
                <figure class="card_thumbnail">
                    <img :src="image_url" class="card_image">
                </figure>
            </div>
            <div class="card_body">
                <p class="card_description">{{ description }}</p>
            </div>    
        </article>
        </div>
</template>

<script setup>
defineProps({
    title: String,
    description: String,
    image_url: String,
})
</script>

<script>
export default {
    name: 'RewardCard',
}
</script>

<style scoped>
@media screen and (min-width: 750px) {
    .card_container {
        margin: 1rem auto;
        width: 85%;
    }
}

@media screen and (max-width: 750px) {
    .card_container {
        margin: 1rem auto;
        width: 100%;
    }
}

.card_radius {
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, .2);
}

.card {
    background-color: #fff;
    box-shadow: 0 0 0px rgba(0, 0, 0, .16);
    color: #212121;
    text-decoration: none;
}

.card_header {
    display: flex;
    flex-wrap: wrap;
}

.card_title {
    padding: 1rem 1.5rem 0;
    font-size: 1.6rem;
    order: 1;
    font-weight: bold;
    text-decoration: none;
    border-bottom: solid 3px black;
}

.card_thumbnail {
    margin: 0;
    order: 0;
}

.card_image {
    width: 100%;
}

.card_body {
    padding: 0 1.5rem;
}

.card_description {
    font-size: .8rem;
    margin-top: 0;
    margin-bottom: 1.5rem;
}
</style>
