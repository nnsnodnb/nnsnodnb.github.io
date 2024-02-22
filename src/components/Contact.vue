<template>
    <h2>Contact</h2>
    <ul>
        <li v-for="contact in contacts" :key="contact.name">
            {{ contact.name }}:
            <span v-for="(detail, index) in contact.details" :key="detail.url">
                <span v-if="detail.text !== null">{{ detail.text }}: </span>
                <a :href="detail.url" target="_blank" rel="noopener">{{ detail.anchor }}</a>
                <span v-if="index < contact.details.length">&nbsp;</span>
            </span>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Contact',
    data () {
        return {
            contacts: [
                {
                    name: '𝕏',
                    details: [
                        {
                            "text": "Geek",
                            "anchor": "@nnsnodnb",
                            "url": "https://x.com/nnsnodnb",
                        },
                        {
                            "text": "Business",
                            "anchor": "@FavKisei",
                            "url": "https://x.com/FavKisei",
                        },
                    ],
                },
                {
                    name: "Facebook",
                    details: [
                        {
                            "text": null,
                            "anchor": "Yuya Oka",
                            "url": "https://www.facebook.com/nnsnodnb",
                        },
                    ],
                },
                {
                    name: "GitHub",
                    details: [
                        {
                            "text": null,
                            "anchor": "nnsnodnb",
                            "url": "https://github.com/nnsnodnb",
                        },
                    ],
                },
                {
                    name: "Bluesky",
                    details: [
                        {
                            "text": null,
                            "anchor": "@nnsnodnb.moe",
                            "url": "https://bsky.app/profile/nnsnodnb.moe",
                        },
                    ],
                },
                {
                    name: "Blog",
                    details: [
                        {
                            "text": null,
                            "anchor": "『入る学科間違えた高専生』の日記",
                            "url": "https://nnsnodnb.hatenablog.jp/",
                        },
                    ],
                },
                {
                    name: "Email",
                    details: [
                        {
                            "text": null,
                            "anchor": "nnsnodnb@gmail.com",
                            "url": "mailto:nnsnodnb@gmail.com",
                        },
                    ],
                },
            ],
        }
    },
}
</script>
