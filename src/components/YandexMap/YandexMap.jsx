import React, { useState } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import AButton from '../AButton/AButton';
import classes from './YandexMap.module.css';
import mapIcon from './map-icon.png';

const YandexMap = ({ points }) => {
    const mapState = {
        center: [55.749547, 37.613440],
        zoom: 12,
    };

    const [filter, setFilter] = useState('all');
    const filteredPoints = points.filter(point => filter === 'all' || point.type === filter);

    return (
        <div className={classes.map__wrapper}>
            <YMaps query={{ apikey: '083c54e5-735d-42c4-8b8f-59d61f8bd2f9' }}>
                <Map defaultState={mapState} width="100%" height="540px">
                    {filteredPoints.map(point => (
                        <Placemark key={point.id} 
                            geometry={point.coords} 
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref: mapIcon,
                                iconImageSize: [20, 30]
                              }}
                        />
                    ))}

                    <div className={classes.map__filter__wrapper}>
                        <div className={classes.map__filter}>
                            <AButton click={() => setFilter('юрлица')} 
                                value="юрлица"
                                filterSelected={filter !== 'юрлица'}>
                            </AButton>
                        </div>
                        <div className={classes.map__filter}>
                            <AButton click={() => setFilter('физлица')}
                                value="физлица"
                                filterSelected={filter !== 'физлица'}>
                            </AButton>
                        </div>
                        <div>
                            <AButton click={() => setFilter('all')} 
                                value="показать все"
                                filterSelected={filter !== 'all'}>
                            </AButton>
                        </div>
                    </div>
                </Map>
            </YMaps>
        </div>
    );
};

export default YandexMap;
