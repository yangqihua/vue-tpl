<template>
	<div id="trade">
		<pie-chart/>
	</div>
</template>

<script>
    import PieChart from '../components/chart/PieChart'

    export default {
        name: 'Trade',
        components: {PieChart},
        data() {
            return {}
        },
        methods: {},
    }
</script>

<style lang="less" rel="stylesheet/less">
	#trade {
	}
</style>

