import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import {db, firebase, auth} from './config/firebase.config';
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";


let usuarios = []
let chats= []
function App() {

 

  
 
 const dd= []
const [w, setw] = useState(0)
 db.collection('panelchat').get()
            .then(snapshot => {
                //console.log(snapshot)
               
                snapshot.forEach(doc => {
                   const data = doc.data()
                    data.id = doc.id
                    usuarios.push(data.id)
                    chats.push(data.closed)
                    const k= JSON.stringify(doc.data())
                    const q= JSON.parse(k)
                    console.log(q)
                    setw(q["closed"])
                    console.log(w)
                    dd.push(w)
                    
                })
               // this.setState({ users: usuarios })
                //console.log(usuarios[0])
                
            })
console.log(w)

console.log(dd)
//console.log(usuarios.toString());

const datas = [
  { name: usuarios[0], chats: chats[0] },
  { name: usuarios[1], chats: chats[1] }
];

 
 
 
 return (
    <div style={{ textAlign: "center" }}>
      <h1>ranking de mejores administradores</h1>
      <div className="App">

        <BarChart
          width={500}
          height={300}
          data={datas}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="chats" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default App;
