import { useState, useEffect } from 'react';
import StyledBtn from '../components/reusables/styled-button';
import UnionTable from '../components/reusables/union-table';
import { COLORS } from '../constants/colors';
import '../App.css';

const Union = () => {

    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);

    const [showTable, setShowTable] = useState<Boolean>(false);

    // Get data from the .json file

    const getData = () => {
        fetch('p3Data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                setData1(responseJson.testSet1);
                setData2(responseJson.testSet2);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    useEffect(() => {
        getData();
    }, []);

    // find union between two arrays of objects.
    const union = data1.filter((unit1:any) => data2.some((unit2:any) => unit1.name === unit2.name))

    return (
        <div className="union">
            <StyledBtn
                onClick={() => setShowTable(true)}
                btnname="Find Union!"
                color={COLORS.secondary}
            />

            {showTable ? <UnionTable rows={union} /> : null}
        </div>
    )
};

export default Union;