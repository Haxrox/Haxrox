import { NavigateBefore, NavigateNext } from '@mui/icons-material'; 
import { Grid, Box } from '@mui/material';
import Header from '../components/Header.js';
import NavigateButton from '../components/NavigationButton.js';
import { ProjectCard } from '../components/Project.js';

/**
 * Add some sort of sorting algorithm? - move to backend (?)
 */
const PROJECTS = [
    {
        title: "HaxRover",
        date: "May 2022 - Present",
        type: "Personal Project - Hardware + Software",
        shortDescription: "Rover built using a Raspberry Pi Zero W running Ubuntu Desktop 32-bit, motor driver, camera module, and 2 servo motors",
        longDescription: "Detailed description w/ build instructions, what i learned, etc, etc",
        techStack: ['Raspberry Pi', 'Python', 'Android Studio', 'Java', 'Linux', 'BlueZ', 'Bluetooth Low Energy', 'DBus', 'BASH'],
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
        type: "Personal Project - Software",
        shortDescription: "Discord utility bot written in Node.js hosted on a Microsoft Azure Standard B1 Linux Virtual Machine running Ubuntu Server 16.04-LTS",
        longDescription: "Detailed description w/ build instructions, what i learned, etc, etc",
        techStack: ['Microsoft Azure Virtual Machine', 'Linux', 'BASH', 'Node.js', 'Web Scraping'],
        url: [
            {
                type: "GitHub",
                href: "https://github.com/Haxrox/Haxdroid"
            }
        ]
    },
    {
        title: "HaxFunctions",
        date: "December 2021 - Present",
        type: "Personal Project - Software",
        shortDescription: "Serverless Backend API for redesigning GitHub Webhook message embeds in Discord",
        longDescription: "Detailed description w/ build instructions, what i learned, etc, etc",
        techStack: ['Microsoft Azure Cloud Functions', 'Node.js'],
        url: [
            {
                type: "GitHub",
                href: "https://github.com/Haxrox/HaxFunctions"
            }
        ]
    },
    {
        title: "Hello! My Name Is ...",
        date: "June 2020 - Present",
        type: "Personal Project - Software",
        shortDescription: "Android BLE chatting app",
        longDescription: "Detailed description w/ build instructions, what i learned, etc, etc",
        techStack: ['Java', 'Android', 'Bluetooth Low Energy', 'AWS AppSync', 'AWS Amplify Datastore'],
        url: []
    },
    {
        title: "Personal Website",
        date: "May 2022",
        type: "Personal Project - Software",
        shortDescription: "Portfolio with all my personal projects",
        longDescription: "Detailed description w/ build instructions, what i learned, etc, etc",
        techStack: ['Firebase Hosting', 'React', 'JavaScript', 'GitHub Actions'],
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
        title: "The Exploring Rover",
        date: "March 2022 - April 2022",
        type: "UBC CPEN 291 - Hardware + Software",
        shortDescription: "Rover constructed using a Raspberry Pi Zero W running Raspberry Pi OS 32-bit, motor driver, 2 servo motors and camera module",
        longDescription: "Detailed description w/ build instructions, what i learned, etc, etc",
        techStack: ['Raspberry Pi', 'Python', 'Linux', 'WebSockets', 'Node.js', 'Express.js', 'HTML', 'CSS'],
        url: []
    },
    {
        title: "Fithub",
        date: "February 2022 - April 2022",
        type: "UBC Launchpad - Software",
        shortDescription: "Web application* to help users organize and follow playlists of exercises *NOTE: must accept backend certificate to view videos",
        longDescription: "Detailed description w/ build instructions, what i learned, etc, etc",
        techStack: ['Flutter', 'Node.js', 'Express.js', 'Sequelize', 'PostgreSQL', 'Firebase Hosting', 'GitHub Actions', 'Amazon Elastic Compute (EC2)', 'Amazon Relational Database Service (RDS)'],
        url: [
            {
                type: "GitHub",
                href: "https://github.com/haxrox/haxrox"
            },
            {
                type: "Web",
                href: "https://fithub-launchpad.web.app/#/"
            },
            {
                type: "Backend",
                href: "https://ec2-54-193-129-230.us-west-1.compute.amazonaws.com:8000/"
            }
        ]
    },
    {
        title: "Entertainment Biped Robot",
        date: "January 2022 - March 2022",
        type: "UBC CPEN 291 - Hardware + Software",
        shortDescription: "Biped Robot that dances to a variety of songs using an ItsyBitsy M4 microcontroller, servo motors, colour TFT LCD, piezo buzzer, 3x4 numeric matrix keypad",
        longDescription: "Detailed description w/ build instructions, what i learned, etc, etc",
        techStack: ['ItsyBitsy', 'CircuitPython'],
        url: [
            {
                type: "GitHub",
                href: "https://github.com/Haxrox/HaxRover"
            }
        ]
    },
    {
        title: "Sitdown",
        date: "January 2022",
        type: "nwHacks Hackathon - Hardware + Software",
        shortDescription: "Web application to help students find or reserve seats in common study areas",
        longDescription: "Detailed description w/ build instructions, what i learned, etc, etc",
        techStack: ['Firebase Firestore', 'Firebase Hosting', 'Firebase Authentication', 'React', 'Bootstrap', 'JavaScript'],
        url: [
            {
                type: "GitHub",
                href: "https://github.com/Haxrox/sitdown"
            },
            {
                type: "Web", 
                href: "https://nwhacks-sitdown.web.app/"
            }
        ]
    },
    {
        title: "Simple RISC Machine",
        date: "September 2021 - December 2021",
        type: "UBC CPEN 211 - Hardware",
        shortDescription: "Reduced Instruction Set Computer (RISC) written in Verilog on an Intel FPGA DE1-SoC",
        longDescription: "Detailed description w/ build instructions, what i learned, etc, etc",
        techStack: ['Assembly', 'Verilog', 'FPGA', 'Quartus', 'ModelSim'],
        url: []
    },
    {
        title: "Mini Projects",
        date: "September 2021 - December 2021",
        type: "UBC CPEN 221 - Software",
        shortDescription: "Used Java, OOP, algorithm efficiency, concurrency, multithreading, and big data processing concepts to code algorithms for a series of tasks",
        longDescription: "Detailed description w/ build instructions, what i learned, etc, etc",
        techStack: ['Java', 'IntelliJ IDEA'],
        url: []
    },
    {
        title: "BLE Audio",
        date: "May 2021",
        type: "Personal Project - Software",
        shortDescription: "Android application that uses the Opus Codec to encode and decode audio data to send to another another device using BLE",
        longDescription: "Detailed description w/ build instructions, what i learned, etc, etc",
        techStack: ['Java', 'Android Studio', 'Bluetooth Low Energy', 'Opus Codec'],
        url: []
    },
    {
        title: "Android Opus Codec Prototype",
        date: "May 2021",
        type: "Personal Project - Software",
        shortDescription: "Android application that uses the Opus Codec to encode and decode audio data",
        longDescription: "Detailed description w/ build instructions, what i learned, etc, etc",
        techStack: ['Java', 'Android Studio', 'Opus Codec'],
        url: [
            {
                type: "GitHub",
                href: "https://github.com/Haxrox/Android-OpusCodecPrototype"
            }
        ]
    },
    {
        title: "Button Masher",
        date: "December 2020 - May 2021",
        type: "Personal Project - Software",
        shortDescription: "Android application Button Masher game",
        longDescription: "Detailed description w/ build instructions, what i learned, etc, etc",
        techStack: ['Java', 'Android Studio', 'Firebase Firestore'],
        url: [
            {
                type: "GitHub", 
                href: "https://github.com/Haxrox/Android-ButtonMasher"
            }
        ]
    },
    {
        title: "Claw Retrieval System",
        date: "February 2021 - March 2021",
        type: "UBC APSC 101 - Hardware",
        shortDescription: "Claw manufactured out of household items to pick up multifarious items",
        longDescription: "Detailed description w/ build instructions, what i learned, etc, etc",
        techStack: ['C', 'Arduino'],
        url: [
            {
                type: "GitHub",
                href: "https://github.com/Haxrox/ClawRetrievalSystem"
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
