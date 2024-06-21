import React, { useEffect,useState } from 'react'


const SearchInputApi = () => {
    const [searchInput, setSearchInput] = useState('');
    const [result, setResult] = useState([]);

    useEffect(() => {
        if(searchInput.length > 0 ) {
            fetch(`https://api.example.com/search?q=${searchInput}`)
        .then(res => res.json())
        .then(data => {
            setResult(data);
        })
        } else {
            setResult([]);
        }
    },[searchInput]);
  return (
    <div>
        <h4>SearchInputApi</h4>
            <input style={{width:'200px'}} type='text' placeholder='Search' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            <ul>
                {result.map((result, index) => {
                    return <li>{result}</li>
                })}
            </ul>
    </div>
  )
}

export default SearchInputApi;