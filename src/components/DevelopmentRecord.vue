<template>
    <h2>Development record</h2>
    <table>
        <tr>
            <th>Overview</th>
            <th>Languages & Technologies</th>
            <th>Notes</th>
        </tr>
        <tr v-for="record in records" :key="record.overview">
            <td>{{ record.overview }}</td>
            <td>{{ joinedString(record.techs, ', ') }}</td>
            <td>
                <div v-for="note in record.notes">
                    <span v-if="note.type === 'anchor'">
                        <a :href="note.data.url" target="_blank" rel="noopener">{{ note.data.title }}</a>
                    </span>
                    <span v-else-if="note.type === 'anchor-custom-badge'">
                        <AnchorCustomBadge :url="note.data.url" :title="note.data.title" :value="note.data.value" :color="note.data.color"/>
                    </span>
                    <span v-else-if="note.type === 'app-store'">
                        <AppStoreBadge :app_id="note.data.app_id"/>
                    </span>
                    <span v-else-if="note.type === 'custom-badge'">
                        <CustomBadge :title="note.data.title" :value="note.data.value" :color="note.data.color"/>
                    </span>
                    <span v-else-if="note.type === 'github-star'">
                        <GitHubStar :user="note.data.user" :repo="note.data.repo"/>
                    </span>
                    <span v-else-if="note.type === 'pypi'">
                        <PyPIPackageBadge :type="note.data.type" :package="note.data.package"/>
                    </span>
                </div>
            </td>
        </tr>
    </table>
</template>

<script>
import AnchorCustomBadge from './AnchorCustomBadge.vue'
import AppStoreBadge from './AppStoreBadge.vue'
import CustomBadge from './CustomBadge.vue'
import GitHubStar from './GitHubStar.vue'
import PyPIPackageBadge from './PyPIPackageBadge.vue'

