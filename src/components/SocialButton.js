import { GitHub, LinkedIn } from '@mui/icons-material';
import { Box, IconButton, Tooltip } from '@mui/material';
import React from 'react';

class SocialButton extends React.Component {
    render() {
        return (
            <Tooltip title={this.props.tooltip || this.props.label}>
                <IconButton aria-label={this.props.label} variant='outlined' className={`${this.props.label}-button`} >
                    <a href={this.props.url} target="_blank" rel="noopener noreferrer">
                        {typeof (this.props.icon) === 'string' ?
                            <Box component="img" src={this.props.icon} className={`${this.props.label}-icon`} alt={this.props.label}
                                width={this.props.width || '48px'}
                                height={this.props.height || '48px'}
                                sx={{ color: 'primary.main' || 'white', bgcolor: 'transparent' }}
                            /> : <this.props.icon className={`${this.props.label}-icon`} alt={this.props.label}
                                sx={{ width: this.props.width || '48px', height: this.props.height || '48px' }}
                                color={this.props.color || 'white'}
                            />
                        }
                    </a>
                </IconButton>
            </Tooltip>
        )
    }
}

class SocialButtons extends React.Component {
    render() {
        return (
            <Box>
                <SocialButton label="LinkedIn" url="https://www.linkedin.com/in/bell-chen/" icon={LinkedIn || this.props.linkedInIcon} height={this.props.height} width={this.props.width} color={this.props.linkedInColor || this.props.color}/>
                <SocialButton label="GitHub" url="https://github.com/Haxrox" icon={GitHub || this.props.gitHubIcon} height={this.props.height} width={this.props.width} color={this.props.gitHubColor || this.props.color}/>
                {this.props.children}
                {/* <SocialButton label="LinkedIn" url="https://www.linkedin.com/in/bell-chen/" icon="/icons/LinkedIn.svg" height={this.props.height} width={this.props.width} />
                <SocialButton label="GitHub" url="https://github.com/Haxrox" icon="/icons/GitHub-Mark-120px-plus.png" height={this.props.height} width={this.props.width} /> */}
            </Box>
        )
    }
}

export {
    SocialButtons,
    SocialButton
};

