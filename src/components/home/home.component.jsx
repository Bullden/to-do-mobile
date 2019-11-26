import React from 'react';
import './home.component.css'
import SimpleList from './material.home/material.home.list.component/material.home.list.component';
import AddButton from './material.home/material.home.button/material.home.button'
import CardsComponent from './material.home/material.home.cards.component/material.home.cards.component';
import OpenListComponent from './material.home/material.home.open.list/material.home.open.list';

export default class HomeComponent extends React.Component {
    render(){
        return(
            <div>
                <p className="p-name">Today</p>
                <SimpleList />
                <AddButton />
                <CardsComponent />
                <OpenListComponent/>
            </div>
        )
    }
}