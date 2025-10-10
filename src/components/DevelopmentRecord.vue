<template>
    <h2>{{ $t('header.developmentRecord') }}</h2>
    <table>
        <thead>
            <tr>
                <th class="overview">{{ $t('developmentRecord.tr1') }}</th>
                <th class="lang_tools">{{ $t('developmentRecord.tr2') }}</th>
                <th>{{ $t('developmentRecord.tr3') }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="record in records" :key="record.overview">
                <td>{{ record.overview }}</td>
                <td>{{ joinedString(record.techs, ', ') }}</td>
                <td>
                    <div v-for="(note, index) in record.notes" :key="index">
                        <span v-if="note.type === 'anchor'">
                            <NewTabAnchor :url="note.data.url">
                                {{ note.data.title }}
                            </NewTabAnchor>
                        </span>
                        <span v-else-if="note.type === 'anchor-custom-badge'">
                            <AnchorCustomBadge :url="note.data.url" :title="note.data.title" :value="note.data.value" :color="note.data.color"/>
                        </span>
                        <span v-else-if="note.type === 'app-store'">
                            <AppStoreBadge :app_id="note.data.app_id" type="appstore"/>
                        </span>
                        <span v-else-if="note.type === 'app-store-download-count'">
                            <AppStoreBadge :app_id="note.data.app_id" type="download-count"/>
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
        </tbody>
    </table>
</template>

<script setup>
import AnchorCustomBadge from './AnchorCustomBadge.vue'
import AppStoreBadge from './AppStoreBadge.vue'
import CustomBadge from './CustomBadge.vue'
import GitHubStar from './GitHubStar.vue'
import NewTabAnchor from './NewTabAnchor.vue'
import PyPIPackageBadge from './PyPIPackageBadge.vue'
</script>

<script>
export default {
    name: 'DevelopmentRecord',
    data () {
        return {
            records: [
                {
                    "overview": this.$t('developmentRecord.scout_app_title'),
                    "techs": ["Objective-C"],
                    "notes": [],
                },
                {
                    "overview": this.$t('developmentRecord.book_search_app_title'),
                    "techs": ["Swift"],
                    "notes": [],
                },
                {
                    "overview": this.$t('developmentRecord.ec_system_app_title'),
                    "techs": ["Objective-C"],
                    "notes": [],
                },
                {
                    "overview": this.$t('developmentRecord.camera_app_title'),
                    "techs": ["Swift"],
                    "notes": [],
                },
                {
                    "overview": this.$t('developmentRecord.corp_communication_app_title'),
                    "techs": ["Objective-C", "CoreData"],
                    "notes": [],
                },
                {
                    "overview": this.$t('developmentRecord.beacon_app_title'),
                    "techs": ["Swift", "Firebase"],
                    "notes": [],
                },
                {
                    "overview": this.$t('developmentRecord.chatbot_server_infra_title'),
                    "techs": ["Python", "Django", "Azure"],
                    "notes": [],
                },
                {
                    "overview": this.$t('developmentRecord.mobile_backend_title'),
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
                    "overview": this.$t('developmentRecord.maidmap_app_title'),
                    "techs": ["Swift", "Python", "Django"],
                    "notes": [],
                },
                {
                    "overview": this.$t('developmentRecord.ios_notifications_title'),
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
                    "overview": this.$t('developmentRecord.django_ajax_csrf_title'),
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
                    "overview": this.$t('developmentRecord.django_ios_storekit_title'),
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
                    "overview": this.$t('developmentRecord.nowplaying_ios_title'),
                    "techs": ["Swift", "Firebase", "Twitter API", "Mastodon API"],
                    "notes": [
                        {
                            "type": "app-store",
                            "data": {
                                "app_id": "1289764391",
                            },
                        },
                        {
                            "type": "app-store-download-count",
                            "data": {
                                "app_id": "1289764391",
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
                    "overview": this.$t('developmentRecord.gourmet_app_title'),
                    "techs": ["Swift", "Objective-C"],
                    "notes": [],
                },
                {
                    "overview": this.$t('developmentRecord.kalyke_apns_title'),
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
                    "overview": this.$t('developmentRecord.pearch_pipe2_app_title'),
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
                    "overview": this.$t('developmentRecord.ran_mirare_title'),
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
                    "overview": this.$t('developmentRecord.multiple_image_view_title'),
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
                    "overview": this.$t('developmentRecord.fuller_common_app_title'),
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
                    ],
                },
                {
                    "overview": this.$t('developmentRecord.fuller_d_eggs_project_title'),
                    "techs": ["iOS", "Swift", "SwiftUI", "Firebase", "fastlane", "Swift Package Manager"],
                    "notes": [
                        {
                            "type": "anchor-custom-badge",
                            "data": {
                                "url": "https://www.fuller-inc.com/news/2021/11/d-eggs-final",
                                "title": "Web",
                                "value": "News",
                                "color": "FFE255",
                                "alt": "Fuller news page",
                            },
                        },
                    ],
                },
                {
                    "overview": this.$t('developmentRecord.fuller_uchirepi_app_title'),
                    "techs": ["iOS", "Swift", "Firebase", "Bitrise", "fastlane", "CocoaPods"],
                    "notes": [
                        {
                            "type": "app-store",
                            "data": {
                                "app_id": "1614948412",
                            },
                        },
                        {
                            "type": "anchor-custom-badge",
                            "data": {
                                "url": "https://uchirepi.app/",
                                "title": "Web",
                                "value": "Official",
                                "color": "E77D5E",
                                "alt": "Official Web Site",
                            },
                        },
                    ],
                },
                {
                    "overview": this.$t('developmentRecord.gs_reminder_title'),
                    "techs": ["Python3", "GitHub API", "GitHub Actions"],
                    "notes": [
                        {
                            "type": "pypi",
                            "data": {
                                "type": "version",
                                "package": "gs-reminder",
                            },
                        },
                        {
                            "type": "pypi",
                            "data": {
                                "type": "download",
                                "package": "gs-reminder",
                            },
                        },
                        {
                            "type": "github-star",
                            "data": {
                                "user": "nnsnodnb",
                                "repo": "gs-reminder",
                            },
                        },
                    ],
                },
                {
                    "overview": this.$t('developmentRecord.simple_websocket_client_app_title'),
                    "techs": ["iOS", "Swift", "SwiftUI", "CoreData", "GitHub Actions", "The Composable Architecture", "fastlane", "Swift Package Manager"],
                    "notes": [
                        {
                            "type": "app-store",
                            "data": {
                                "app_id": "6448638174",
                            },
                        },
                        {
                            "type": "app-store-download-count",
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
                    "overview": this.$t('developmentRecord.certs_check_app_title'),
                    "techs": ["iOS", "Swift", "SwiftUI", "GitHub Actions", "The Composable Architecture", "fastlane", "Swift Package Manager"],
                    "notes": [
                        {
                            "type": "app-store",
                            "data": {
                                "app_id": "6469147491",
                            },
                        },
                        {
                            "type": "app-store-download-count",
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
                {
                    "overview": this.$t('developmentRecord.app_store_download_count_badge_maker_title'),
                    "techs": ["Python3", "GitHub Actions"],
                    "notes": [
                        {
                            "type": "pypi",
                            "data": {
                                "type": "version",
                                "package": "app-store-download-count-badge-maker",
                            },
                        },
                        {
                            "type": "pypi",
                            "data": {
                                "type": "download",
                                "package": "app-store-download-count-badge-maker",
                            },
                        },
                        {
                            "type": "github-star",
                            "data": {
                                "user": "nnsnodnb",
                                "repo": "app-store-download-count-badge-maker",
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

<style scoped>
.overview {
    width: 320px;
}

.lang_tools {
    width: 360px;
}
</style>
