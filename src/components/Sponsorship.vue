<template>
    <h2>Sponsorship</h2>
    <ul>
        <li v-for="sponsorship in sponsorships" :key="sponsorship.url">
            <a :href="sponsorship.url" target="_blank" rel="noopener">{{ sponsorship.name }}</a> ({{ sponsorship.amount }})
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
                    name: 'Kosen Conference in SAIKYO',
                    url: 'https://kosenconf111.github.io',
                    amount: '100 thousand yen',
                },
            ],
        }
    },
}
</script>
