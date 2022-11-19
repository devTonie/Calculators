import React, { useState } from 'react';

import StandardCalculator from '../StandardCalculator/StandardCalculator';
import ScientificCalculator from '../ScientificCalculator/ScientificCalculator';
import CurrencyConverter from '../Converters/CurrencyConverter/CurrencyConverter';
import Navigation from '../Navigation/Navigation';
import classes from './Main.module.css';
import Area from '../Converters/Area/Area';

const Main = () =>{
    const [ navigation, setNavigation ] = useState('');

    const scientificClick = () =>{
        setNavigation('Scientific');
    }

    const standardHandler = () =>{
        setNavigation('Standard');
    }

    const currencyHandler = () =>{
        setNavigation('Currency');
    }

    const areaHandler = () =>{
        setNavigation('Area');
    }

    return <div className={classes.back}>
        <Navigation areaHandler={areaHandler} scientificClick={scientificClick} standardHandler={standardHandler} currencyHandler={currencyHandler}/>
        {navigation === 'Scientific' ? <ScientificCalculator/> : navigation === 'Standard' ? <StandardCalculator /> : navigation === 'Currency' ? <CurrencyConverter/> : navigation === 'Area' ? <Area/> : ''}
    </div>
}

export default Main;