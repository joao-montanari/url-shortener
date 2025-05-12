
import { useEffect } from 'react';
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";

import LoadingComponent from '../../components/Loading';
import { db } from '../../utils/firebase-config';

import './style.css';

const RedeirectPage = () => {

    async function getLinks() {
        const querySnapshot = await getDocs(collection(db, "urls"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} =>`, doc.data());
        });
    }

    useEffect(() => {
        getLinks();
    }, []);

    return (
        <div className='redirect-page-master-container'>
            <LoadingComponent/>
        </div>
    )
}

export default RedeirectPage;