export default {
    name: 'DevelopmentRecord',
    components: {
        AnchorCustomBadge,
        AppStoreBadge,
        CustomBadge,
        GitHubStar,
        PyPIPackageBadge,
    },
    data () {
        return {
            records: [
                {
                    "overview": "Corporate scout application",
                    "techs": ["Objective-C"],
                    "notes": [],
                },
                {
                    "overview": "Book browsing application",
                    "techs": ["Swift"],
                    "notes": [],
                },
                {
                    "overview": "EC system application",
                    "techs": ["Objective-C"],
                    "notes": [],
                },
                {
                    "overview": "Camera system application",
                    "techs": ["Swift"],
                    "notes": [],
                },
                {
                    "overview": "Social communication application",
                    "techs": ["Objective-C", "CoreData"],
                    "notes": [],
                },
                {
                    "overview": "Beacon incorporation application",
                    "techs": ["Swift", "Firebase"],
                    "notes": [],
                },
                {
                    "overview": "Chatbot service & infra",
                    "techs": ["Python", "Django", "Azure"],
                    "notes": [],
                },
                {
                    "overview": "Mobile backend service",
                    "techs": ["Python", "Django"],
                    "notes": [
                        {
                            "type": "github-star",
                            "data": {
                                "user": "nnsnodnb",
                                "repo": "djabaas",
                            },
                        },
                    ],
                },
                {
                    "overview": "Shop review application",
                    "techs": ["Swift", "Python", "Django"],
                    "notes": [],
                },
                {
                    "overview": "iOS Push Notification Service package library for Django",
                    "techs": ["Python2", "Python3", "Django"],
                    "notes": [
                        {
                            "type": "pypi",
                            "data": {
                                "type": "version",
                                "package": "ios-notification",
                            },
                        },
                        {
                            "type": "pypi",
                            "data": {
                                "type": "download",
                                "package": "ios-notification",
                            },
                        },
                        {
                            "type": "github-star",
                            "data": {
                                "user": "nnsnodnb",
                                "repo": "django-ios-notifications",
                            },
                        },
                    ],
                },
                {
                    "overview": "Adding csrf token for ajax request header for Django",
                    "techs": ["Python2", "Python3", "Django"],
                    "notes": [
                        {
                            "type": "pypi",
                            "data": {
                                "type": "version",
                                "package": "django-ajax-csrf",
                            },
                        },
                        {
                            "type": "pypi",
                            "data": {
                                "type": "download",
                                "package": "django-ajax-csrf",
                            },
                        },
                        {
                            "type": "github-star",
                            "data": {
                                "user": "nnsnodnb",
                                "repo": "django-ajax-csrf",
                            },
                        },
                    ],
                },
                {
                    "overview": "In-App Purchage validation server package library for Django",
                    "techs": ["Python3", "Django"],
                    "notes": [
                        {
                            "type": "pypi",
                            "data": {
                                "type": "version",
                                "package": "django-ios-storekit",
                            },
                        },
                        {
                            "type": "pypi",
                            "data": {
                                "type": "download",
                                "package": "django-ios-storekit",
                            },
                        },
                        {
                            "type": "github-star",
                            "data": {
                                "user": "nnsnodnb",
                                "repo": "django-ios-storekit",
                            },
                        },
                    ],
                },
                {
                    "overview": "NowPlaying share application",
                    "techs": ["Swift", "Firebase", "Twitter API", "Mastodon API"],
                    "notes": [
                        {
                            "type": "app-store",
                            "data": {
                                "app_id": "6448638174",
                            },
                        },
                        {
                            "type": "github-star",
                            "data": {
                                "user": "nnsnodnb",
                                "repo": "nowplaying-ios",
                            },
                        },
                    ],
                },
                {
                    "overview": "Gourmet application",
                    "techs": ["Swift", "Objective-C"],
                    "notes": [],
                },
                {
                    "overview": "APNS Provider API wrapper library for Python",
                    "techs": ["Python3"],
                    "notes": [
                        {
                            "type": "pypi",
                            "data": {
                                "type": "version",
                                "package": "kalyke-apns",
                            },
                        },
                        {
                            "type": "pypi",
                            "data": {
                                "type": "download",
                                "package": "kalyke-apns",
                            },
                        },
                        {
                            "type": "github-star",
                            "data": {
                                "user": "nnsnodnb",
                                "repo": "kalyke",
                            },
                        },
                    ],
                },
                {
                    "overview": "Pipe(パイプ) - 投稿いらずでつながる (SNS) already closed.",
                    "techs": ["Swift", "Firebase", "AWS", "Python3", "Django", "Flask", "Celery"],
                    "notes": [
                        {
                            "type": "anchor",
                            "data": {
                                "url": "https://nnsnodnb.hatenablog.jp/entry/auto-upload-screenshots-with-shutdown-ios-app",
                                "title": "Main logic",
                            },
                        },
                        {
                            "type": "anchor",
                            "data": {
                                "url": "https://nnsnodnb.hatenablog.jp/entry/implement-invitation-to-app-with-fdl",
                                "title": "Invitation logic",
                            },
                        },
                    ],
                },
                {
                    "overview": "Mirare(ミラーレ) - 美容サロンの「リピート率」と「来店頻度」の向上を実現！",
                    "techs": ["Swift", "Firebase", "Python3", "Django", "Celery", "Docker", "AWS", "AWS CloudFormation and so on"],
                    "notes": [
                        {
                            "type": "app-store",
                            "data": {
                                "app_id": "1491717209",
                            },
                        },
                        {
                            "type": "custom-badge",
                            "data": {
                                "title": "Develop",
                                "value": "Entrusted",
                                "color": "white",
                                "alt": "Entrusted Develop",
                            },
                        },
                    ],
                },
                {
                    "overview": "Displaying multiple images like Twitter by UIKit",
                    "techs": ["iOS", "Swift", "CocoaPods", "Carthage", "Swift Package Manager"],
                    "notes": [
                        {
                            "type": "github-star",
                            "data": {
                                "user": "nnsnodnb",
                                "repo": "MultipleImageView",
                            },
                        },
                    ],
                },
                {
                    "overview": "common for iOS",
                    "techs": ["iOS", "Swift", "Firebase", "Bitrise", "CircleCI", "GitHub Actions", "fastlane", "CocoaPods"],
                    "notes": [
                        {
                            "type": "app-store",
                            "data": {
                                "app_id": "1555646146",
                            },
                        },
                        {
                            "type": "anchor-custom-badge",
                            "data": {
                                "url": "https://www.common.tokyu.co.jp",
                                "title": "Web",
                                "value": "Official",
                                "color": "60C2CF",
                                "alt": "Official Web Site",
                            },
                        },
                        {
                            "type": "anchor",
                            "data": {
                                "url": "https://www.wantedly.com/companies/fuller-inc/post_articles/392749",
                                "title": "President's Award",
                            },
                        },
                    ],
                },
                {
                    "overview": "WebSocket client for iOS",
                    "techs": ["iOS", "Swift", "SwiftUI", "CoreData", "GitHub Actions", "Composable Architecture", "fastlane", "Swift Package Manager"],
                    "notes": [
                        {
                            "type": "app-store",
                            "data": {
                                "app_id": "6448638174",
                            },
                        },
                        {
                            "type": "github-star",
                            "data": {
                                "user": "nnsnodnb",
                                "repo": "websocket-client-ios",
                            },
                        },
                    ],
                },
                {
                    "overview": "CertsCheck for iOS",
                    "techs": ["iOS", "Swift", "SwiftUI", "GitHub Actions", "Composable Architecture", "fastlane", "Swift Package Manager"],
                    "notes": [
                        {
                            "type": "app-store",
                            "data": {
                                "app_id": "6469147491",
                            },
                        },
                        {
                            "type": "github-star",
                            "data": {
                                "user": "nnsnodnb",
                                "repo": "ssl-certificates-check-ios",
                            },
                        },
                    ],
                },
            ],
        }
    },
    methods: {
        joinedString (array, separator) {
            return array.join(separator)
        },
    },
}
</script>
