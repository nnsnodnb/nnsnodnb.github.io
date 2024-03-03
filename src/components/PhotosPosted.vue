<template>
    <h2>{{ $t('header.photosPosted')}}</h2>
    <ul>
        <li v-for="photo in photos" :key="photo.title">
            {{ photo.title }}
            <ul>
                <li v-for="item in photo.items" :key="item.url">
                    <NewTabAnchor :url="item.url">
                        {{ item.title }}
                    </NewTabAnchor>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script setup>
import NewTabAnchor from './NewTabAnchor.vue'
</script>

<script>
export default {
    name: 'PhotosPosted',
    data () {
        return {
            photos: [
                {
                    "title": this.$t('photosPosted.phpcon2019'),
                    "items": [
                        {
                            "title": "https://gihyo.jp/news/report/01/phpcon2019/0003",
                            "url": "https://gihyo.jp/news/report/01/phpcon2019/0003",
                        },
                        {
                            "title": "https://workinjapan.today/hightech/php-conference-japan/",
                            "url": "https://workinjapan.today/hightech/php-conference-japan/",
                        },
                    ],
                },
                {
                    "title": this.$t('photosPosted.magazines'),
                    "items": [
                        {
                            "title": "Software Design December 2020 issue",
                            "url": "https://amzn.to/3lImlRp",
                        },
                    ],
                },
                {
                    "title": this.$t('photosPosted.phpcon2023'),
                    "items": [
                        {
                            "title": "Google Photos",
                            "url": "https://photos.app.goo.gl/9edWfG2rFpN8fBnf7",
                        },
                    ],
                },
            ],
        }
    },
}
</script>
