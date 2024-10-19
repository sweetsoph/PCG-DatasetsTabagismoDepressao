document.addEventListener('DOMContentLoaded', () => {
    const optionsFM = {
        chart: { 
            type: 'column',zoomType: 'xy'},
            colors: ['#0ab4c7','#0a6fc7', '#2a46ad','#523d82','#66345e' ],
        title: { text: 'Usuários de produtos derivados de tabaco por sexo' },
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
        legend: { enabled: false }
    };

    $.get('./tab-CSV-Arquivos/tabFM.csv', csv => {
        optionsFM.data = { csv };
        Highcharts.chart('tabContainerFM', optionsFM);
    });

    // Opções do gráfico por idade
    const optionsIdade = {
        chart: { type: 'column', zoomType: 'xy' },
        colors: ['#0ab4c7','#0a6fc7', '#2a46ad','#523d82','#66345e' ],
        title: { text: 'Usuários de produtos derivados de tabaco por idade' },
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

    $.get('./tab-CSV-Arquivos/tabagismo_idade.csv', csv => {
        optionsIdade.data = { csv };
        Highcharts.chart('tabContainerIdade', optionsIdade);
    });

    const optionsEscolaridade = {
        chart: { type: 'column', zoomType: 'xy' },
        colors: ['#0ab4c7','#0a6fc7', '#2a46ad','#523d82','#66345e' ],
        title: { text: 'Usuários de produtos derivados de tabaco por nível de instrução' },
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

    $.get('./tab-CSV-Arquivos/tabagismo_escolaridade.csv', csv => {
        optionsEscolaridade.data = { csv };
        Highcharts.chart('tabContainerEscolaridade', optionsEscolaridade);
    });

    const optionsRaca = {
        chart: { type: 'column', zoomType: 'xy' },
        colors: ['#0ab4c7','#0a6fc7', '#2a46ad','#523d82','#66345e' ],
        title: { text: 'Usuários de produtos derivados de tabaco por cor/raça' },
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

    $.get('./tab-CSV-Arquivos/tabagismo_raca.csv', csv => {
        optionsRaca.data = { 
            csv: csv,
            itemDelimiter: ';',
            startRow: 0,
            startColumn: 0 

        };
        Highcharts.chart('tabContainerRaca', optionsRaca);
    });

    const optionsRenda = {
        chart: { type: 'column', zoomType: 'xy' },
        colors: ['#0ab4c7','#0a6fc7', '#2a46ad','#523d82','#66345e' ],
        title: { text: 'Usuários de produtos derivados de tabaco por renda domiciliar per capita' },
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

    $.get('./tab-CSV-Arquivos/tabagismo_renda.csv', csv => {
        optionsRenda.data = { 
            csv: csv,
            itemDelimiter: ';',
            startRow: 0,
            startColumn: 0 

        };
        Highcharts.chart('tabContainerRenda', optionsRenda);
    });
});
    
    
