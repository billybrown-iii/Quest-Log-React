import './App.css'
import Layout from './Layout';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home';
import { useState } from 'react';
import Campaign from './routes/campaign';

function App() {

  const [campaign, setCampaign] = useState(null);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home setCampaign={setCampaign}/>} />
        <Route path="/campaign" element={<Campaign campaign={campaign}/>} />
      </Routes>
    </Layout>

  )
}

export default App
