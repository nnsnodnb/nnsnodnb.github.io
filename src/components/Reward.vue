<template>
    <h2>{{ $t('header.reward') }}</h2>
    <ul class="container">
        <div v-for="reward in rewards" :key="reward.url" class="column">
            <a :href="reward.url" target="_blank" rel="noopener">
                <RewardCard 
                    :title="reward.title"
                    :description="reward.description"
                    :image_url="reward.image_url"
                />
            </a>
        </div>
    </ul>
</template>

<script setup>
import RewardCard from './RewardCard.vue'
</script>

<script>
export default {
    name: 'Reward',
    data () {
        return {
            rewards: [
                {
                    title: this.$t('reward.fuller_president_award'),
                    description: 'エンジニアとして、自分もチームも挑戦し続けられる土台を作る 〜フラーの「頼られる存在」2021年半期社長賞インタビュー〜 (2022/04/13)',
                    url: 'https://www.wantedly.com/companies/fuller-inc/post_articles/392749',
                    image_url: 'https://images.wantedly.com/i/MwZbFJx',
                },
            ],
        }
    },
}
</script>

<style scoped>
a:hover {
    text-decoration: none;
}

.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>
