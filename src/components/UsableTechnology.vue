<template>
    <h2>Usable technology</h2>
    <ul>
        <li v-for="(value, key) in technologies" :key="key">
            {{ key }}
            <ul>
                <li v-for="item in value" :key="item">{{ item }}</li>
            </ul>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'UsableTechnology',
    data () {
        return {
            technologies: {
                "Programming language": [
                    "Python",
                    "Swift",
                    "Objective-C",
                ],
                "Server Side": [
                    "Django",
                    "Swift",
                ],
                "Infrastructure": [
                    "Amazon Web Services",
                ],
                "Other Skills": [
                    "Git",
                    "SQL",
                    "Realm",
                    "Docker",
                    "Bitrise",
                    "GitHub Actions",
                    "CircleCI",
                    "Firebase",
                    "Celery",
                    "SwiftUI",
                    "ComposableArchitecture",
                    "RxSwift",
                    "fastlane",
                    "OSS Contributor",
                ],
            },
        }
    }
}
</script>
