import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Home({candidates, shortListed, rejected, setShortListed, setRejected}) {  
    const [userNameSearch, setUserName]= useState('');
    const [searchedCandidate, setSearchedCandidate] =useState('')
    const [count, setCount] =useState(0);

    const search = () =>{
          if(userNameSearch !== ''){
           setSearchedCandidate(candidates.find((candidate)=> candidate.name === userNameSearch));
           setCount(count+1);
           setUserName('');
          }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          search();
        }
      }

    const unset = () =>{
        setSearchedCandidate('');
        setCount(count+1);
    }

    useEffect(()=>{
        console.log("you clicked search!");
    },[count]);

    
    return (
        <div className="body">
        <div className="Header">
        <div className="Title" onClick={unset}><Link to={'/'}>Job Portal</Link></div>
        <div className="searchContainer">
        <div className="short">Shortlisted {shortListed}</div>
        <div className="Reject">Rejected {rejected}</div>
        <div className="searchIcon"><input className="searchIcon" type='text' placeholder='Username.....' value={userNameSearch} onKeyDown={handleKeyDown} onChange={(e)=>setUserName(e.target.value)}/><span className="search" onClick={search}><img  className=" searchImg" src="ic_search.png" alt='search'></img></span></div>
        <div className="UserProfileLogo"><img alt="User profile" src="ic_user.png"></img></div>
        </div>
        </div>
        <div className="main">
        {
            !searchedCandidate ?
         candidates.map((candidate)=>{
             return <div className="Container">
                 <div className="userImage"><Link to={`/CandidateProfile/${candidate.id}`}><img alt="User" src={candidate.Image}></img></Link></div>
                 <div className="userDetails">
                 <div>User Name: {candidate.name}</div>
                 <div>User ID: {candidate.id}</div>
                 {candidate.isSortlisted ? <div className="shortP" >Shortlisted!</div>:<div></div>}
                 {candidate.isRejected ? <div className="RejectP" >Rejected!</div>:<div></div>}
                 </div>
            </div>
            
         }):
          <div className="searchedCandidate">
                 <div className="userImage"><Link to={`/CandidateProfile/${searchedCandidate.id}`}><img alt="User" src={searchedCandidate.Image}></img></Link></div>
                 <div className="userDetails">
                 <div>User Name: {searchedCandidate.name}</div>
                 <div>User ID: {searchedCandidate.id}</div>
                 {searchedCandidate.isSortlisted ? <div className="shortP" >Shortlisted!</div>:<div></div>}
                 {searchedCandidate.isRejected ? <div className="RejectP" >Rejected!</div>:<div></div>}
                 </div>
            </div>
        }  
        </div>
        <div className="footer">
            <span className="copyright">©Job Portal 2021</span>
        </div>
            
        </div>
    )
}
