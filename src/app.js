
import { helloWorld } from './index';
import { FetchWrapper } from './fetchWrapper';
import Chart from "chart.js/auto"
import snackbar from "snackbar"
import "snackbar/dist/snackbar.min.css"


console.log(helloWorld());

const Api = new FetchWrapper(
	'https://firestore.googleapis.com/v1/projects/programmingjs-90a13/databases/(default)/documents/james9876');
	Api.get().then(data=>{
		console.log(data)
	});

snackbar.show('something to display')

//https://www.chartjs.org/docs/latest/getting-started/usage.html
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [117, 194, 134, 55, 28, 36],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
