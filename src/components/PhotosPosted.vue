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
                {
                    "title": this.$t('photosPosted.phpcon2024'),
                    "items": [
                        {
                            "title": "Google Photos",
                            "url": "https://photos.app.goo.gl/qKiFHnGUQKJgaU68A",
                        },
                    ],
                },
                {
                    "title": this.$t('photosPosted.phpcon_odawara2025'),
                    "items": [
                        {
                            "title": "みんなで白熱！ぺちおだ大合戦を運営がふりかえる",
                            "url": "https://blog.phpcon-odawara.jp/entry/n/n0c78b00d78d6",
                        },
                        {
                            "title": "Google Photos",
                            "url": "https://photos.app.goo.gl/LxTKY68cPYv6NS9K8",
                        },
                    ],
                },
                {
                    "title": this.$t('photosPosted.phpcon_odawara2026'),
                    "items": [
                        {
                            "title": "PHPカンファレンス小田原2026 を開催しました【2027年も開催🎉】 #phpcon_odawara",
                            "url": "https://blog.phpcon-odawara.jp/entry/2026/05/16/102632",
                        },
                        {
                            "title": "Google Photos",
                            "url": "https://photos.app.goo.gl/U7zPJsYAuJ7mNyZRA",
                        },
                    ],
                },
            ],
        }
    },
}
</script>
