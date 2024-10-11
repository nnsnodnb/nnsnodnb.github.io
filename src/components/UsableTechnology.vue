<template>
    <h2>{{ $t('header.usableTechnology') }}</h2>
    <ul>
        <li v-for="tech in technologies" :key="tech.title">
            {{ tech.title }}
            <ul>
                <li v-for="item in tech.items" :key="item">{{ item }}</li>
            </ul>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'UsableTechnology',
    data () {
        return {
            technologies: [
                {
                    "title": this.$t('usableTechnology.prog_lang'),
                    "items": [
                        "Python",
                        "Swift",
                        "Objective-C",
                    ],
                },
                {
                    "title": this.$t('usableTechnology.server_side'),
                    "items": [
                        "Django",
                        "Swift",
                    ],
                },
                {
                    "title": this.$t('usableTechnology.client_side'),
                    "items": [
                        "iOS",
                        "Swift",
                        "Objective-C",
                        "SwiftUI",
                        "Vue.js",
                    ]
                },
                {
                    "title": this.$t('usableTechnology.infra'),
                    "items": [
                        "Amazon Web Services",
                    ],
                },
                {
                    "title": "CI/CD",
                    "items": [
                        "GitHub Actions",
                        "Bitrise",
                        "CircleCI",
                    ],
                },
                {
                    "title": this.$t('usableTechnology.other'),
                    "items": [
                        "Git",
                        "SQL",
                        "Realm",
                        "Docker",
                        "Firebase",
                        "Celery",
                        "The Composable Architecture",
                        "RxSwift",
                        "fastlane",
                        "OSS Contributor",
                    ],
                },
            ],
        }
    },
}
</script>
