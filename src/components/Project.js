import { Card, CardActionArea, CardActions, CardContent, Chip, Collapse, Divider, Typography } from '@mui/material';
import React from 'react';
import { SocialButton } from './SocialButton.js';

class Project extends React.Component {
    render() {
        return (
            <p>Hello!</p>
        )
    }
}

function ProjectCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpand = () => {
        setExpanded(true);
    };

    const handleContract = () => {
        setExpanded(false);
    }

    return (
        <Card sx={{ maxWidth: 350 }}>
            <CardActionArea onMouseEnter={handleExpand} onMouseLeave={handleContract}>
                <CardContent>
                    <Typography variant="h4" component="div">
                        Projects
                    </Typography>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Posuere lorem ipsum dolor sit amet. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus. Dui accumsan sit amet nulla facilisi. Maecenas accumsan lacus vel facilisis volutpat. In ante metus dictum at. Ornare aenean euismod elementum nisi. Morbi leo urna molestie at elementum eu facilisis sed. Dolor purus non enim praesent elementum facilisis.
                    </Typography>
                </CardContent>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Divider variant="middle" />
                    <CardContent sx={{ spacing: 2 }}>
                        <Typography variant='h6'>
                            Tech Stack
                        </Typography>
                        <Chip label="Software" />
                        <Chip label="Hardware" />
                        <Chip label="School" />
                    </CardContent>
                </Collapse>
            </CardActionArea>
            <CardActions>
                <SocialButton icon='icons/GitHub-Mark-120px-plus.png' url="https://github.com/Haxrox" height="24px" width="24px" />
            </CardActions>
        </Card>
    )
}

export {
    Project,
    ProjectCard
};

