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
            <td>
                <NewTabAnchor :url="speaker.slide.url">
                    {{ speaker.slide.title }}
                </NewTabAnchor>
            </td>
            <td>
                <NewTabAnchor :url="speaker.event.url">
                    {{ speaker.event.title }}
                </NewTabAnchor>
            </td>
        </tr>
    </table>
    <p>
        <NewTabAnchor url="https://speakerdeck.com/nnsnodnb">
            {{ $t('speaker.other_slides') }}
        </NewTabAnchor>
    </p>
</template>

<script setup>
import NewTabAnchor from './NewTabAnchor.vue'
</script>

<script>
export default {
    name: 'Speaker',
    data () {
        return {
            speakers: [
                {
                    title: this.$t('speaker.chiba_swift_2_title'),
                    slide: {
                        title: this.$t('speaker.chiba_swift_2_slide_title'),
                        url: 'https://speakerdeck.com/nnsnodnb/static-linux-sdk-woshi-tuta-linux-apurikai-fa-woshi-meyou',
                    },
                    event: {
                        title: this.$t('speaker.chiba_swift_2_event_name'),
                        url: 'https://chibaswift.connpass.com/event/331925/',
                    },
                },
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
