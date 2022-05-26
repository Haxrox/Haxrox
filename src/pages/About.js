import { NavigateNext } from '@mui/icons-material';
import { Box, Card, CardActionArea, CardContent, CardMedia, Link, Stack, Typography } from '@mui/material';
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
                        I am an undergraduate student at the University of British Columbia studying Computer Engineering. I am a committed worker with an eagerness to learn and grow through experience. I strive to further my knowledge in the tech industry and am always looking forward to learning something new.
                    </Typography>
                </AboutCard>
                <AboutCard title="Education">
                    <Stack spacing={2}>
                        <Card >
                            <CardActionArea href="https://www.ubc.ca/" sx={{ display: 'flex' }}>
                                <CardMedia component="img" sx={{ maxWidth: 108 }} image="https://media-exp1.licdn.com/dms/image/C4E0BAQH415qlDBkj8Q/company-logo_200_200/0/1568742934345?e=1661385600&v=beta&t=zIWcbajJThsUIGkgE2sXxdDj9IB1l_x4rCjM9sBP-jc" alt="Logo" />
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
                                <CardMedia component="img" sx={{ maxWidth: 108 }} image="https://media-exp1.licdn.com/dms/image/C560BAQFmEh_g4lXQ-g/company-logo_200_200/0/1628103379432?e=1661385600&v=beta&t=WggqaRFCftgiEQtdBqRTEv25wFglpFwtSQHQOn8YXPA" alt="Logo" />
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
                                        Completed two computer science courses, <Link underline="hover" href="https://www.sfu.ca/students/calendar/2019/fall/courses/cmpt/125.html">Introduction to Computer Science and Programming II</Link> (A+) and <Link underline="hover" href="https://www.sfu.ca/students/calendar/2019/fall/courses/cmpt/127.html">Computer Laboratory</Link> (A+)
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Stack>
                </AboutCard>
                <AboutCard title="Skills">
                    <Typography variant="body1">
                        {/* FIX FORMATTING */}
                        <b>Programming Languages:</b> C, C++, Java, Python, Node.js, Assembly, JavaScript, TypeScript, SQL
                        <br />
                        <b>Hardware:</b> Arduino, Raspberry Pi, Adafruit ItsyBitsy, Verilog, FPGA, Oscilloscope, Soldering
                        <br />
                        <b>Cloud Software:</b> Microsoft Azure Virtual Machine, Cloud Functions, Google Cloud App Engine, Compute Engine, Natural Language Processing, Firebase Firestore, Hosting, Authentication, AWS AppSync, Amazon Elastic Compute (EC2), Relational Database (RDS), SSH, SCP
                        <br />
                        <b>Programs:</b> Git, GitHub, BASH, PowerShell, Quartus, ModelSim, SOLIDWORKS, MATLAB, GDB, Make, Valgrind, Quartus, ModelSim, Jupyter Notebook
                        <br />
                        <b>Web Languages: </b>React, Flutter, HTML, CSS
                        <br />
                        <b>IDEs:</b> Visual Studio Code, Visual Studio, IntelliJ IDEA, Android Studio, Arduino IDE
                        <br />
                        <b>Software:</b> Adobe Photoshop, Indesign Illustrator, Microsoft Office, Google Workspace
                        <br />
                        <b>Concepts:</b> Bluetooth Low Energy (BLE), Concurrency, Multi-threading, Networking, Caches, Heaps, Garbage Collection, Local Hax, Files
                    </Typography>
                </AboutCard>
                <AboutCard title="Socials">
                    <SocialButtons color='primary'>
                    </SocialButtons>
                </AboutCard>
            </Stack>

            <NavigateButton href='/projects' right='16px'>
                Projects
                <NavigateNext />
            </NavigateButton>
        </Box>
    );
}

export default About;
