<template>
	<div id="frame">
		<mu-appbar style="width: 100%;" color="primary">
			<mu-button flat slot="left">LOGIN</mu-button>
			<div class="eg-title">{{$route.meta.title}}</div>
			<mu-button flat slot="right">LOGIN</mu-button>
		</mu-appbar>
		<router-view/>
	</div>
</template>


<script>
    export default {
        name: 'Home',
        data() {
            return {
                content: 'Example',
            }
        },
        methods: {},
        watch: {
            // '$route'(val) {
            //     this.title = this.$route.meta.title;
            // }
        }
    }
</script>


<style lang="less" rel="stylesheet/less">
	#frame {
		.eg-title{
			font-weight: bold;
		}
	}
</style>
