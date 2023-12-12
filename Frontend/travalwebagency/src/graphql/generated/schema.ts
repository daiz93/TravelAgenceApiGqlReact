import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Client = {
  __typename?: 'Client';
  actif: Scalars['Boolean']['output'];
  adresse: Scalars['String']['output'];
  clientId: Scalars['Int']['output'];
  dateDeNaissance?: Maybe<Scalars['DateTime']['output']>;
  dossiers?: Maybe<Array<Dossier>>;
  email: Scalars['String']['output'];
  nationalite: Scalars['String']['output'];
  nom: Scalars['String']['output'];
  numeroTelephone: Scalars['String']['output'];
  prenom: Scalars['String']['output'];
};

export type ClientDto = {
  __typename?: 'ClientDTO';
  actif: Scalars['Boolean']['output'];
  adresse: Scalars['String']['output'];
  clientId: Scalars['Int']['output'];
  dateDeNaissance?: Maybe<Scalars['DateTime']['output']>;
  dossiers?: Maybe<Array<Dossier>>;
  email: Scalars['String']['output'];
  nationalite: Scalars['String']['output'];
  nom: Scalars['String']['output'];
  numeroTelephone: Scalars['String']['output'];
  prenom: Scalars['String']['output'];
};

export type ClientDtoFilterInput = {
  actif?: InputMaybe<BooleanOperationFilterInput>;
  adresse?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<ClientDtoFilterInput>>;
  clientId?: InputMaybe<IntOperationFilterInput>;
  dateDeNaissance?: InputMaybe<DateTimeOperationFilterInput>;
  dossiers?: InputMaybe<ListFilterInputTypeOfDossierFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  nationalite?: InputMaybe<StringOperationFilterInput>;
  nom?: InputMaybe<StringOperationFilterInput>;
  numeroTelephone?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ClientDtoFilterInput>>;
  prenom?: InputMaybe<StringOperationFilterInput>;
};

export type ClientDtoSortInput = {
  actif?: InputMaybe<SortEnumType>;
  adresse?: InputMaybe<SortEnumType>;
  clientId?: InputMaybe<SortEnumType>;
  dateDeNaissance?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  nationalite?: InputMaybe<SortEnumType>;
  nom?: InputMaybe<SortEnumType>;
  numeroTelephone?: InputMaybe<SortEnumType>;
  prenom?: InputMaybe<SortEnumType>;
};

export type ClientFilterInput = {
  actif?: InputMaybe<BooleanOperationFilterInput>;
  adresse?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<ClientFilterInput>>;
  clientId?: InputMaybe<IntOperationFilterInput>;
  dateDeNaissance?: InputMaybe<DateTimeOperationFilterInput>;
  dossiers?: InputMaybe<ListFilterInputTypeOfDossierFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  nationalite?: InputMaybe<StringOperationFilterInput>;
  nom?: InputMaybe<StringOperationFilterInput>;
  numeroTelephone?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ClientFilterInput>>;
  prenom?: InputMaybe<StringOperationFilterInput>;
};

export type ClientSortInput = {
  actif?: InputMaybe<SortEnumType>;
  adresse?: InputMaybe<SortEnumType>;
  clientId?: InputMaybe<SortEnumType>;
  dateDeNaissance?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  nationalite?: InputMaybe<SortEnumType>;
  nom?: InputMaybe<SortEnumType>;
  numeroTelephone?: InputMaybe<SortEnumType>;
  prenom?: InputMaybe<SortEnumType>;
};

export type DateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  ngt?: InputMaybe<Scalars['DateTime']['input']>;
  ngte?: InputMaybe<Scalars['DateTime']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  nlt?: InputMaybe<Scalars['DateTime']['input']>;
  nlte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DecimalOperationFilterInput = {
  eq?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  neq?: InputMaybe<Scalars['Decimal']['input']>;
  ngt?: InputMaybe<Scalars['Decimal']['input']>;
  ngte?: InputMaybe<Scalars['Decimal']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  nlt?: InputMaybe<Scalars['Decimal']['input']>;
  nlte?: InputMaybe<Scalars['Decimal']['input']>;
};

export type Dossier = {
  __typename?: 'Dossier';
  actif: Scalars['Boolean']['output'];
  client?: Maybe<Client>;
  clientId: Scalars['Int']['output'];
  dateArrivee: Scalars['DateTime']['output'];
  dossierId: Scalars['Int']['output'];
  dureeSejourJours: Scalars['Int']['output'];
  lieu: Scalars['String']['output'];
  numeroVol: Scalars['String']['output'];
  productHotel?: Maybe<Hotel>;
  typeVoyage?: Maybe<TypeVoyage>;
  typeVoyageId: Scalars['Int']['output'];
};

