import React from 'react';
import Layout from './Layout';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ConsultFolder from "../../features/consultForm/ConsultFolder";
import MainDashbord from '../../features/home/MainDashbord';

const dossier = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {}
  }),
  uri: 'http://localhost:5048/graphql/'
});

function App() {
  return (
    <ApolloProvider client={dossier}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<MainDashbord/>} />          
            <Route path="consultForm" element={<ConsultFolder />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
