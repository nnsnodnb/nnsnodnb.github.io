<template>
    <h2>{{ $t('header.sponsorship') }}</h2>
    <ul>
        <li v-for="sponsorship in sponsorships" :key="sponsorship.url">
            <span v-if="sponsorship.url !== null">
                <NewTabAnchor :url="sponsorship.url">
                    {{ sponsorship.name }}
                </NewTabAnchor>
            </span>
            <span v-else>
                {{ sponsorship.name }} ({{ sponsorship.amount }})
            </span>
        </li>
    </ul>
</template>

<script setup>
import NewTabAnchor from './NewTabAnchor.vue'
</script>

<script>
export default {
    name: 'Sponsorship',
    data () {
        return {
            sponsorships: [
                {
                    name: this.$t('sponsorship.kosenconf111_title'),
                    url: 'https://kosenconf111.github.io',
                    amount: this.$t('sponsorship.kosenconf111_amount'),
                },
            ],
        }
    },
}
</script>