export type DossierDto = {
  __typename?: 'DossierDTO';
  actif: Scalars['Boolean']['output'];
  client?: Maybe<Client>;
  clientId: Scalars['Int']['output'];
  dateArrivee: Scalars['DateTime']['output'];
  dossierId: Scalars['Int']['output'];
  dureeSejourJours: Scalars['Int']['output'];
  hotel: Hotel;
  lieu: Scalars['String']['output'];
  numeroVol: Scalars['String']['output'];
  productHotelProduitId: Scalars['Int']['output'];
  typeVoyage?: Maybe<TypeVoyage>;
  typeVoyageId: Scalars['Int']['output'];
};

export type DossierDtoFilterInput = {
  actif?: InputMaybe<BooleanOperationFilterInput>;
  and?: InputMaybe<Array<DossierDtoFilterInput>>;
  client?: InputMaybe<ClientFilterInput>;
  clientId?: InputMaybe<IntOperationFilterInput>;
  dateArrivee?: InputMaybe<DateTimeOperationFilterInput>;
  dossierId?: InputMaybe<IntOperationFilterInput>;
  dureeSejourJours?: InputMaybe<IntOperationFilterInput>;
  hotel?: InputMaybe<HotelFilterInput>;
  lieu?: InputMaybe<StringOperationFilterInput>;
  numeroVol?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<DossierDtoFilterInput>>;
  productHotelProduitId?: InputMaybe<IntOperationFilterInput>;
  typeVoyage?: InputMaybe<TypeVoyageFilterInput>;
  typeVoyageId?: InputMaybe<IntOperationFilterInput>;
};

export type DossierDtoSortInput = {
  actif?: InputMaybe<SortEnumType>;
  client?: InputMaybe<ClientSortInput>;
  clientId?: InputMaybe<SortEnumType>;
  dateArrivee?: InputMaybe<SortEnumType>;
  dossierId?: InputMaybe<SortEnumType>;
  dureeSejourJours?: InputMaybe<SortEnumType>;
  hotel?: InputMaybe<HotelSortInput>;
  lieu?: InputMaybe<SortEnumType>;
  numeroVol?: InputMaybe<SortEnumType>;
  productHotelProduitId?: InputMaybe<SortEnumType>;
  typeVoyage?: InputMaybe<TypeVoyageSortInput>;
  typeVoyageId?: InputMaybe<SortEnumType>;
};

export type DossierFilterInput = {
  actif?: InputMaybe<BooleanOperationFilterInput>;
  and?: InputMaybe<Array<DossierFilterInput>>;
  client?: InputMaybe<ClientFilterInput>;
  clientId?: InputMaybe<IntOperationFilterInput>;
  dateArrivee?: InputMaybe<DateTimeOperationFilterInput>;
  dossierId?: InputMaybe<IntOperationFilterInput>;
  dureeSejourJours?: InputMaybe<IntOperationFilterInput>;
  lieu?: InputMaybe<StringOperationFilterInput>;
  numeroVol?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<DossierFilterInput>>;
  productHotel?: InputMaybe<HotelFilterInput>;
  typeVoyage?: InputMaybe<TypeVoyageFilterInput>;
  typeVoyageId?: InputMaybe<IntOperationFilterInput>;
};

export type Hotel = {
  __typename?: 'Hotel';
  actif: Scalars['Boolean']['output'];
  adresse: Scalars['String']['output'];
  description: Scalars['String']['output'];
  dossiers?: Maybe<Array<Dossier>>;
  fabricant: Scalars['String']['output'];
  nom: Scalars['String']['output'];
  nombreEtoiles: Scalars['Int']['output'];
  pays: Scalars['String']['output'];
  prix: Scalars['Decimal']['output'];
  produitId: Scalars['Int']['output'];
  ville: Scalars['String']['output'];
};

export type HotelDto = {
  __typename?: 'HotelDTO';
  actif: Scalars['Boolean']['output'];
  adresse: Scalars['String']['output'];
  description: Scalars['String']['output'];
  fabricant: Scalars['String']['output'];
  hotelId: Scalars['Int']['output'];
  nom: Scalars['String']['output'];
  nombreEtoiles: Scalars['Int']['output'];
  pays: Scalars['String']['output'];
  prix: Scalars['Decimal']['output'];
  ville: Scalars['String']['output'];
};

export type HotelDtoFilterInput = {
  actif?: InputMaybe<BooleanOperationFilterInput>;
  adresse?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<HotelDtoFilterInput>>;
  description?: InputMaybe<StringOperationFilterInput>;
  fabricant?: InputMaybe<StringOperationFilterInput>;
  hotelId?: InputMaybe<IntOperationFilterInput>;
  nom?: InputMaybe<StringOperationFilterInput>;
  nombreEtoiles?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<HotelDtoFilterInput>>;
  pays?: InputMaybe<StringOperationFilterInput>;
  prix?: InputMaybe<DecimalOperationFilterInput>;
  ville?: InputMaybe<StringOperationFilterInput>;
};

