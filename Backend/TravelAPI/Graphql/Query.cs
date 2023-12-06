using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Models;
using HotChocolate;
using HotChocolate.Data;
using Infrastructure.DTOs;
using Infrastructure.Services;

namespace TravelAPI.Graphql
{
    public class Query
    {
        [UseSorting]
        [UseFiltering]
        public List<TypeVoyageDTO> GetTypeVoyages([Service] ITypeVoyageService _typeVoyageService)
        {
            return _typeVoyageService.GetTypeVoyages().Result;
        }

        [UseSorting]
        [UseFiltering]
        public List<ClientDTO> GetClients([Service] IClientService _clientService)
        {
            return _clientService.GetClients().Result;
        }

        [UseFiltering]
        [UseSorting]
        public List<DossierDTO> GetDossiers([Service] IDossierService _dossierService)
        {
            return _dossierService.GetDossiers().Result;
        }

        [UseSorting]
        [UseFiltering]
        public List<HotelDTO> GetHotels([Service] IHotelService _hotelService)
        {
            return _hotelService.GetHotels().Result;
        }
    }
}