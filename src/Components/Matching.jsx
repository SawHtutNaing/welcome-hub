import React, { useState } from 'react';
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Paper, Tabs, Tab } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import H2Heading from './H2Heading';
import { Person } from '@mui/icons-material';
import User from '../assets/icons/user.svg'
import UserCard from './UserCard';


const caregivers = [
    { id: 1, date: 'Today', time: '14:54', name: 'Anna', agency: 'Your Agency', distance: '5 miles', match: '92%' },
    { id: 2, date: 'Today', time: '14:54', name: 'Jenny', agency: 'Your Agency', distance: '12 miles', match: '86%' },
];

const Matching = ({ showDetails }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };


    function UserIcon(){
        return <img src={User} alt="" />
    }
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <H2Heading text={'Matching results for Elizabeth San'} sx={{ color: '#2D3C8C' }} />
               <UserCard/>
            </Box>

            <Tabs value={activeTab} onChange={handleTabChange} sx={{ mb: 2 }} indicatorColor="primary">
                <Tab
                    sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', columnGap: '1rem' }}
                    icon={<Person sx={{ color: activeTab === 0 ? '#90386B' : 'grey' }} />}
                    label="Request details"
                />
                <Tab
                    sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', columnGap: '1rem' }}
                    icon={<svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.2292 7.8877C21.2292 10.0968 19.4384 11.8877 17.2292 11.8877C15.0201 11.8877 13.2292 10.0968 13.2292 7.8877C13.2292 5.67856 15.0201 3.8877 17.2292 3.8877C19.4384 3.8877 21.2292 5.67856 21.2292 7.8877Z" 
                    stroke={activeTab === 1 ? '#90386B' : 'grey'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.2292 14.8877C13.3633 14.8877 10.2292 18.0217 10.2292 21.8877H24.2292C24.2292 18.0217 21.0952 14.8877 17.2292 14.8877Z" 
                    stroke={activeTab === 1 ? '#90386B' : 'grey'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.46368 15.0968C1.71788 14.5812 1.22925 13.7201 1.22925 12.7448C1.22925 11.1669 2.50843 9.8877 4.08639 9.8877C5.16212 9.8877 6.09899 10.4822 6.58639 11.3606C7.07379 10.4822 8.01067 9.8877 9.08639 9.8877C10.6643 9.8877 11.9435 11.1669 11.9435 12.7448C11.9435 13.72 11.455 14.581 10.7094 15.0966L6.58681 19.8877L2.46368 15.0968Z" 
                    fill={activeTab === 1 ? '#90386B' : 'grey'} stroke={activeTab === 1 ? '#90386B' : 'grey'} strokeWidth="2" />
                </svg>
                    }
                    label="Matching results"
                />
            </Tabs>

            {activeTab === 1 && (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell><Checkbox sx={{ color: '#90386B' }} /></TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Caregiver's Name</TableCell>
                                <TableCell>Distance</TableCell>
                                <TableCell>Match</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {caregivers.map((caregiver) => (
                                <TableRow key={caregiver.id}>
                                    <TableCell><Checkbox sx={{ color: '#90386B' }} /></TableCell>
                                    <TableCell>{caregiver.date} <br /><span style={{ fontSize: '0.8em', color: '#999' }}>{caregiver.time}</span></TableCell>
                                    <TableCell>{caregiver.name} <br /><span style={{ fontSize: '0.8em', color: '#999' }}>{caregiver.agency}</span></TableCell>
                                    <TableCell>{caregiver.distance}</TableCell>
                                    <TableCell>{caregiver.match}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            sx={{ backgroundColor: '#90386B' }}
                                            endIcon={<ArrowForwardIcon />}
                                            onClick={() => showDetails(caregiver)} // Pass caregiver details to parent
                                        >
                                            See Details
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </>
    );
};

export default Matching;
