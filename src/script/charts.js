/* ------------------------------ Graphique ------------------------------ */
function getChart(){

    updateCharts()

    let selectTempCharts = document.querySelectorAll('.nextdays__temp')
    let TempChartsA = selectTempCharts[0].innerHTML.match(/(\d+)/)
    let TempChartsB = selectTempCharts[1].innerHTML.match(/(\d+)/)
    let TempChartsC = selectTempCharts[2].innerHTML.match(/(\d+)/)
    let TempChartsD = selectTempCharts[3].innerHTML.match(/(\d+)/)
    let TempChartsE = selectTempCharts[4].innerHTML.match(/(\d+)/)

    const labels = [
        'jour 1',
        'jour 2',
        'jour 3',
        'jour 4',
        'jour 5',
    ];
    const data = {
        labels: labels,
        datasets: [{
          label: 'Temp. over days',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [TempChartsA[0], TempChartsB[0], TempChartsC[0], TempChartsD[0], TempChartsE[0]],
        }]
    };
    const config = {
        type: 'line',
        data: data,
        options: {}
    };
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}
/* ------------------------------ Graphique ------------------------------ */

export { getChart, updateCharts };
