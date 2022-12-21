import React, { useState } from "react";
import routes from "../../../data/routes";
import ReactApexChart from "react-apexcharts";
function Driverchart()   {

    const [state, setState] = useState<any>({

        series: [
            {
          name: 'series1',
          data: [0,10,20,30,40,50]
          
        }, 
        {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41]
        }
    ],
        options: {
          chart: {
            height: 350,
            type: 'area',
          },
          dataLabels: {
            enabled: false,
            
          },
          fill: {
            colors: ['#F44336', '#E91E63', '#9C27B0']
          },


          stroke: {
            curve: 'smooth', 
            colors: ['#F44336', '#E91E63', '#9C27B0']
          },
          xaxis: {
            type: 'datetime',
            categories: ["2022-11-28T00:00:00.000Z", 
            "2022-11-28T01:30:00.000Z",
             "2022-11-28T02:30:00.000Z", 
             "2022-11-28T03:30:00.000Z", 
             "2022-11-28T04:30:00.000Z", 
             "2022-11-28T05:30:00.000Z", 
             "2022-11-28T06:30:00.000Z"],
             colors: ['#546E7A', '#E91E63'],
          },
          toolbar:{
            pan: undefined,
            },

          
          
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
        },

    })

 return (
       <div className="flex justify-center items-center m-14">
      
 <br/>
 
 <br/>
 <ReactApexChart 
        options={state.options} 
        series={state.series} 
        type="area"
        height={200}
        width={355} />
  
    </div>
    );
  }
  
  export default Driverchart;
