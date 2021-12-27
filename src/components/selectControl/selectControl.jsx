import React from 'react';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@material-ui/core";


const SelectControl = ({getClassTheme}) => {

    return (
        <FormControl component="fieldset" style={{margin: '20px 0'}}>
            <FormLabel style={{textAlign: "center"}} component="legend">Color theme</FormLabel>
            <RadioGroup row aria-label="color theme" name="row-radio-buttons-group" >
                <FormControlLabel  onClick={getClassTheme} value="green-theme" control={<Radio />} label="Green" />
                <FormControlLabel onClick={getClassTheme} value="red-theme" control={<Radio />} label="Red" />
                <FormControlLabel onClick={getClassTheme}  value="black-theme" control={<Radio />} label="Black" />
            </RadioGroup>
        </FormControl>
    );
};

export default SelectControl;
