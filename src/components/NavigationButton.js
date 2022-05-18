import { Fab } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";


function NavigateButton(props) {
    const navigate = useNavigate();

    return (
        <Fab variant="extended"
            onClick={
                () => { navigate(props.href) }
            }
            sx={{ position: props.position || 'fixed', bottom: props.bottom || '16px', left: props.left, right: props.right }}
            aria-label="Fab"
            color='secondary'
        >
            {props.children}
        </Fab>
    )
}

export default NavigateButton;