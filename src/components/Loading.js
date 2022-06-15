import { Box, CircularProgress } from '@mui/material';

function Loading() {
    return (
        <Box alignItems="center" justifyContent="center" sx={{ display: 'flex', height: "100vh" }}>
            <CircularProgress />
        </Box>
    )
}

export default Loading;