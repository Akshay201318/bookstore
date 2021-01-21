import React, { useEffect, useState } from 'react'
import { useParams , Link} from 'react-router-dom';

export default function CandidateProfile({candidates, shortListed, rejected, setShortListed, setRejected}) {
     
    const [candidate, setCandidate]=useState({});
    const {id}=useParams();

    const shortlist =()=>{
        if(!candidate.isSortlisted && !candidate.isRejected){
            setShortListed(shortListed+1);
            candidate.isSortlisted=true;
            alert('Candidate is shortlisted!!');
        }  
    }

    const reject =()=>{
        if(!candidate.isSortlisted && !candidate.isRejected){
            setRejected(rejected+1);
            candidate.isRejected=true;
            alert('Candidate is rejected!!');
        }  
    }
    
    useEffect(()=>{
        const candi=candidates.find((candidate)=> candidate.id === id);
        setCandidate(candi);
    },[candidate, id, candidates]);
    return (
        <div className="body">
        <div className="Header">
        <div className="Title"><Link to={'/'}>Job Portal</Link></div>
        <div className="searchContainer">
        </div>
        </div>
        <div className="profileContainer">
            <div className="profilePicture" >
            <div><img src={candidate.Image} alt="profile"></img></div>
            </div>
            <div className="profileDetails">
                <div className="userName">{candidate.name}</div>
                <div className="userName">{candidate.id}</div>
                { candidate.isSortlisted ? <div className="shortP" >Shortlisted!</div>:<div></div>}
                {candidate.isRejected ? <div className="RejectP" >Rejected!</div>:<div></div>}
                { !candidate.isSortlisted && !candidate.isRejected ?<div className="shortreject"><span className="shortP" onClick={shortlist}>Shortlist</span> <span className="RejectP"  onClick={reject}>Reject</span></div>:<div></div>
                }
            </div>
        </div>
        <div className="footer">
            <span className="copyright">©Job Portal 2021</span>
        </div>
        </div>
    )
}
