import React from 'react';
import {Box, IconButton} from '@mui/material';

class SocialButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <IconButton aria-label={this.props.label} className="socials">
                <a href={this.props.url} target="_blank" rel="noopener noreferrer">
                    <img src={this.props.icon} className="Socials-icon" alt={this.props.label} 
                        width={this.props.width || '48px'} 
                        height={this.props.height || '48px'}
                    />
                </a>
            </IconButton>
        )
    }
}

class SocialButtons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Box>
                <SocialButton label="LinkedIn" url="https://www.linkedin.com/in/bell-chen/" icon = "/icons/linkedin.svg" height = {this.props.height} width = {this.props.width}/>
                <SocialButton label="GitHub" url="https://github.com/Haxrox" icon = "/icons/GitHub-Mark-120px-plus.png" height = {this.props.height} width = {this.props.width}/>
            </Box>
        )
    }
}

export {
    SocialButtons,  
    SocialButton
}