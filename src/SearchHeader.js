import React, {useState, useEffect} from 'react';
//import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchHeader({onDataSend}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [saveQuery, setSaveQuery] = useState('');

    // 初回レンダリング時にクエリパラメータを初期化する
    useEffect(() => {
        setSaveQuery('');
        setSearchParams('');
    }, [])

    function handleSaveInputValue (e){
        const input = e.target.value;
        setSaveQuery(input);
    }

    function handleAddQueryParam (){
        setSearchParams({query: saveQuery});
        onDataSend(saveQuery);
        setSaveQuery('');
    }

    return (
        <Navbar bg="light" data-bs-theme="light" fixed="top">
            <Container>
                <Navbar.Collapse className="justify-content-end" >
                    <Form.Control type="text" placeholder='Search' className='me-3' style={{ width: '20%' }} value={saveQuery} onChange={handleSaveInputValue}/>
                    <Button variant="secondary" onClick={handleAddQueryParam}>Search</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SearchHeader;