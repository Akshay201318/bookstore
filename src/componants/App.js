import React, { useEffect, useState } from 'react';
import {Route, Switch} from 'react-router-dom'
import axios from 'axios';
import Home from './Home';
import CandidateProfile from './CandidateProfile';
import '../App.css';

const App =() => {

  const [candidates , setCandidates]= useState([]);
  const [shortListed , setShortListed]= useState(0);
  const [rejected , setRejected]= useState(0);

    const getData= async ()=>{ 

        let response= await axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json');
        setCandidates(response.data);
    }

    useEffect(()=>{
        getData();
    },[]);
  return (
    <div className="App">
      <Switch>
          <Route exact path='/' component={ ()=> <Home candidates={candidates} shortListed={shortListed} rejected={rejected} setShortListed={setShortListed} setRejected={setRejected} />}/>
          <Route exact path='/CandidateProfile/:id' component={ ()=> <CandidateProfile candidates={candidates} shortListed={shortListed} rejected={rejected} setShortListed={setShortListed} setRejected={setRejected}/>}/>
      </Switch>
    </div>
  );
}

export default App;
