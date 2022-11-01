import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Grid from '@mui/material/Grid';



const lightColor = 'rgba(255, 255, 255, 0.7)';

const categories = [
    {
        id: '',
        children: [
            {
                id: 'Dashboard', icon: <DashboardIcon />,
            },
            { id: 'View Drives', icon: <DnsRoundedIcon /> },
            { id: 'Account', link:"/#account",  icon: <PermMediaOutlinedIcon /> },
            { id: 'Settings', icon: <PublicIcon /> },
            { id: 'Add Drive', icon: <SettingsEthernetIcon /> },
        ],
    }
    
];

const item = {
    py: '2px',
    px: 3,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover, &:focus': {
        bgcolor: 'rgba(255, 255, 255, 0.08)',
    },
};

const itemCategory = {
    boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
    py: 1.5,
    px: 3,
};

export default function Navigator(props) {
    const { ...other } = props;

    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
                    S2C Nexus
                </ListItem>
                <List sx={{ width: '100%', maxWidth: 360, ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="TCS" src="C:\s2c-nexus-frontend\src\components\company\Images\tcs.jpeg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="TATA CONSULTANCY SERVICES"
                            primaryTypographyProps={{
                                fontSize: 20,
                                fontWeight: 'medium',
                                letterSpacing: 0,
                            }}

                        />
                    </ListItem>
                </List>
                <ListItem sx={{ ...item, ...itemCategory }}>


                    <ListItemButton>PROFILE</ListItemButton>
                </ListItem>
                {categories.map(({ id, children }) => (
                    <Box key={id} sx={{ bgcolor: '#101F33' }}>
                        <ListItem sx={{ py: 2, px: 3 }}>
                            <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
                        </ListItem>
                        {children.map(({ id: childId,link,  icon, active }) => (
                            <ListItem disablePadding key={childId}>
                                <ListItemButton href={link} selected={active} sx={item}>
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText>{childId}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}

                        <Button
                            href="/"
                            sx={{ borderColor: lightColor }}
                            variant="contained"
                            color="inherit"
                            size="small"
                        >
                        Signout                        
                        </Button>

                        <Divider sx={{ mt: 2 }} />
                    </Box>
                ))}
            </List>
            {/* <Box
            
            sx={{
              display: 'flex',
              mt: 2,
              mx: 'auto',
              width: '160px',
              '& img': {
                width: '100%'
              }
            }}
          >
            <img
              alt="Company Link"
              src="C:\s2c-nexus-frontend\src\components\company\Images\tcs.jpeg"
            />
          </Box> */}
          <Grid item>
          <Link
            href="https://www.tcs.com/"
            
          ></Link>
          </Grid>
          
        </Drawer>
    );
}
