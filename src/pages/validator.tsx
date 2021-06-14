import { useState } from 'react';
import '../App.css';

const Validator = () => {

    const [value, setValue] = useState<Boolean>(false);

    // check the validity of the JSON file..

    const jsonValidityCheck = (json: any) => {
        try {
            JSON.parse(json);
            return true;
        } catch (e) {
            return false;
        }
    }

    // Take a file as an input

    function showContent(e: any) {
        e.preventDefault();

        const reader = new FileReader();
        reader.onload = async (e) => {
            const text = (e.target?.result);
            // alert(jsonValidityCheck(text?.toString()))
            setValue(jsonValidityCheck(text?.toString()))
        };
        reader.readAsText(e.target.files[0]);
    }

    return (
        <>
            <div className="picker">
                <h3>Choose a file to validate..</h3>
                <div className="pick">
                    <input type="file" id="file" name="file" onChange={(e) => showContent(e)} />
                    <h2>{value && value === true ? "Valid JSON" : null}</h2>
                </div>
            </div>

        </>
    );
};

export default Validator;