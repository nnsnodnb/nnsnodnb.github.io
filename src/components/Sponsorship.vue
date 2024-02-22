<template>
    <h2>{{ $t('header.sponsorship') }}</h2>
    <ul>
        <li v-for="sponsorship in sponsorships" :key="sponsorship.url">
            <span v-if="sponsorship.url !== null">
                <a :href="sponsorship.url" target="_blank" rel="noopener">{{ sponsorship.name }}</a> ({{ sponsorship.amount }})
            </span>
            <span v-else>
                {{ sponsorship.name }} ({{ sponsorship.amount }})
            </span>
        </li>
    </ul>
</template>

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
