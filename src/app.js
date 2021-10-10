'use strict'
import { FetchWrapper } from './fetchWrapper';
import Chart from "chart.js/auto";
import snackbar from "snackbar";
import "snackbar/dist/snackbar.min.css";




const Api = new FetchWrapper(
	'https://firestore.googleapis.com/v1/projects/programmingjs-90a13/databases/(default)/documents/');


//snackbar.show('something to display')


const foodOption=document.querySelector('#foods');
const submitButton=document.querySelector('#submit-button');
const boxcontainer=document.querySelector('#box-container');
const canvas =document.getElementById('myChart');
const myChart=canvas.getContext('2d');
const carb =document.getElementById('carb');
const protein=document.getElementById('prot');
const fat=document.getElementById('fat')
const chartBox=document.getElementById('chart')

document.getElementById('formField').addEventListener('submit',(e)=>{
		e.preventDefault()
		const body = {fields:{
			name:{stringValue:foodOption.value},
			carb:{integerValue:carb.value},
			protein:{integerValue:protein.value},
			fat:{integerValue:fat.value}
		}}
	/*	Api.post('anjula678',body).then(data =>{
            console.log(data)
            if(data.error){
                return snackbar.show("Some data is missing")
             
            }
            else{ snackbar.show('Food added successfully')}
        });*/

       
	})

	let foodData=[];
	let foodName=[];
	let carbSum=0;
	let proteinSum =0;
	let fatSum =0;
	let caloriesSum =0;
    let calories=0;
	
	const initData =()=>{
	console.log(foodName)
	foodName.push(foodOption.value)
	carbSum += +(carb.value);
	proteinSum += +(protein.value);
	fatSum += +(fat.value);
	foodData=[carbSum,proteinSum,fatSum]
	console.log(foodData)
	let calories = +(carb.value) + +(protein.value) + +(fat.value)
	console.log(calories);
	caloriesSum += calories;
	console.log(foodData)

	let log = document.getElementById('log')
	log.innerText=`Total calories: ${caloriesSum}`;
	log.className='log-calories'
	
	chartBox.appendChild(log)
	let foodBox = document.createElement('div');
	boxcontainer.appendChild(foodBox);
	let h2=document.createElement('h2');
	h2.innerText=foodOption.value;
	let p =document.createElement('p');
	p.innerText=`Total calories:${calories}`;
	foodBox.appendChild(h2);
	foodBox.appendChild(p);
	let ul = document.createElement('ul');
	foodBox.appendChild(ul);
	foodBox.className='food-box';

    let list1 =document.createElement('li');
	const protlist =document.createElement('li');
	const carblist=document.createElement('li');
	const fatlist =document.createElement('li');
	ul.appendChild(carblist);
	ul.appendChild(protlist);
	ul.appendChild(fatlist);

	list1.innerText='Carb'
	carblist.appendChild(list1);
	let span1 =document.createElement('p');
	span1.innerText=carb.value
	list1.appendChild(span1);
	
	let list2 =document.createElement('li');
	list2.innerText='protein'
	protlist.appendChild(list2);
	let span2 =document.createElement('p');
	span2.innerText=protein.value
	list2.appendChild(span2);
				
	let list3 =document.createElement('li');
	list3.innerText='fat'
	fatlist.appendChild(list3);
	let span3 =document.createElement('p');
	span3.innerText=fat.value
	list3.appendChild(span3);
	
}

let foodChart;
const chartFunction =()=>{
		foodChart= new Chart(myChart,{
			type:'bar',
			data:{
				labels:['carbohydrate','protien','fat'],
				datasets:[{
					label:[foodOption.value],
					data:[+(carb.value), +(protein.value), +(fat.value)],
					borderWidth:1,
					backgroundColor:[                
						'rgba(28, 134, 153,0.5)',
						'rgb(166, 166, 221)',
						'rgb(207, 161, 64)'
					],
				}],
			},
			options: {
				events:['click'],
				elements: {
					bar: {
					  borderWidth: 1,
					}
				  },
				  responsive: true,
				  plugins: {
					title: {
						display: true,
						text: 'Food Chart',
                        font:{
							size: 24
						},
						color:'black',
						padding: {
							top: 10,
							bottom: 30
						}
						
					},

				}	
			}
	
	});
	console.log(foodChart)
  
}

submitButton.addEventListener('click',()=>{	
	initData()
	chartFunction()		
})
function addData(chart) {
	
    chart.data.datasets.forEach((dataset) => {
		let carbSum=0;
		let proteinSum =0;
		let fatSum =0;
		carbSum += +(carb.value);
		proteinSum += +(protein.value);
		fatSum += +(fat.value);
		dataset.label.push(foodOption.value)
		console.log(dataset.data)
        dataset.data[0] += +(carb.value);
		dataset.data[1] += +(protein.value);
		dataset.data[2] += +(fat.value);
    });
    chart.update();
}
document.getElementById('add').addEventListener('click',()=>{
	initData()
	addData(foodChart)
})
/*Api.get('anjula678')
.then(data =>{
	console.log(data)
});*/