export type HotelDtoSortInput = {
  actif?: InputMaybe<SortEnumType>;
  adresse?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  fabricant?: InputMaybe<SortEnumType>;
  hotelId?: InputMaybe<SortEnumType>;
  nom?: InputMaybe<SortEnumType>;
  nombreEtoiles?: InputMaybe<SortEnumType>;
  pays?: InputMaybe<SortEnumType>;
  prix?: InputMaybe<SortEnumType>;
  ville?: InputMaybe<SortEnumType>;
};

export type HotelFilterInput = {
  actif?: InputMaybe<BooleanOperationFilterInput>;
  adresse?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<HotelFilterInput>>;
  description?: InputMaybe<StringOperationFilterInput>;
  dossiers?: InputMaybe<ListFilterInputTypeOfDossierFilterInput>;
  fabricant?: InputMaybe<StringOperationFilterInput>;
  nom?: InputMaybe<StringOperationFilterInput>;
  nombreEtoiles?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<HotelFilterInput>>;
  pays?: InputMaybe<StringOperationFilterInput>;
  prix?: InputMaybe<DecimalOperationFilterInput>;
  produitId?: InputMaybe<IntOperationFilterInput>;
  ville?: InputMaybe<StringOperationFilterInput>;
};

export type HotelSortInput = {
  actif?: InputMaybe<SortEnumType>;
  adresse?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  fabricant?: InputMaybe<SortEnumType>;
  nom?: InputMaybe<SortEnumType>;
  nombreEtoiles?: InputMaybe<SortEnumType>;
  pays?: InputMaybe<SortEnumType>;
  prix?: InputMaybe<SortEnumType>;
  produitId?: InputMaybe<SortEnumType>;
  ville?: InputMaybe<SortEnumType>;
};

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  ngt?: InputMaybe<Scalars['Int']['input']>;
  ngte?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nlt?: InputMaybe<Scalars['Int']['input']>;
  nlte?: InputMaybe<Scalars['Int']['input']>;
};

export type ListFilterInputTypeOfDossierFilterInput = {
  all?: InputMaybe<DossierFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<DossierFilterInput>;
  some?: InputMaybe<DossierFilterInput>;
};

export type Query = {
  __typename?: 'Query';
  clients: Array<ClientDto>;
  dossiers: Array<DossierDto>;
  hotels: Array<HotelDto>;
  typeVoyages: Array<TypeVoyageDto>;
};


export type QueryClientsArgs = {
  order?: InputMaybe<Array<ClientDtoSortInput>>;
  where?: InputMaybe<ClientDtoFilterInput>;
};


export type QueryDossiersArgs = {
  order?: InputMaybe<Array<DossierDtoSortInput>>;
  where?: InputMaybe<DossierDtoFilterInput>;
};


export type QueryHotelsArgs = {
  order?: InputMaybe<Array<HotelDtoSortInput>>;
  where?: InputMaybe<HotelDtoFilterInput>;
};


