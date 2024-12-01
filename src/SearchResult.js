import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchResult(props) {
    const [results, setResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);

    // 初回マウント時にデータを取得
    useEffect(() => {
        fetch('programming_articles.json', { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                setResults(data);
            })
            .catch(error => console.error('データ取得エラー:', error));
    }, []);

    // クエリが変化したらフィルタ処理を実行
    useEffect(() => {
        if (props.saveQuery) {
            const filtered = results.filter((item) =>
                item.title.toLowerCase().includes(props.saveQuery.toLowerCase()) ||
                item.content.toLowerCase().includes(props.saveQuery.toLowerCase())
            );
            setFilteredResults(filtered);
        }
    }, [props.saveQuery, results]);

    return (
        <div>
            {filteredResults.length > 0 &&
                <>
                    <h4>{props.saveQuery}の検索結果</h4>
                    <Table striped bordered hover style={{ width: '100%', margin: '0 auto' }} className='mt-3'>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Title</th>
                                <th>Content</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredResults.map(result => (
                                    <tr key={result.id}>
                                        <td>{result.id}</td>
                                        <td>{result.title}</td>
                                        <td>{result.content}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </>
            }
            {filteredResults.length === 0 && <h4>検索結果がありません。</h4>}
        </div>
    );
}

export default SearchResult;