import React, { useEffect, useState } from 'react';

const DataFetchingComp = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError ] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            setData(data);
            setLoading(false);
            setError('');
        })
        .catch(err => {
            setLoading(false);
            setError('Something went wrong!');
        })
    }, []);

    if(loading) return <h3>Loading...</h3>
    if(error) return <h3>{error}</h3>
  return (
    <div>
        <h3>DataFetchingComp</h3>
        <ul>
            {data.map((post) => (
                <li key={post.id}>
                    <h3>Title:</h3> {post.title}
                    <h3>Body:</h3> {post.body}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default DataFetchingComp;