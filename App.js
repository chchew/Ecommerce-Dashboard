import React from "react";
import "./index.css";
import {Bar} from 'react-chartjs-2';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";

function toPDF(){
 
    const input = document.getElementById('chartrankning');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG',300, 800,50,50);
        // pdf.output('dataurlnewwindow');
        pdf.save("charts.pdf");
      })
    ;
}

function App(){
//promedio de chats
const stateprom = {
    chartData: {
        labels: ['20/05/21', '21/05/21', '22/05/21', '23/05/21', '24/05/21', '25/05/21', '26/05/21'],
        datasets: [{
                label: 'Tiempo promedio por chats',
                data: [10, 3, 5, 8, 9, 6, 4],
                backgroundColor: [
                    'rgb(134, 117, 255)',
                    'rgb(134, 117, 255)',
                    'rgb(134, 117, 255)',
                    'rgb(134, 117, 255)',
                    'rgb(134, 117, 255)',
                    'rgb(134, 117, 255)',
                    'rgb(134, 117, 255)',
                ],
                borderRadius: 5,
                borderSkipped: 'start',
                barPercentage: 0.5,
                barThickness: 20,
                maxBarThickness: 30,
                pointSyle: 'dash',
            }
        ]
    }
}

//Productos Vendidos
const stateprod = {
    labels: ['PS5', 'Sputnik V', 'Rum',
             'Wine', 'Cafe'],
    datasets: [
      {
        label: 'Ventas',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }

        return(
            <div className="Dashboard">

                <main className="Graficas">

                    <div className="Grafica">
                        <h2 className ="titulo">CHATS PROMEDIO</h2>
                        <div className="dibujo">
                        {()=>toPDF()}
                            <Bar
                            data={stateprom.chartData}
                            />
                        </div>
                        <div className="Boton">
                            <button onClick= {toPDF}> PDF</button>
                        </div>
                    </div>
                    
                    <div className="Grafica">
                        <h2 className ="titulo">CHATS RANKING</h2>
                        <div className="dibujo">
                        {()=>toPDF()}

                        </div>
                        <div className="Boton">
                            <button onClick= {toPDF}> PDF</button>
                        </div>
                    </div>

                    <div className="Grafica">
                        <h2 className ="titulo">CHATS REPORT</h2>
                        <div className="dibujo">
                        {()=>toPDF()}

                        </div>
                        <div className="Boton">
                            <button onClick= {toPDF}> PDF</button>
                        </div>
                    </div>
        
                    <div className="Grafica">
                        <h2 className ="titulo">PRODUCTOS VENDIDOS</h2>
                        <div className="dibujo">
                            <Bar
                              data={stateprod}
                              options={{
                                title:{
                                  display:true,
                                  text:'Venta de productos',
                                  fontSize:20
                                },
                                legend:{
                                  display:true,
                                  position:'right'
                                }
                              }}
                            />
                        </div>
                        <div className="Boton">
                            <button onClick= {toPDF}> PDF</button>
                        </div>
                    </div>

                </main>
            </div>
        )
    
};

export default App;