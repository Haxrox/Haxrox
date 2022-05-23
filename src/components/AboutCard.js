import { Paper } from '@mui/material';

function AboutCard(props) {
    // bgcolor: 'primary.light',  typography: 'body1', 
    return (
        <Paper variant="outlined" sx={{ px: 2, pb: 2 }}>
            <Paper color='primary' sx={{ color: 'primary.contrastText', fontWeight: 'bold', typography: 'h5', textTransform: 'uppercase', bgcolor: 'primary.main', display: 'inline-flex', alignSelf: 'flex-start', zIndex: 'mobile stepper', p: 1, mb: -128, elevation: 2, position: 'relative', top: -24 }}>
                {props.title}
            </Paper>
            {props.children}
        </Paper>
    )
}

export default AboutCard;