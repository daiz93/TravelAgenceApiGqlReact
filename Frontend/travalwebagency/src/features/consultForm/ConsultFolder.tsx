import React from 'react'
 
import { Grid, Typography } from '@mui/material';
import OmLoading from '../../Components/elements/OmLoading';
import OmAlert from '../../Components/elements/OmAlert';
import { Dossier, DossierDto, useGetDossiersQuery } from '../../graphql/generated/schema';
import DossierList from './DossierList';

export default function ConsultFolder ()
{

    
    const { data:FoldersData, loading, error } = useGetDossiersQuery();

    if(loading) {
        return <OmLoading />
    }

    if(error || !FoldersData){
        return <OmAlert message='Could not load folders data'/>
    }

    const folders = FoldersData?.dossiers as DossierDto[]
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography component="div" variant='h5' display='block' gutterBottom align='center'>
                    Consulter mon Dossier
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <DossierList dossiers = {folders} />
            </Grid>
        </Grid>
    )
}