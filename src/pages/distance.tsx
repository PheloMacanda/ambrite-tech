import { useState, useEffect } from 'react';
import StyledBtn from '../components/reusables/styled-button';
import DistanceTable from '../components/reusables/distance-table';
import { COLORS } from '../constants/colors';
import '../App.css';

interface IData {
    ipv4: string;
    geo: string;
}

const Distance = () => {

    const [data, setData] = useState<IData[]>([]);

    const [showTable, setShowTable] = useState<Boolean>(false);

    // Get data from the .json file

    const getData = () => {
        fetch('geo.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((responseJson:IData[]) => {
            setData(responseJson);
        })
        .catch((error) => {
            console.error(error);
        })
    }

    useEffect(() => {
        getData();
    }, [])

    const distanceCal = (lat:number, long:number) => {
        return long - lat;
    }

    function createData(ipv4: string, lat: number, long: number, dist: number) {
        return { ipv4, lat, long, dist };
    }

    const rows = data.map((d:IData) => {
        const latLongs:string[] = d.geo.split(','); 
        return createData(d.ipv4, parseInt(latLongs[0]), parseInt(latLongs[1]), distanceCal(parseInt(latLongs[0]), parseInt(latLongs[1])));
    }).sort((a,b) => (a.dist > b.dist) ? 1 : -1).slice(0, 10) // sort by distance and limit to 10

    return (
        <>
            <div className="distance">
                 <StyledBtn 
                    onClick={() => setShowTable(true)} 
                    btnname="Calculate!" 
                    color={COLORS.primary} 
                />

                 {showTable ? <DistanceTable rows={rows} /> : null}
            </div>
        </>
    );
}

export default Distance;