
import {mapPolygons} from './mapPolygons.js';
import { mapLines } from './mapPolygons.js';
import { mapLinesCloser,mapLinesLarge } from './mapPolygons.js';
import { mapPoints,mapPointsTrip } from './mapPolygons.js';

let pointC= mapPointsTrip[0]['features']
// debugger
//const testPolygons=(mapPolygons.features[0].geometry.coordinates)
mapboxgl.accessToken = 'pk.eyJ1IjoidG9tYXNtZW5hIiwiYSI6ImNsbXlqZjY0bjEzZGYyamxpOHBwMGxqczMifQ.y8mLdsITvhs0VkXdZXxx0Q';
const map = new mapboxgl.Map({
container: 'map',
// container ID
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/tomasmena/clm87qlc2014001pfg85j9v96', // style URL
center: [20.2040871486724,65.5804451373921], // starting position [lng, lat]
zoom: 6

 // starting zoom
});

// for (let coord of testPolygons){
//     console.log(coord)
// }

const geojson = {
    type:'FeatureCollection',
    features:[{
        type: 'Feature',
        geometry: {
            type:'Point',
            coordinates:[18.570945,66.974733]
            },
            properties:{
            title:'Tjamotis Damm',
            description:'<iframe src="https://speckle.xyz/embed?stream=521b67e98f&transparent=true&autoload=true&hidecontrols=true&noscroll=true&hidesidebar=true&hideselectioninfo=true" width="400" height="400" frameborder="0"></iframe>'
            }           
        }]
    };

map.on('load',()=>{
    
    for(let pol of mapPolygons){
        let srcName= `testPol${mapPolygons.indexOf(pol)}`; 
        map.addSource(
            `${srcName}`,{
                type:'geojson',
                data:pol,
                }
            )
        map.addLayer({
        'id': `${srcName}`,
        'type': 'fill',
        'source': `${srcName}`, // reference the data source
        'layout': {},
        'paint': {
        'fill-color': '#EFEFF6', // blue color fill
        'fill-opacity': 0.5
        }
        });
        // Add a black outline around the polygon.
        map.addLayer({
        'id': `${srcName}`+ 'outline',
        'type': 'line',
        'source': `${srcName}`,
        'layout': {},
        'paint': {
        'line-color': '#000',
        'line-width': 2
        }
    });};

    for(let line of mapLinesLarge){
        let lineSrcName=`lineLarge${mapLinesLarge.indexOf(line)}`;
        
        map.addSource(
            `${lineSrcName}`,{
                type:'geojson',
                data:line,
                }
            );
        map.addLayer({
            'id': `${lineSrcName}`,
            'type': 'line',
            'source': `${lineSrcName}`, // reference the data source
            'layout': {},
            'paint': {
            'line-color': '#F2AF29', // blue color fill
            'line-width': 4,
            'line-dasharray':[1,2]},
                
        });};

    for(let line of mapLines){
        let lineSrcName=`line${mapLines.indexOf(line)}`;
        
        map.addSource(
            `${lineSrcName}`,{
                type:'geojson',
                data:line,
                }
            );
        map.addLayer({
            'id': `${lineSrcName}`,
            'type': 'line',
            'source': `${lineSrcName}`, // reference the data source
            'layout': {},
            'paint': {
            'line-color': '#95A5A6', // blue color fill
            'line-width':1,
            },
                
        })};    

    for(let line of mapLinesCloser){
        let lineSrcName=`lineCloser${mapLinesCloser.indexOf(line)}`;
        console.log(lineSrcName)
        map.addSource(
            `${lineSrcName}`,{
                type:'geojson',
                data:line,
                }
            );
        map.addLayer({
            'id': `${lineSrcName}`,
            'type': 'line',
            'source': `${lineSrcName}`, // reference the data source
            'layout': {},
            'paint': {
            'line-color': '#00ffff', // blue color fill
            'line-width':0.5,
            // 'line-dasharray':[1,2]
        }
    });};
    console.log(pointC.length)
    const pointT = [{type:'FeatureCollection',name:'PointsTrip',
            features:pointC
           }];
    for(let p of pointT){
        let pointTrName=`pointsTrip${pointC.indexOf(p)}`;
        console.log(p)
        // debugger

        map.addSource(
            pointTrName,{
                type:'geojson',
                data:p,
                }
            );
        console.log()
        map.addLayer({
            'id': pointTrName,
            'type': 'circle',
            'source': pointTrName, // reference the data source
            'layout': {},
            'paint': {
                'circle-radius': 5,
                'circle-color': '#FF0000',
                },
            
            
        });};
    
    for(let pt of mapPoints){
        let lineSrcName=`pointsTrip${mapPoints.indexOf(pt)}`;
        console.log(pt)
        map.addSource(
            lineSrcName,{
                type:'geojson',
                data:pt,
                }
            );
            
        // map.addLayer({
        //     'id': lineSrcName,
        //     'type': 'circle',
        //     'source': lineSrcName, // reference the data source
        //     'layout': {},
        //     'paint': {
        //         'circle-radius': 5,
        //         'circle-color': '#FF0000',
        //         },     
        // });
    };
                  
        // Add a new layer to visualize the polygon.
});

// for (let feature of geojson.features){
//     const el= document.createElement('div');
//     el.className='marker';
//     new mapboxgl.Marker(el)
//     .setLngLat(feature.geometry.coordinates)
//     .setPopup(new mapboxgl.Popup({offset: 25})
//     .setHTML(`<h3>${feature.properties.title} </h3><p> ${feature.properties.description}</p>`).setMaxWidth('800'))
//     .addTo(map);
// };  


