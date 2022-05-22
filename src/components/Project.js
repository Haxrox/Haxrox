import { Android, Api, Css, GitHub, Html, Javascript, NavigateBefore, NavigateNext, Web } from '@mui/icons-material';
import { Backdrop, Box, Card, CardActionArea, CardActions, CardContent, Chip, Collapse, Divider, Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import Header from './Header.js';
import NavigateButton from './NavigationButton.js';
import { SocialButton } from './SocialButton.js';

const ACTION_ICONS = {
    GitHub: {
        icon: GitHub, //'icons/GitHub-Mark-120px-plus.png',
        tooltip: "GitHub Repository"
    },
    Web: {
        icon: Web,
        tooltip: "Website"
    },
    Backend: {
        icon: Api,
        tooltip: "Backend"
    }
}

const CHIP_DATA = {
    "Firebase Hosting": {
        url: "https://firebase.google.com/docs/hosting",
        icon: "icons/Firebase Hosting (1- Icon, Light).svg",
        color: "Firebase"
    },
    "Java": {
        url: "https://www.java.com/en/",
        icon: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"
    },
    "HTML": {
        icon: <Html color="HTML" />,
        color: "HTML"
    },
    "CSS": {
        icon: <Css color="CSS" />,
        color: "CSS"
    },
    "JavaScript": {
        url: "https://www.javascript.com/",
        icon: <Javascript color="JavaScript"/>,
        color: "JavaScript"
    },
    "Flutter": {
        url: "https://flutter.dev/",
        icon: "icons/Flutter.svg",
        color: "Flutter"
    },
    "React": {
        url: "https://reactjs.org/",
        icon: "icons/React.svg",
        color: "React"
    },
    "Android": {
        url: "https://developer.android.com/",
        icon: <Android color="Android" />,
        color: "Android"
    },
    "Android Studio": {
        url: "https://developer.android.com/",
        icon: <Android color = "Android"/>,
        color: "Android"
    },
    "Python": {
        url: "https://www.python.org/",
        icon: "icons/Python.png",
        color: "Python"
    },
    "CircuitPython": {
        url: "https://circuitpython.org/",
        icon: "https://cdn-shop.adafruit.com/categories/956/image.png",
        color: "Python"
    },
    "Raspberry Pi": {
        url: "https://www.raspberrypi.org/",
        icon: "icons/RPi-Logo-SCREEN.png",
        color: "RPi"
    },
    "BlueZ": {
        url: "http://www.bluez.org/",
        icon: "http://www.bluez.org/wp-content/themes/bluez/tuxicon.png",
        color: null
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
        HTML: {
            light: "#f16524",
            main: "#f16524",
            dark: "#f16524",
            contrastText: "#ffffff"
        },
        CSS: {
            light: "#2965f1",
            main: "#2965f1",
            dark: "#2965f1",
            contrastText: "#ffffff"
        },
        JavaScript: {
            light: "#fcdc00",
            main: "#fcdc00",
            dark: "#fcdc00",
            contrastText: "#181818"
        },
        Flutter: {
            light: "#61c9f9",
            main: "#61c9f9",
            dark: "#61c9f9",
            contrastText: "#ffffff"
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

function Project(props) {
    // const navigate = useNavigate();
    // const location = useLocation();
    // const navigationType = useNavigationType();
    // console.log(navigationType);

    return (
        <Box>
            <Header tab={props.title} />
            <Box sx={{ p: 2, pb: 10 }}>
                <p>WIP</p>
            </Box>
            {props.prev ?
                <NavigateButton href={`/projects/${props.prev.title.replaceAll(" ", "%20")}`} left='16px'>
                    <NavigateBefore />
                    {props.prev.title}
                </NavigateButton> : null
            }
            {props.next ?
                <NavigateButton href={`/projects/${props.next.title.replaceAll(" ", "%20")}`} right='16px'>
                    {props.next.title}
                    <NavigateNext />
                </NavigateButton> : null
            }
        </Box>
    )
}

function ProjectDialog(props) {
    // console.log("Render dialog");
    // console.log(props);
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={Object.keys(props).length > 0}>
        <Project {...props} />
    </Backdrop>
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
        /** 
         * Add filter tab here. Use grid layout (?)
         */
        <Card raised={expanded} sx={{ position: 'relative', width: 350, minHeight: 500 }} onMouseEnter={handleExpand} onMouseLeave={handleContract}>
            <CardActionArea sx={{ minHeight: "100%" }} onClick={props.navigate}>
                <CardContent>
                    <Typography variant="h5">
                        {props.title}
                    </Typography>
                    <Typography color="text.secondary">
                        {props.type}
                    </Typography>
                    <Typography variant="subtitle" color="text.secondary" gutterBottom>
                        {props.date}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }} >
                        {props.shortDescription}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Divider variant="middle" />
                <CardContent sx={{ spacing: 2 }}>
                    <Typography variant='body1' sx={{ mb: 1 }}>
                        Technologies
                    </Typography>
                    <Grid container direction="row" spacing={1}>
                        <ThemeProvider theme={CHIP_THEME}>
                            {props.techStack.map((element, index) => {
                                const metadata = CHIP_DATA[element];
                                // const avatar = metadata?.icon && <Avatar alt={element} src={typeof (metadata.icon) === "string" ? metadata.icon : ""} sx={{ bgcolor: "transparent" }}>{metadata.icon}</Avatar>
                                return <Grid item key={index}>
                                    <Chip
                                        key={index}
                                        label={element}
                                        // avatar={avatar}
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
            <CardActions sx={{ position: 'absolute', bottom: 0 }} disableSpacing>
                {props.url?.map((url, index) =>
                    <SocialButton key={index} label={url.type} icon={ACTION_ICONS[url.type]?.icon} url={url.href} height="24px" width="24px" color="primary" />
                )}
                {/* <Button id="learn" onClick={navigateProject}>Learn More</Button> */}
                {/* {props.url.map((url, index) =>
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
    ProjectDialog,
    ProjectCard
};

