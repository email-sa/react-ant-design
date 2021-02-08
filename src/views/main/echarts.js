import React, { Component } from 'react';

// 引入 ECharts 主模块
import * as echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class EchartsTest extends Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        console.log(myChart)
        // 绘制图表
        myChart.setOption({
            title: {
                text: 'ECharts 入门示例',
            },
            tooltip: {
            },
            legend: {
                data:['销量', '利润', '比率']
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '利润',
                    type: 'bar',
                    data: [120, 200, 150, 80, 70, 110, 130],
                }
            ]
    })
}
    render() {
        return (
            <div id="main" style={{ width: 400, height: 400 }}></div>
        );
    }
}

export default EchartsTest;