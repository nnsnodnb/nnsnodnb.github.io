<template>
    <div class="container">
        <a href="https://apps.apple.com/app/certscheck/id6469147491?mt=8" target="_blank" rel="noopener">
            <div class="card">
                <img :src="certs_check_appicon" alt="CertsCheck App Icon" class="app_icon">
            </div>
        </a>
    </div>
</template>

<script>
import certs_check_appicon from '../assets/img/certs_check_appicon.webp'

export default {
    name: 'CertsCheck',
    data () {
        return {
            certs_check_appicon,
        }
    },
}
</script>

<style scoped>
.container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: clip;
}

.card {
    box-shadow: 0 4px 15px rgba(0, 0, 0, .2);
    border-radius: 40px;
}

.app_icon {
    width: 120px;
    height: 120px;
    margin: 24px;
    border-radius: 24px;
}

</style>
