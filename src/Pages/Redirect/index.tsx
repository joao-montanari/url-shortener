
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Loading from '../../components/Loading';
import { getUrlByID } from '../../firebase/crud';

import './style.css';

const RedirectPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    async function getLink() {
        if(!id) navigate('/home');
        const response = await getUrlByID(id!);
        if(response) {
            window.location.href = response.link;
        } else {
            navigate('/home');
        }
    }

    useEffect(() => {
        getLink();
    });

    return (
        <div className='redirect-page-master-container'>
            <Loading/>
        </div>
    )
}

export default RedirectPage;