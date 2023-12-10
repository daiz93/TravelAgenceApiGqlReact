import React from 'react'
import { Grid, IconButton } from '@mui/material';
import { Container } from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';
import FolderShared from '@mui/icons-material/FolderShared';
import AddCircle from '@mui/icons-material/AddCircle';

export default function MainDashbord ()
{

    return (
        <Container>
            <Grid container spacing={4} alignItems='center'>
                <Grid item xs={12}>
                 {/*    <OmHeader header='Order Management App' /> */}
                </Grid>
                <Grid item xs={6}>
                    <IconButton onClick={() => window.open('/consultForm')}>
                        <PersonIcon fontSize='medium' color='secondary'/> Consulter Dossier Voyage
                    </IconButton>
                </Grid>
             
            </Grid>
        </Container>
    );
}