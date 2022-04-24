import React from 'react';
import './style.css';
import Lights from '../Lights/index.jsx';
import Climate from '../Climate/index.jsx';
import Blinds from '../Blinds/index.jsx';
import Energy from '../Energy/index.jsx';



const Dashboard = ({data}) => {

    return (
        <main className="dashboard">
            <Lights lights={data}/>
            <Climate temperature={data.climate.temperature} humidity={data.climate.humidity}/>
            <Blinds state={data.blinds}/>
            <Energy electricity={data.energyConsumption.electricity} water={data.energyConsumption.water}/>    
        </main>
    )
};



export default Dashboard;