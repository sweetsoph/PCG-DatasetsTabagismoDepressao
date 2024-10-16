document.addEventListener('DOMContentLoaded', () => {
    const optionsSexo = {
        chart: {type: 'column',zoomType: 'xy'},
            credits: {enabled: false},
            colors: ['#0ab4c7','#0a6fc7', '#2a46ad','#523d82','#66345e' ],
        title: { text: 'Pessoas com diagnóstico autorreferido de depressão por profissional de saúde mental por sexo' },
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

    $.get('./dep-CSV-arquivos/depressão_sexo.csv', csv => {
        optionsSexo.data = { csv };
        Highcharts.chart('depContainerSexo', optionsSexo);
    });


    // Opções do gráfico por idade
    const optionsIdade = {
        chart: { type: 'column', zoomType: 'xy' },
        credits: {enabled: false},
        colors: ['#0ab4c7','#0a6fc7', '#2a46ad','#523d82','#66345e' ],
        title: { text: 'Pessoas com diagnóstico autorreferido de depressão por profissional de saúde mental por idade' },
        subtitle: { 
            text: 'Source: <a href="https://www.pns.icict.fiocruz.br/painel-de-indicadores-mobile-desktop/" target="_blank">PNS2019</a>' 
        },
        xAxis: { 
            type: 'category',
            labels: {
                rotation: -45,
                align: 'right', // Alinha os rótulos à direita
                x: 35,
                y: 20,
                style: {
                    fontSize: '12pt', // Ajusta o tamanho da fonte para legibilidade
                    fontFamily: 'sans-serif'}
        }},
        yAxis: { title: { text: '%' } },
        plotOptions: {
            series:{
                grouping:false,
                shadow:false,
                pointPadding:0.1,
                groupPadding:0.2
                }   
           },
        legend: { enabled: false }
    };

    $.get('./dep-CSV-arquivos/depressão_idade.csv', csv => {
        optionsIdade.data = { csv };
        Highcharts.chart('depContainerIdade', optionsIdade);
    });

    const optionsEscolaridade = {
        chart: { type: 'column', zoomType: 'xy' },
        credits: {enabled: false},
        colors: ['#0ab4c7','#0a6fc7', '#2a46ad','#523d82','#66345e' ],
        title: { text: 'Pessoas com diagnóstico autorreferido de depressão por profissional de saúde mental por nível de instrução' },
        subtitle: { 
            text: 'Source: <a href="https://www.pns.icict.fiocruz.br/painel-de-indicadores-mobile-desktop/" target="_blank">PNS2019</a>' 
        },
        xAxis: { 
            type: 'category',
            labels: {
                rotation: -35,
                align: 'right', // Alinha os rótulos à direita
                x: 50,
                y: 20,
                style: {
                    fontSize: '8pt', // Ajusta o tamanho da fonte para legibilidade
                    fontFamily: 'sans-serif'}
        }
         },
        yAxis: { title: { text: '%' }, },
        plotOptions: {
            series:{
                grouping:false,
                shadow:false,
                pointPadding:0.2,
                groupPadding:0.2
                }   
           },
        legend: { enabled: false }
    };

    $.get('./dep-CSV-arquivos/depressão_escolaridade.csv', csv => {
        optionsEscolaridade.data = { csv };
        Highcharts.chart('depContainerEscolaridade', optionsEscolaridade);
    });

    const optionsRaca = {
        chart: { type: 'column', zoomType: 'xy' },
        credits: {enabled: false},
        colors: ['#0ab4c7','#0a6fc7', '#2a46ad','#523d82','#66345e' ],
        title: { text: 'Pessoas com diagnóstico autorreferido de depressão por profissional de saúde mental por cor/raça' },
        subtitle: { 
            text: 'Source: <a href="https://www.pns.icict.fiocruz.br/painel-de-indicadores-mobile-desktop/" target="_blank">PNS2019</a>' 
        },
        xAxis: { type: 'category',
            labels: {
                rotation: -45,
                align: 'right', // Alinha os rótulos à direita
                x: 18,
                y: 20,
                style: {
                    fontSize: '12pt', // Ajusta o tamanho da fonte para legibilidade
                    fontFamily: 'sans-serif'}
        }
         },
        yAxis: { title: { text: '%' } },
        plotOptions: {
            series:{
                grouping:false,
                shadow:false,
                pointPadding:0.2,
                groupPadding:0.3
                }   
           },
        legend: { enabled: false }
    };

    $.get('./dep-CSV-arquivos/depressão_raca.csv', csv => {
        optionsRaca.data = { 
            csv: csv,
            itemDelimiter: ';',
            startRow: 0,
            startColumn: 0 

        };
        Highcharts.chart('depContainerRaca', optionsRaca);
    });

    const optionsRenda = {
        chart: { type: 'column', zoomType: 'xy' },
        credits: {enabled: false},
        colors: ['#0ab4c7','#0a6fc7', '#2a46ad','#523d82','#66345e' ],
        title: { text: 'Pessoas com diagnóstico autorreferido de depressão por profissional de saúde mental por renda domiciliar per capita' },
        subtitle: { 
            text: 'Source: <a href="https://www.pns.icict.fiocruz.br/painel-de-indicadores-mobile-desktop/" target="_blank">PNS2019</a>' 
        },
        xAxis: { type: 'category',
            labels: {
                rotation: -45,
                align: 'right', // Alinha os rótulos à direita
                x: 35,
                y: 20,
                style: {
                    fontSize: '12pt', // Ajusta o tamanho da fonte para legibilidade
                    fontFamily:'sans-serif'}
        }
         },
        yAxis: { title: { text: '%' } },
        plotOptions: {
            series:{
                grouping:false,
                shadow:false,
                pointPadding:0.2,
                groupPadding:0.2
                }   
           },
        legend: { enabled: false }
    };

    $.get('./dep-CSV-Arquivos/depressão_renda.csv', csv => {
        optionsRenda.data = { 
            csv: csv,
            itemDelimiter: ';',
            startRow: 0,
            startColumn: 0 

        };
        Highcharts.chart('depContainerRenda', optionsRenda);
    });
});
    
    
