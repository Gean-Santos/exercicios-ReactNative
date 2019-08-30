import React from 'react';
import {createDrawerNavigator} from 'react-navigation';

import Simples from './components/Simples';
import ParImpar from './components/ParImpar';
import Inverter ,{MegaSena} from './components/Multi';
import Contador from './components/Contador';
import Plataformas from './components/Plataformas';
import ValidarProps from './components/ValidarProps';

  export default createDrawerNavigator({
      ValidarProps:{
          screen: () => <ValidarProps ano={19}/>
      },
      Plataformas:{
          screen: Plataformas 
      },
    Contador:{
        screen: () => <Contador numeroInicial={100}/> 
    },
    MegaSena:{
        screen: () => <MegaSena numeros = {8} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter:{
        screen: () => <Inverter texto='React Nativo!'/>,
    },
    ParImpar:{
        screen: () => <ParImpar numero = {30} />,
        navigationOptions: { title: 'Par & Impar' }
    },
    Simples: () => <Simples texto='Flexível!!!'/>
}, {drawerWidth: 300});


