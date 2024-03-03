<template>
    <div class="container">
        <NewTabAnchor url="https://apps.apple.com/app/certscheck/id6469147491?mt=8" class="bigger">
            <div class="card">
                <img :src="certs_check_appicon" alt="CertsCheck App Icon" class="app_icon">
            </div>
        </NewTabAnchor>
    </div>
</template>

<script setup>
import NewTabAnchor from './NewTabAnchor.vue'
</script>

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

a {
    -webkit-transition: all 0.4s;
    -moz-transition: all 0.4s;
    -ms-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
}

a.bigger:hover {
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
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
