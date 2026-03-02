<template>
    <div class="container">
        <h1 class="title is-3 has-text-left">データの外部送信について</h1>
        <div class="content">
            <p class="title is-6">2023年6月16日施行の改正電気通信事業法に対応し、本アプリ及び本ウェブサイトのご利用に際して外部に送信される利用者情報について、下記のとおり公表します。</p>
        </div>
        <div
            v-if="bundleId"
            class="content"
        >
            <b-notification
                v-for="provider in bundleId.providers"
                :key="provider.name"
                :title="provider.name"
                :closable="false"
                type="is-default"
            >
                <p>送信先：{{ provider.name }}</p>
                <p>送信データ：{{ provider.sendData }}</p>
                <p>利用目的：{{ provider.purpose }}</p>
            </b-notification>
        </div>
        <p v-else>
            <strong>不明なアプリケーションです。</strong>
        </p>
    </div>
</template>

<script>
const EXTERNAL_PROVIDERS = {
    "apple": {
        name: "Apple Inc.",
        sendData: "利用端末情報、画面操作情報、本アプリのバーション等",
        purpose: "広告効果の分析・最適化、クラッシュレポートの収集",
    },
    "google": {
        name: "Google LLC",
        sendData: "利用端末情報、画面操作情報、プロフィール設定時の入力情報、本アプリのバーション等",
        purpose: "広告効果の分析・最適化、クラッシュレポートの収集、不正行為の検知等",
    },
}

const AVAILABLE_BUNDLE_IDS = {
    "moe.nnsnodnb.WebSocketClient": {
        providers: [
            EXTERNAL_PROVIDERS.apple,
            EXTERNAL_PROVIDERS.google,
        ],
    },
    "moe.nnsnodnb.SSLCertificateCheck": {
        providers: [
            EXTERNAL_PROVIDERS.apple,
            EXTERNAL_PROVIDERS.google,
        ],
    },
}

export default {
    name: "UserdataExternalTransmission",
    data () {
        return {
            bundleId: null,
        }
    },
    mounted () {
        const searchParams = new URLSearchParams(window.location.search)
        const appBundleId = searchParams.get('app')
        const matchedBundleId = AVAILABLE_BUNDLE_IDS[appBundleId]

        if (matchedBundleId !== undefined && matchedBundleId !== null) {
            this.bundleId = matchedBundleId
        }
    },
}
</script>

<style scoped>
.container {
    padding: 5rem;
}
</style>