export type QueryTypeVoyagesArgs = {
  order?: InputMaybe<Array<TypeVoyageDtoSortInput>>;
  where?: InputMaybe<TypeVoyageDtoFilterInput>;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ncontains?: InputMaybe<Scalars['String']['input']>;
  nendsWith?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nstartsWith?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type TypeVoyage = {
  __typename?: 'TypeVoyage';
  actif: Scalars['Boolean']['output'];
  dossiers?: Maybe<Array<Dossier>>;
  libelle: Scalars['String']['output'];
  typeVoyageId: Scalars['Int']['output'];
};

export type TypeVoyageDto = {
  __typename?: 'TypeVoyageDTO';
  actif: Scalars['Boolean']['output'];
  libelle: Scalars['String']['output'];
  typeVoyageId: Scalars['Int']['output'];
};

export type TypeVoyageDtoFilterInput = {
  actif?: InputMaybe<BooleanOperationFilterInput>;
  and?: InputMaybe<Array<TypeVoyageDtoFilterInput>>;
  libelle?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<TypeVoyageDtoFilterInput>>;
  typeVoyageId?: InputMaybe<IntOperationFilterInput>;
};

export type TypeVoyageDtoSortInput = {
  actif?: InputMaybe<SortEnumType>;
  libelle?: InputMaybe<SortEnumType>;
  typeVoyageId?: InputMaybe<SortEnumType>;
};

export type TypeVoyageFilterInput = {
  actif?: InputMaybe<BooleanOperationFilterInput>;
  and?: InputMaybe<Array<TypeVoyageFilterInput>>;
  dossiers?: InputMaybe<ListFilterInputTypeOfDossierFilterInput>;
  libelle?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<TypeVoyageFilterInput>>;
  typeVoyageId?: InputMaybe<IntOperationFilterInput>;
};

export type TypeVoyageSortInput = {
  actif?: InputMaybe<SortEnumType>;
  libelle?: InputMaybe<SortEnumType>;
  typeVoyageId?: InputMaybe<SortEnumType>;
};

export type GetDossiersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDossiersQuery = { __typename?: 'Query', dossiers: Array<{ __typename?: 'DossierDTO', dossierId: number, dateArrivee: any, dureeSejourJours: number, numeroVol: string, lieu: string, clientId: number, typeVoyageId: number, actif: boolean, client?: { __typename?: 'Client', nom: string, prenom: string, numeroTelephone: string, email: string, nationalite: string, actif: boolean } | null, typeVoyage?: { __typename?: 'TypeVoyage', libelle: string } | null, hotel: { __typename?: 'Hotel', nom: string, nombreEtoiles: number, pays: string, ville: string, adresse: string, description: string, prix: any } }> };

export type SearchDossierByNameQueryVariables = Exact<{
  nom: Scalars['String'];
  prenom: Scalars['String'];
}>;


export type SearchDossierByNameQuery = { __typename?: 'Query', dossiers: Array<{ __typename?: 'DossierDTO', dossierId: number, dateArrivee: any, dureeSejourJours: number, numeroVol: string, lieu: string, clientId: number, typeVoyageId: number, actif: boolean, client?: { __typename?: 'Client', nom: string, prenom: string, numeroTelephone: string, email: string, nationalite: string, actif: boolean } | null, typeVoyage?: { __typename?: 'TypeVoyage', libelle: string } | null, hotel: { __typename?: 'Hotel', nom: string, nombreEtoiles: number, pays: string, ville: string, adresse: string, description: string, prix: any } }> };


export const GetDossiersDocument = gql`
    query GetDossiers {
  dossiers {
    dossierId
    dateArrivee
    dureeSejourJours
    numeroVol
    lieu
    clientId
    typeVoyageId
    actif
    client {
      nom
      prenom
      numeroTelephone
      email
      nationalite
      actif
    }
    typeVoyage {
      libelle
    }
    hotel {
      nom
      nombreEtoiles
      pays
      ville
      adresse
      description
      prix
    }
  }
}
    `;

/**
 * __useGetDossiersQuery__
 *
 * To run a query within a React component, call `useGetDossiersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDossiersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDossiersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDossiersQuery(baseOptions?: Apollo.QueryHookOptions<GetDossiersQuery, GetDossiersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDossiersQuery, GetDossiersQueryVariables>(GetDossiersDocument, options);
      }
export function useGetDossiersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDossiersQuery, GetDossiersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDossiersQuery, GetDossiersQueryVariables>(GetDossiersDocument, options);
        }
export type GetDossiersQueryHookResult = ReturnType<typeof useGetDossiersQuery>;
export type GetDossiersLazyQueryHookResult = ReturnType<typeof useGetDossiersLazyQuery>;
export type GetDossiersQueryResult = Apollo.QueryResult<GetDossiersQuery, GetDossiersQueryVariables>;
export const SearchDossierByNameDocument = gql`
    query SearchDossierByName($nom: String!, $prenom: String!) {
  dossiers(
    where: {client: {nom: {contains: $nom}, and: {prenom: {contains: $prenom}}}}
  ) {
    dossierId
    dateArrivee
    dureeSejourJours
    numeroVol
    lieu
    clientId
    typeVoyageId
    actif
    client {
      nom
      prenom
      numeroTelephone
      email
      nationalite
      actif
    }
    typeVoyage {
      libelle
    }
    hotel {
      nom
      nombreEtoiles
      pays
      ville
      adresse
      description
      prix
    }
  }
}
    `;

/**
 * __useSearchDossierByNameQuery__
 *
 * To run a query within a React component, call `useSearchDossierByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchDossierByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchDossierByNameQuery({
 *   variables: {
 *      nom: // value for 'nom'
 *      prenom: // value for 'prenom'
 *   },
 * });
 */
export function useSearchDossierByNameQuery(baseOptions: Apollo.QueryHookOptions<SearchDossierByNameQuery, SearchDossierByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchDossierByNameQuery, SearchDossierByNameQueryVariables>(SearchDossierByNameDocument, options);
      }
export function useSearchDossierByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchDossierByNameQuery, SearchDossierByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchDossierByNameQuery, SearchDossierByNameQueryVariables>(SearchDossierByNameDocument, options);
        }
export type SearchDossierByNameQueryHookResult = ReturnType<typeof useSearchDossierByNameQuery>;
export type SearchDossierByNameLazyQueryHookResult = ReturnType<typeof useSearchDossierByNameLazyQuery>;
export type SearchDossierByNameQueryResult = Apollo.QueryResult<SearchDossierByNameQuery, SearchDossierByNameQueryVariables>;