import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [uniSearch, setUniSearch] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://universities.hipolabs.com/search?country=${searchInput}`);
        const data = await response.json();
        setUniSearch(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [searchInput]);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    e.preventDefault();
  };

  return (
    <div className="container">
      <h1 className="title">University Search</h1>
      <form>
        <input type="text" value={searchInput} onChange={handleSearch} placeholder="country name?" />
        <button type="submit">Search</button>
        <button type="reset" onClick={() => setSearchInput('')}>Clear</button>
      </form>
      <h3>Number of universities: {uniSearch.length}</h3>
      
      <ul>
      <div className="cards">
        {uniSearch.map((uni) => (
          <li key={uni.name}>
            <div className="cards1">
            <h4>{uni.name}</h4>
            <p>{uni.country}</p>
            <p>{uni.web_pages}</p>
            </div>
          </li>
        ))}
        </div>
      </ul>
    </div>
  );
};

export default App;




































// import React from 'react'
// import './App.css'
// import { useState, useEffect } from 'react'
// const App = () => {
//   const [searchInput, setSearchInput] = useState('');
//   const [uniSearch, setUniSearch] = useState([]);

//   useEffect(() => {
//     const uniSearch = async () =>{
//       try{
//       const response = await fetch('http://universities.hipolabs.com/search?country=searchParam%22')
//       const data = await response.json()
//       console.log(data)
//       setUniSearch(data)
//       }
//       catch(error)
//       {
//         console.log(error)

//       }
//     }
//     uniSearch()

//     const handleSearch = (e) => {
//       setSearchInput(e.target.value);
//       e.preventDefault();

//     }
//    }, [uniSearch])

//   return (
//     <>
//     <div className="container">
//     <h1 className='title'>University Search</h1>
//     <form> 
//     <input type="text" value={searchInput} onChange={handleSearch} placeholder="country name?" />
//       <button>Search</button>
//       <button>Clear</button>
//     </form>

//     <ul>
//       {uniSearch.map((uni) => {
//         return (
//           <li key={uni.name}>
//             <h2>{uni.name}</h2>
//             <p>{uni.country}</p>
//             <p>{uni.web_pages}</p>
//           </li>
//         )
//       })}

//     </ul>
//     </div>
//     </>
//   )
// }

// export default App




























