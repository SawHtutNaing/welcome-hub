import React, { useState } from 'react';
import { Box, AppBar, Drawer, Toolbar, List, ListItem, Typography, Container, IconButton, Pagination } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import H1Heading from './H1Heading';
import collection from '../assets/icons/collection.svg';
import H2Heading from './H2Heading';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
const Notification = () => {
    const notifications = [
        { id: 1, message: 'Match found! Your caregiver <span style="font-weight: bold; color: #545F71;">Anna Smith</span> is fit for client XX. Confirm his availability.', time: 'Today, 14:54', status: 'new' },
        { id: 2, message: 'Match accepted! Your caregiver <span style="font-weight: bold; color: #545F71;">Anna Jason</span> has been accepted.', time: 'Today, 14:54', status: 'new' },
        { id: 3, message: 'Update needed! Your caregiver <span style="font-weight: bold; color: #545F71;">Anna Smith</span> has finished work in different hours.', time: '10 May 2024, 14:54' },
        { id: 4, message: 'Match rejected! Your caregiver <span style="font-weight: bold; color: #545F71;">Anna Smith</span> has been rejected by a Client.', time: '7 May 2024, 14:54' },
        { id: 5, message: 'Availability confirmed! Recruiter <span style="font-weight: bold; color: #545F71;">AB</span> confirmed caregiver availability.', time: '5 May 2024, 14:54' },
        { id: 6, message: 'Match rejected! Recruiter <span style="font-weight: bold; color: #545F71;">AB</span> rejected match for caregiver <span style="font-weight: bold; color: #545F71;">Anna Smith</span>.', time: '5 May 2024, 14:54' },
      ];
      
  return (
   <>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <H2Heading text={'Notifications'} sx={{ color: '#2D3C8C' }} />
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

  </Box>
    <Box sx={{ marginTop: '3rem' }}>
    {notifications.map((notification) => (
      <Box
        key={notification.id}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '1px solid',
          borderColor: notification.status === 'new' ? '#6B3089' : '#DDDCE7',
          borderRadius: 2,
          p: 2,
          mb: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              width: 10,
              height: 10,
              bgcolor: notification.status === 'new' ? '#9E3A8D' : '',
              padding: '0.5rem',
              borderRadius: '50%',
              mr: 2,
              marginTop: '-3rem',
            }}
          />
          <Box>
            <Typography dangerouslySetInnerHTML={{ __html: notification.message }} />
            <Typography variant="caption" sx={{ color: '#999FA7', fontSize: '10px' }}>
              {notification.time}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton size="small" sx={{ backgroundColor: 'rgba(105, 98, 157, 0.2)', borderRadius: '6px', color: '#2D3C8C' }}>
            <CloseIcon />
          </IconButton>
          <IconButton size="small" sx={{ backgroundColor: 'rgba(105, 98, 157, 0.2)', borderRadius: '6px', color: '#2D3C8C' }}>
            <CheckIcon />
          </IconButton>
          <IconButton size="small" sx={{ backgroundColor: 'rgba(105, 98, 157, 0.2)', borderRadius: '6px', color: '#2D3C8C' }}>
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Box>
    ))}

    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
      <Pagination count={6} variant="outlined" shape="rounded" />
    </Box>
  </Box></>
  )
}

export default Notification