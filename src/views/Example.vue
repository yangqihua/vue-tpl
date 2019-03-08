<template>
	<div class="example">
		<div class="div1"> width: 6.4rem; </div>
		<div class="div2"> width: 320px; </div>
		<div class="div3"> width: 3.2rem; </div>
		<div class="div4"> width: 100%; </div>
	</div>
</template>

<script>
    export default {
        name: 'Example',
        data() {
            return {
                content: 'Example',
            }
        },
        methods: {}
    }
</script>

<style lang="less" rel="stylesheet/less">
	.example{
		div{
			height: 40px;
			font-size: 18px;
			margin: 40px 0;
			color:#fff;
		}
		.div1{
			width: 6.4rem;
			background: green;
		}

		.div2{
			width: 320px;
			background: black;
		}

		.div3{
			width: 3.2rem;
			background: red;
		}

		.div4{
			width: 100%;
			background: yellowgreen;
		}
	}
</style>
