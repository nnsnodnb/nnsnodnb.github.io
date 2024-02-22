<template>
    <h2>{{ $t('header.speaker')}}</h2>
    <table>
        <tr>
            <th>{{ $t('speaker.tr1') }}</th>
            <th>{{ $t('speaker.tr2') }}</th>
            <th>{{ $t('speaker.tr3') }}</th>
        </tr>
        <tr v-for="speaker in speakers" :key="speaker.title">
            <td class="speaker-title" v-text="speaker.title"></td>
            <td><a :href="speaker.slide.url" target="_blank" rel="noopener">{{ speaker.slide.title }}</a></td>
            <td><a :href="speaker.event.url" target="_blank" rel="noopener">{{ speaker.event.title }}</a></td>
        </tr>
    </table>
    <p>
        <a href="https://speakerdeck.com/nnsnodnb" target="_blank" rel="noopener">{{ $t('speaker.other_slides') }}</a>
    </p>
</template>

<script>
export default {
    name: 'Speaker',
    data () {
        return {
            speakers: [
                {
                    title: this.$t('speaker.vot_vol2_title'),
                    slide: {
                        title: this.$t('speaker.vot_vol2_slide_title'),
                        url: 'https://speakerdeck.com/nnsnodnb/zi-she-sabisutolinebotutofalselian-xi-ji-bixin-gui-insutorufalseapuroti',
                    },
                    event: {
                        title: this.$t('speaker.vot_vol2_event_name'),
                        url: 'https://vot.connpass.com/event/91497/',
                    },
                },
                {
                    title: this.$t('speaker.kosen10s_lt12_title'),
                    slide: {
                        title: 'SpeakerDeck (ja)',
                        url: 'https://speakerdeck.com/nnsnodnb/wotakuniyun-dong-hanan-sii',
                    },
                    event: {
                        title: this.$t('speaker.kosen10s_lt12_event_name'),
                        url: 'https://kosen10s.connpass.com/event/85849/',
                    },
                },
            ],
        }
    },
}
</script>

<style scoped>
.speaker-title {
    white-space: pre-wrap;
}
</style>
