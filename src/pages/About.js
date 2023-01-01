import { NavigateNext } from '@mui/icons-material';
import { Box, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import AboutCard from '../components/AboutCard.js';
import Header from '../components/Header.js';
import NavigateButton from '../components/NavigationButton.js';
import { SocialButtons } from '../components/SocialButton.js';

// TODO: include education + courses (?)
function About() {
    return (
        <Box className="About">
            <Header tab="about"></Header>
            <Stack spacing={5} sx={{ p: 2, mt: 2 }}>
                <AboutCard title="About Me">
                    <Typography variant="body1">
As a highly motivated and dedicated Computer Engineering undergraduate at the University of British Columbia, my passion for technology and desire to make a meaningful impact in the industry drive me to excel. I have a strong work ethic and am constantly seeking new challenges and opportunities to expand my skills and push the boundaries of what is possible. I stay current with the latest advancements in hardware and software, and am committed to finding innovative ways to apply my knowledge. Whether it's exploring new technologies or finding ways to make a difference, I am always eager to learn and grow in the tech industry.                    </Typography>
                </AboutCard>
                <AboutCard title="Education">
                    <Stack spacing={2}>
                        <Card >
                            <CardActionArea href="https://www.ubc.ca/" sx={{ display: 'flex' }}>
                                <CardMedia component="img" sx={{ maxWidth: 108 }} image="icons/UBC.jfif" alt="UBC Logo" />
                                <CardContent sx={{ width: "100%", p: 2 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography variant="h6">
                                            University of British Columbia
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            September, 2020 - May, 2025
                                        </Typography>
                                    </Box>
                                    <Typography variant="subtitle2">
                                        Bachelor of Applied Science - Computer Engineering - 4.0/4.33 GPA
                                    </Typography>
                                    <Typography variant="body2">
                                        Dean's Honor List
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card >
                            <CardActionArea href="https://www.sfu.ca/" sx={{ display: 'flex' }}>
                                <CardMedia component="img" sx={{ maxWidth: 108 }} image="icons/SFU.jfif" alt="SFU Logo" />
                                <CardContent sx={{ width: "100%", p: 2 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography variant="h6" >
                                            Simon Fraser University
                                        </Typography>
                                        <Typography variant="subtitle1"  >
                                            September 2019 - December, 2019
                                        </Typography>
                                    </Box>
                                    <Typography variant="subtitle2">
                                        Concurrent Studies - 4.33/4.33 GPA
                                    </Typography>
                                    <Typography variant="body2">
                                        Completed two computer science courses Introduction to Computer Science II (A+) and Computer Laboratory (A+)
                                        {/* Completed two computer science courses, <Link underline="hover" href="https://www.sfu.ca/students/calendar/2019/fall/courses/cmpt/125.html">Introduction to Computer Science and Programming II</Link> (A+) and <Link underline="hover" href="https://www.sfu.ca/students/calendar/2019/fall/courses/cmpt/127.html">Computer Laboratory</Link> (A+) */}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Stack>
                </AboutCard>
                <AboutCard title="Technologies">
                    <Typography variant="body1">
                        {/* FIX FORMATTING */}
                        <b>Programming Languages:</b> C, C++, Java, Python, Node.js, Assembly, JavaScript, TypeScript, SQL
                        <br />
                        <b>Hardware:</b> Arduino, Raspberry Pi, Adafruit ItsyBitsy, Verilog, FPGA, Oscilloscope, Soldering
                        <br />
                        <b>Cloud Software:</b> Microsoft Azure Virtual Machine, Cloud Functions, Google Cloud App Engine, Compute Engine, Natural Language Processing, Firebase Firestore, Hosting, Authentication, AWS AppSync, Amazon Elastic Compute (EC2), Relational Database (RDS), SSH, SCP, MongoDB, PostgreSQL
                        <br />
                        <b>Programs:</b> Git, GitHub, BASH, PowerShell, Intel Quartus, ModelSim, Platform Designer, Monitor Program, SOLIDWORKS, MATLAB, GDB, Make, Valgrind, Quartus, ModelSim, Jupyter Notebook
                        <br />
                        <b>Web Frameworks: </b>React, Flutter, HTML, CSS
                        <br />
                        <b>IDEs:</b> Visual Studio Code, Visual Studio, IntelliJ IDEA, Android Studio, Arduino IDE
                        <br />
                        <b>Software:</b> Adobe Photoshop, Indesign, Illustrator, Microsoft Office, Google Workspace
                        <br />
                        <b>Concepts:</b> Bluetooth Low Energy (BLE), Concurrency, Multithreading, Networking, Caches, Heaps, Garbage Collection, Local Hax, Files
                    </Typography>
                </AboutCard>
                <AboutCard title="Experience">
                    <Stack spacing={2}>
                        <Card >
                            <CardActionArea href="https://ece.ubc.ca/" sx={{ display: 'flex' }}>
                                <CardMedia component="img" sx={{ maxWidth: 108 }} image="icons/ECE.jpg" alt="UBC ECE Logo" />
                                <CardContent sx={{ width: "100%", p: 2 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography variant="h6">
                                            APSC 160 Teaching Assistant
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            October, 2022 - Present
                                        </Typography>
                                    </Box>
                                    <Typography variant="subtitle2">
                                        UBC Electrical and Computer Engineering
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card >
                            <CardActionArea href="https://www.mathtutornetwork.com/" sx={{ display: 'flex' }}>
                                <CardMedia component="img" sx={{ maxWidth: 108 }} image="icons/MathTutorNetwork.jpg" alt="Math Tutor Network Logo" />
                                <CardContent sx={{ width: "100%", p: 2 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography variant="h6">
                                            Junior Academic Tutor II
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            September, 2021 - Present
                                        </Typography>
                                    </Box>
                                    <Typography variant="subtitle2">
                                        Math Tutor Network
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card >
                            <CardActionArea href="https://ubclaunchpad.com/" sx={{ display: 'flex' }}>
                                <CardMedia component="img" sx={{ maxWidth: 108 }} image="icons/Launchpad.png" alt="UBC Launch Pad Logo" />
                                <CardContent sx={{ width: "100%", p: 2 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography variant="h6">
                                            Software Developer
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            February, 2022 - April 2022
                                        </Typography>
                                    </Box>
                                    <Typography variant="subtitle2">
                                        UBC Launch Pad
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Stack>
                </AboutCard>
                <AboutCard title="Socials">
                    <SocialButtons color='primary'>
                    </SocialButtons>
                </AboutCard>
            </Stack>

            {/* <Footer /> */}

            <NavigateButton href='/projects' right='16px'>
                Projects
                <NavigateNext />
            </NavigateButton>

        </Box>
    );
}

export default About;
