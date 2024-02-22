<template>
    <h2>Speaker</h2>
    <table>
        <tr>
            <th>Title</th>
            <th>Slide</th>
            <th>Event name</th>
        </tr>
        <tr v-for="speaker in speakers" :key="speaker.title">
            <td class="speaker-title" v-text="speaker.title"></td>
            <td><a :href="speaker.slide.url" target="_blank" rel="noopener">{{ speaker.slide.title }}</a></td>
            <td><a :href="speaker.event.url" target="_blank" rel="noopener">{{ speaker.event.title }}</a></td>
        </tr>
    </table>
    <p>
        <a href="https://speakerdeck.com/nnsnodnb" target="_blank" rel="noopener">Other slides</a>
    </p>
</template>

<script>
export default {
    name: 'Speaker',
    data () {
        return {
            speakers: [
                {
                    title: "Collaboration between provider services and LINE BOT. &\nA new installation approach for smartphone applications.",
                    slide: {
                        title: "SpeakerDeck (ja)",
                        url: "https://speakerdeck.com/nnsnodnb/zi-she-sabisutolinebotutofalselian-xi-ji-bixin-gui-insutorufalseapuroti",
                    },
                    event: {
                        title: "VOT MEETUP! vol.2",
                        url: "https://vot.connpass.com/event/91497/",
                    },
                },
                {
                    title: "Exercise is difficult for nerds",
                    slide: {
                        title: "SpeakerDeck (ja)",
                        url: "https://speakerdeck.com/nnsnodnb/wotakuniyun-dong-hanan-sii",
                    },
                    event: {
                        title: "kosen10s LT #12",
                        url: "https://kosen10s.connpass.com/event/85849/",
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
