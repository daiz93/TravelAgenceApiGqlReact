import React, { useState } from 'react';
 
import { Client, ClientDto, Dossier, DossierDto, TypeVoyage, TypeVoyageDto } from '../../graphql/generated/schema';

import OmGrid from '../../Components/elements/OmGrid'


interface DossierListProps{

    dossiers: DossierDto[]
}


export default function DossierList({dossiers}: DossierListProps){
   
   
    const [columnDefs] = useState([

        {
            field:'dossierId',        
           width:50
           
        },
        {
            field:'typeVoyageId',
            width:50
           
        },
        {
            field:'dateArrivee',
            
           
        },
        {
            field:'dureeSejourJours',
            
        },
        {
            field:'numeroVol',

        },
        {
            field:'lieu',

        },
        {
            field:'actif',

        },
        {
            field:'client',
            headerName:'Client',
            cellRenderer: function (params:any)
            {
                const customer = params.value as Client;
                return customer.nom
                +', ' + customer.prenom
                +', ' + customer.numeroTelephone
             ;               
            }
          
        },

        {
            field:'typeVoyage',
            
            headerName:'Type Voyage',
            cellRenderer: function (params:any)
            {
                const customer = params.value as TypeVoyageDto;
                return customer.libelle;               
            }
          
        }


    ]);



    return (
        <OmGrid  columnDefs={columnDefs} rowData={dossiers}/>
    );

   
 
}