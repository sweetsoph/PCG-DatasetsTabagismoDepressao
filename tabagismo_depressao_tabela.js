document.addEventListener('DOMContentLoaded', () => {
    const optionsTabagismoDepressao = {
        chart: { 
            type: 'column',zoomType: 'xy'},
            colors: ['#0ab4c7','#0a6fc7', '#2a46ad','#523d82','#66345e' ],
        title: { text: 'Comparação entre usuários de tabaco e pessoas com depressão totais no Brasil' },
        legend: {
            enabled: 'true',
            title: 'horizontal'            
        },
        subtitle: { 
            text: 'Source: <a href="https://www.pns.icict.fiocruz.br/painel-de-indicadores-mobile-desktop/" target="_blank">PNS2019</a>' 
        },
        xAxis: { 
            type: 'category',
            labels: {
                rotation: -45,
                align: 'right', // Alinha os rótulos à direita
                x: 30,
                y: 20,
                style: {
                    fontSize: '12pt', // Ajusta o tamanho da fonte para legibilidade
                    fontFamily: 'sans-serif'}
        }},
        yAxis: { 
            title: { text: '%' }},

        plotOptions: {
                series:{
                    grouping:false,
                    shadow:false,
                    pointPadding:0.2,
                    groupPadding:0.3
                    }   
               },
    };

    $.get('./tab_dep-CSV-arquivos/tabagismo_depressao.csv', csv => {
        optionsTabagismoDepressao.data = { 
            csv: csv,
            itemDelimiter: ';',
            startRow: 0,
            startColumn: 0
         };
        Highcharts.chart('tabDepContainer', optionsTabagismoDepressao);
    });

    const optionsTabDepRegiao = {
        chart: { 
            type: 'column',zoomType: 'xy'},
            colors: ['#0ab4c7','#0a6fc7', '#2a46ad','#523d82','#66345e' ],
        title: { text: 'Comparação entre usuários de tabaco e pessoas com depressão totais no Brasil por região' },
        legend: {
            enabled: 'true',
            title: 'horizontal'            
        },
        subtitle: { 
            text: 'Source: <a href="https://www.pns.icict.fiocruz.br/painel-de-indicadores-mobile-desktop/" target="_blank">PNS2019</a>' 
        },
        xAxis: { 
            type: 'category',
            labels: {
                rotation: -45,
                align: 'right', // Alinha os rótulos à direita
                x: 30,
                y: 20,
                style: {
                    fontSize: '12pt', // Ajusta o tamanho da fonte para legibilidade
                    fontFamily: 'sans-serif'}
        }},
        yAxis: { 
            title: { text: '%' }},
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
    };

    $.get('./tab_dep-CSV-arquivos/tabagismo_depressao_regioes.csv', csv => {
        optionsTabDepRegiao.data = { 
            csv: csv,
            itemDelimiter: ';',
            startRow: 0,
            startColumn: 0
         };
         Highcharts.chart('tabDepRegContainer', optionsTabDepRegiao);
    });

    const optionsTabDepEst = {
        
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Comparação entre usuários de tabaco e pessoas com depressão totais no Brasil por estado' },
            legend: {
                enabled: 'true',
                layout: 'horizontal'            
            },
            subtitle: {
                text: 'Source: <a href="https://www.pns.icict.fiocruz.br/painel-de-indicadores-mobile-desktop/" target="_blank">PNS2019</a>', 
            },
            xAxis: [{ 
                type: 'category',
                reversed: true,
                labels: {
                    step: 1,
                    style: {
                        fontSize: '8pt', // Ajusta o tamanho da fonte para legibilidade
                        fontFamily: 'sans-serif'}
                },

                }, {
                    opposite: true,
                    reversed: false,
                    type: 'category',
                    linkedTo: '',
                    labels: {
                        step: 1,
                        style: {
                            fontSize: '8pt', // Ajusta o tamanho da fonte para legibilidade
                            fontFamily: 'sans-serif'}
                    },
                    accessibility: {
                        description: 'Estados do Brasil (direita)' // Descrição acessível
                    }

            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    format: '{abs value}%'
                },
            },
        
            plotOptions: {
                series: {
                    stacking: 'normal',
                    borderRadius: '50%'
                }
            },
    }
    $.get('./tab_dep-CSV-arquivos/tabagismo_depressao_estados.csv', csv => {
        optionsTabDepEst.data = { 
            csv: csv,
            itemDelimiter: ';',
            startRow: 0,
            startColumn: 0
         };
         Highcharts.Templating.helpers.abs = value => Math.abs(value);
         Highcharts.chart('tabDepEstContainer', optionsTabDepEst);
    });
});  
    
