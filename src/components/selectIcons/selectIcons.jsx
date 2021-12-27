import React, {useEffect, useState} from 'react';
import {Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography} from "@material-ui/core";
// import Icon from './icons/icon'
// import PhotoIcon from "./icons/photoIcon";
// import LoveIcon from "./icons/loveIcon";
import Icons from './icons/icons'





const SelectIcons = ({getIcon}) => {
    const [icons, setIcons] = useState()
    const res = Icons.icons.map(item =>  <FormControlLabel onClick={getIcon} key={item.id} value={item.name} control={<Radio/>} label={item.src}/>)
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
