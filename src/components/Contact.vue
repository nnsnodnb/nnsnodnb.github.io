<template>
    <h2>{{ $t('header.contact') }}</h2>
    <ul>
        <li v-for="(contact, index) in contacts" :key="index">
            {{ contact.name }}:
            <span v-for="(detail, index) in contact.details" :key="detail.index">
                <span v-if="detail.text !== null">{{ detail.text }}: </span>
                <NewTabAnchor :href="detail.url">
                    {{ detail.anchor }}
                </NewTabAnchor>
                <span v-if="index < contact.details.length">&nbsp;</span>
            </span>
        </li>
    </ul>
</template>

<script setup>
import NewTabAnchor from './NewTabAnchor.vue'
</script>

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
                            "anchor": "me@nnsnodnb.moe",
                            "url": "mailto:me@nnsnodnb.moe",
                        },
                    ],
                },
            ],
        }
    },
}
</script>
