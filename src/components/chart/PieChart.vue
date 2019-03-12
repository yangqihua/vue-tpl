<template>
	<div class="chart-wrapper">
		<canvas id="mountNode"></canvas>
	</div>
</template>

<script>
    const F2 = require('@antv/f2');
    export default {
        name: "PieChart",
        mounted() {
            setTimeout(() => {
                this.draw();
            }, 500);
        },
        methods: {
            draw() {
                var data = [{
                    const: 'const',
                    type: '交易奖励',
                    money: 66
                }, {
                    const: 'const',
                    type: '生态建设',
                    money: 12
                }, {
                    const: 'const',
                    type: '贡献榜单',
                    money: 11
                }, {
                    const: 'const',
                    type: '平台收益',
                    money: 11
                }];
                var chart = new F2.Chart({
                    id: 'mountNode',
                    pixelRatio: window.devicePixelRatio
                });
                chart.source(data);
                chart.coord('polar', {
                    transposed: true,
                    radius: 1,
                    innerRadius: 0.6
                });
                chart.axis(false);
                chart.legend(false);
                chart.tooltip(true);
                chart.guide().html({
                    position: ['50%', '50%'],
                    html: '<div style="text-align: center;width:150px;height: 50px;">\n      <p style="font-size: 12px;color: #999;margin: 0" id="title"></p>\n      <p style="font-size: 18px;color: #343434;margin: 0;font-weight: bold;" id="money"></p>\n      </div>'
                });
                chart.interval().position('const*money').adjust('stack').color('type', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14']);
                // chart.pieLabel({
                //     sidePadding: 30,
                //     activeShape: true,
                //     label1: function label1(data) {
                //         return {
                //             text: '￥' + data.money,
                //             fill: '#343434',
                //             fontWeight: 'bold'
                //         };
                //     },
                //     label2: function label2(data) {
                //         return {
                //             text: data.type,
                //             fill: '#999'
                //         };
                //     },
                //     onClick: function onClick(ev) {
                //         var data = ev.data;
                //         if (data) {
                //             $('#title').text(data.type);
                //             $('#money').text(data.money);
                //         }
                //     }
                // });
                chart.render();
            }
        }
    }
</script>

<style scoped>

</style>
