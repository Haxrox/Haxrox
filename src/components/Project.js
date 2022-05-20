import { Avatar, Card, CardActionArea, CardActions, CardContent, Chip, Collapse, Divider, Typography, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Web, Javascript, GitHub, Android } from '@mui/icons-material';
import React from 'react';
import { SocialButton } from './SocialButton.js';

const ACTION_ICONS = {
    GitHub: {
        icon: GitHub, //'icons/GitHub-Mark-120px-plus.png',
        tooltip: "GitHub Repository"
    },
    Web: {
        icon: Web,
        tooltip: "Website"
    }
}

const CHIP_DATA = {
    "Firebase Hosting": {
        url: "https://firebase.google.com/docs/hosting",
        icon: "icons/Firebase Hosting (1- Icon, Light).svg",
        color: "Firebase"
    },
    "JavaScript": {
        url: "https://www.javascript.com/",
        icon: <Javascript color="JavaScript"/>,
        color: "JavaScript"
    },
    "React": {
        url: "https://reactjs.org/",
        icon: "icons/React.svg",
        color: "React"
    },
    "Android": {
        url: "https://developer.android.com/",
        icon: <Android color = "Android"/>,
        color: "Android"
    },
    "Python": {
        url: "https://www.python.org/",
        icon: "icons/Python.png",
        color: "Python"
    },
    "Raspberry Pi": {
        url: "https://www.raspberrypi.org/",
        icon: "icons/RPi-Logo-SCREEN.png",
        color: "RPi"
    }
}

const CHIP_THEME = createTheme({
    palette: {
        Firebase: {
            light: "#039be5",
            main: "#039be5",
            dark: "#039be5",
            contrastText: "#f57c00"
        },
        JavaScript: {
            light: "#fcdc00",
            main: "#fcdc00",
            dark: "#fcdc00",
            contrastText: "#181818"
        },
        React: {
            light: "#282c34",
            main: "#282c34",
            dark: "#282c34",
            contrastText: "#61dafb"
        },
        Android: {
            light: "#3ddc84",
            main: "#3ddc84",
            dark: "#3ddc84",
            contrastText: "#ffffff"
        },
        Python: {
            light: "#ffd600",
            main: "#ffd600",
            dark: "#ffd600",
            contrastText: "#000000"
        },
        RPi: {
            light: "#c21e4a",
            main: "#c21e4a",
            dark: "#c21e4a",
            contrastText: "#000000"
        }
    }
});

class Project extends React.Component {
    render() {
        return (
            <p>Hello!</p>
        )
    }
}

function ProjectCard(props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpand = () => {
        setExpanded(true);
    };

    const handleContract = () => {
        setExpanded(false);
    }

    return (
        <Card raised={expanded} sx={{ position: 'relative', width: 350, minHeight: 500 }} onMouseEnter={handleExpand} onMouseLeave={handleContract}>
            <CardActionArea sx={{ minHeight: "100%" }}>
                <CardContent>
                    <Typography variant="h5">
                        {props.details.title}
                    </Typography>
                    <Typography sx={{ mb: 1 }} color="text.secondary">
                        {props.details.date}
                    </Typography>
                    <Typography variant="body2">
                        {props.details.shortDescription}
                    </Typography>
                </CardContent>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Divider variant="middle" />
                    <CardContent sx={{ spacing: 2 }}>
                        <Typography variant='body1' sx={{ mb: 1 }}>
                            Tech Stack
                        </Typography>
                        <Grid container direction="row" spacing={1}>
                            <ThemeProvider theme={CHIP_THEME}>
                                {props.details.techStack.map((element, index) => {
                                    const metadata = CHIP_DATA[element];
                                    const avatar = metadata?.icon && <Avatar alt={element} src={typeof(metadata.icon) === "string" ? metadata.icon : ""} sx={{ bgcolor: "transparent"}}>{metadata.icon}</Avatar>
                                    return <Grid item key={index}>
                                        <Chip
                                            key={index}
                                            label={element}
                                            avatar={avatar}
                                            component={metadata && "a"}
                                            href={metadata?.url}
                                            clickable={metadata?.url !== undefined}
                                        // color={metadata?.color}
                                        />
                                    </Grid>
                                })}
                            </ThemeProvider>
                        </Grid>
                        {/* <Chip label="Software" />
                        <Chip label="Hardware" />
                        <Chip label="School" /> */}
                    </CardContent>
                </Collapse>
            </CardActionArea>
            <CardActions sx={{ position: 'absolute', bottom: 0 }}>
                <ThemeProvider theme={CHIP_THEME}>

                {props.details.url.map((url, index) =>
                    <SocialButton key={index} label={url.type} icon={ACTION_ICONS[url.type]?.icon} url={url.href} height="24px" width="24px" color="primary" />
                    )}
                    </ThemeProvider>
                {/* {props.details.url.map((url, index) =>
                    <Tooltip key={index} title={ACTION_ICONS[url.type]?.tooltip}>
                        {React.forwardRef((props, ref) =>
                            <SocialButton ref={ref} label={url.type} icon={ACTION_ICONS[url.type]?.icon} url={url.href} height="24px" width="24px" />
                        )}
                    </Tooltip>
                )} */}
            </CardActions>
        </Card>

    )
}

export {
    Project,
    ProjectCard
};

