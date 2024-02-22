<template>
    <h2>Photos Posted</h2>
    <ul>
        <li v-for="(value, key) in photos" :key="key">
            {{ key }}
            <ul>
                <li v-for="item in value" :key="item.url">
                    <a :href="item.url" target="_blank" rel="noopener">{{ item.title }}</a>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'PhotosPosted',
    data () {
        return {
            photos: {
                "PHP Conference Japan 2019": [
                    {
                        "title": "https://gihyo.jp/news/report/01/phpcon2019/0003",
                        "url": "https://gihyo.jp/news/report/01/phpcon2019/0003",
                    },
                    {
                        "title": "https://workinjapan.today/hightech/php-conference-japan/",
                        "url": "https://workinjapan.today/hightech/php-conference-japan/",
                    },
                ],
                "Magazines": [
                    {
                        "title": "Software Design December 2020 issue",
                        "url": "https://amzn.to/3lImlRp",
                    },
                ],
                "PHP Conference Japan 2023": [
                    {
                        "title": "Google Photos",
                        "url": "https://photos.app.goo.gl/9edWfG2rFpN8fBnf7",
                    },
                ],
            },
        }
    },
}
</script>
