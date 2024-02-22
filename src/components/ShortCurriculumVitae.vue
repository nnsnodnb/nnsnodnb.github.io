<template>
    <div>
        <h2>Short curriculum vitae</h2>
        <ul>
            <li>I was born in 1996. ({{ yearsOld }} years old)</li>
            <li>Admission to <code>National Institute of Technology, Ube College(Department of Business Administration)</code> in 2011.</li>
            <li>Graduated from <code>National Institute of Technology, Ube College</code> in 2016.</li>
            <li>Joined <code>SmartTech Ventures Co., Ltd.</code>(SmartDeviceTechnologies Co., Ltd. : Until September) in 2016.</li>
            <li>Joined <code>ZEALS Co., Ltd.</code> as help engineer in 2016.</li>
            <li>Started Hollyhock Soft (self-employed) in 2016.</li>
            <li>Retire SmartTech Ventures Co., Ltd. in 31st Dec, 2016</li>
            <li>Joined <code>Kibousoft LLC.</code> in Jan 1st, 2017.</li>
            <li>Retire Kibousoft LLC. in 31st Jul, 2018.</li>
            <li>Joined <code>Pearch Inc.</code> in 1st Aug, 2018.</li>
            <li>Retire Pearch Inc. in 31st Jul, 2020.</li>
            <li>Joined <code>Fuller, Inc.</code> in 1st Sep, 2020.</li>
            <li>Retire Fuller, Inc. in 31st Aug, 2023.</li>
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
