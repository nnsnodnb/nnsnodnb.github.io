<template>
    <div>
        <h2>{{ $t('header.shortCurriculumVitae' )}}</h2>
        <ul>
            <li>{{ $t('scv.born') }} ({{ yearsOld }}{{ $t('scv.bornYearsOld') }})</li>
            <li>{{ $t('scv.admission1') }} <code>{{ $t('scv.admission2') }}</code> {{ $t('scv.admission3') }}</li>
            <li>{{ $t('scv.graduate1') }} <code>{{ $t('scv.graduate2') }}</code> {{ $t('scv.graduate3') }}</li>
            <li>{{ $t('scv.join_stv1') }} <code>{{ $t('scv.join_stv2') }}</code> {{ $t('scv.join_stv3') }}</li>
            <li>{{ $t('scv.join_zeals1') }} <code>{{ $t('scv.join_zeals2') }}</code> {{ $t('scv.join_zeals3') }}</li>
            <li>{{ $t('scv.start_hollyhock_soft') }}</li>
            <li>{{ $t('scv.retire_stv') }}</li>
            <li>{{ $t('scv.join_kibousoft1') }} <code>{{ $t('scv.join_kibousoft2') }}</code> {{ $t('scv.join_kibousoft3') }}</li>
            <li>{{ $t('scv.retire_kibousoft') }}</li>
            <li>{{ $t('scv.join_pearch1') }} <code>{{ $t('scv.join_pearch2') }}</code> {{ $t('scv.join_pearch3') }}</li>
            <li>{{ $t('scv.retire_pearch') }}</li>
            <li>{{ $t('scv.join_fuller1') }} <code>{{ $t('scv.join_fuller2') }}</code> {{ $t('scv.join_fuller3') }}</li>
            <li>{{ $t('scv.retire_fuller') }}</li>
            <li>{{ $t('scv.join_zenproducts1') }} <code>{{ $t('scv.join_zenproducts2') }}</code> {{ $t('scv.join_zenproducts3') }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ShortCurriculumVitae',
    computed: {
        yearsOld () {
            const birthday = 19960305
            const today = new Date()
            const _today = parseInt("" + today.getFullYear() + this.affixZero(today.getMonth() + 1) + this.affixZero(today.getDate()))
            return parseInt((_today - birthday) / 10000)
        },
    },
    methods: {
        affixZero (num) {
            if (num < 10) num = "0" + num
            return "" + num
        },
    }
}
</script>
