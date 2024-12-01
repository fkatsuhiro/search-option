import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchData() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch('programming_articles.json', { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                setResults(data)
                console.log(results);
            })
    }, [])

    return (
        <div style={{width: '100%', margin: '0 auto'}}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        results.map(result => (
                            <tr>
                                <td>{result.id}</td>
                                <td>{result.title}</td>
                                <td>{result.content}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default SearchData;