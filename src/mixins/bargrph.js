export default {
    data() {
        return {
            series: [{
                data: [40, 45, 48, 40, 58, 50, 60, 70, 60, 50, 45, 74, 75, 54]
            }],
            chartOptions: {
                colors: ['#FFE569'],
                chart: {
                    type: 'bar',
                    height: 'auto',
                    background: '#212121'
                },
                legend: {
                    show: false,
                    fontSize: '84px'
                },
                grid: {
                    show: false
                },
                theme: { mode: 'dark' },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        gradientToColors: ['#30A2FF', '#F99B7D'],
                        shadeIntensity: 1,
                        type: 'horizontal',
                        opacityFrom: 1,
                        opacityTo: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: "#30A2FF",
                                opacity: 1
                            },
                            {
                                offset: 30,
                                color: "#00DFA2",
                                opacity: 1
                            },
                            {
                                offset: 70,
                                color: "#FFE569",
                                opacity: 1
                            },
                            {
                                offset: 100,
                                color: "#F79327",
                                opacity: 1
                            }
                        ]
                    },
                },
                plotOptions: {
                    bar: {
                        borderRadius: 6,
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: true,
                },
                xaxis: {
                    categories: ['char 1', 'char 2', 'char 3', 'char 4', 'char 5', 'char 6', 'char 7', 'char 8', 'char 9', 'char 10',
                        'char 12', 'char 13', 'char 14'
                    ],
                },
                yaxis: {
                    labels: {
                        style: {
                            fontSize: '16px'
                        }
                    }
                }
            },

        }
    }
}