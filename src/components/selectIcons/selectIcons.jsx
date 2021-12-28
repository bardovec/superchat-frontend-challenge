import React from 'react';
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@material-ui/core";

import Icons from "./icons/icons";




const SelectIcons = ({getIcon}) => {

    const res = Icons.icons.map(item =>  <FormControlLabel onClick={getIcon} key={item.id}  value={item.src} control={<Radio/>} label={<img src={item.src} alt=""/>}/>)
    return (
        <FormControl component="fieldset" style={{margin: '20px 10px'}}>
            <FormLabel style={{textAlign: "center"}} component="legend">Choose Icon</FormLabel>
            <RadioGroup row aria-label="color theme" name="row-radio-buttons-group" >
                <Box>{res}</Box>

            </RadioGroup>
        </FormControl>
    );
};

export default SelectIcons;
