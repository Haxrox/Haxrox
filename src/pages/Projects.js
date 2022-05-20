import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { Grid, Box } from '@mui/material';
import Header from '../components/Header.js';
import NavigateButton from '../components/NavigationButton.js';
import { ProjectCard } from '../components/Project.js';

const PROJECTS = [
    {
        title: "Personal Website",
        date: "May 2022",
        type: "Software",
        shortDescription: "Portfolio with all my personal projects",
        longDescription: "Detailed description w/ build instructions, what i learned, etc, etc",
        techStack: ['Firebase Hosting', 'React', 'JavaScript'],
        url: [
            {
                type: "GitHub",
                href: "https://github.com/haxrox/haxrox"
            },
            {
                type: "Web",
                href: "https://haxtech.web.app/"
            }
        ]
    },
    {
        title: "HaxRover",
        date: "May 2022 - Present",
        type: "Both",
        shortDescription: "Rover built using a Raspberry Pi Zero W running Ubuntu Desktop 32-bit, motor driver, camera module, and 2 servo motors",
        longDescription: "Detailed description w/ build instructions, what i learned, etc, etc",
        techStack: ['Raspberry Pi', 'Python', 'Android', 'Java', 'Linux', 'BlueZ', 'Bluetooth Low Energy', 'DBus', 'Concurrency', 'BASH'],
        url: [
            {
                type: "GitHub",
                href: "https://github.com/Haxrox/HaxRover"
            }
        ]
    },
    {
        title: "Haxdroid",
        date: "December 2021 - Present",
        type: "Software",
        shortDescription: "Discord utility bot written in Node.js hosted on a Microsoft Azure Standard B1 Linux Virtual Machine running Ubuntu Server 16.04-LTS",
        longDescription: "Detailed description w/ build instructions, what i learned, etc, etc",
        techStack: ['Microsoft Azure Virtual Machine', 'Linux', 'BASH', 'Node.js', 'Web Scraping', 'HTTPS API Calls', 'Cryptography'],
        url: [
            {
                type: "GitHub",
                href: "https://github.com/Haxrox/Haxdroid"
            }
        ]
    },
    {
        title: "HaxRover",
        date: "May 2022",
        type: "Both",
        shortDescription: "Rover built using a Raspberry Pi Zero W running Ubuntu Desktop 32-bit, motor driver, camera module, and 2 servo motors",
        longDescription: "Detailed description w/ build instructions, what i learned, etc, etc",
        techStack: ['Raspberry Pi', 'Python', 'Linux', 'BlueZ', 'DBus', 'Android', 'Bluetooth Low Energy', 'Concurrency'],
        url: [
            {
                type: "GitHub",
                href: "https://github.com/Haxrox/HaxRover"
            }
        ]
    },
    {
        title: "HaxRover",
        date: "May 2022",
        type: "Both",
        shortDescription: "Rover built using a Raspberry Pi Zero W running Ubuntu Desktop 32-bit, motor driver, camera module, and 2 servo motors",
        longDescription: "Detailed description w/ build instructions, what i learned, etc, etc",
        techStack: ['Firebase Hosting', 'Raspberry Pi', 'Python', 'Linux', 'BlueZ', 'DBus', 'Android', 'Bluetooth Low Energy', 'Concurrency'],
        url: [
            {
                type: "GitHub",
                href: "https://github.com/Haxrox/HaxRover"
            }
        ]
    }
]

function Projects() {
    return (
        <Box className="Projects">
            <Header tab="projects"></Header>
            <Grid container sx={{ m: 2 }} spacing={2} direction = "row">
                {PROJECTS.map((project, index) =>
                    <Grid item key={index}>
                        <ProjectCard details={project} />               
                    </Grid>
                )}
            </Grid>
            <NavigateButton href='/about' left='16px'>
                <NavigateBefore />
                About
            </NavigateButton>
            <NavigateButton href='/contact' right='16px'>
                Contact
                <NavigateNext />
            </NavigateButton>
        </Box>
    );
}

export default Projects;
