import { collection, setDoc, query, where, getDocs, doc, getDoc } from 'firebase/firestore';

import { db } from './firebase-config';
import { generateRandomID } from '../utils/createRandomID';

export type Url = {
    link: string;
}

export const createUrl = async (url: string): Promise<string | null> => {
    let tryGenerateSingleID: boolean = false;
    let singleID: string = "";

    while(!tryGenerateSingleID) {
        singleID = generateRandomID();
        const response = await getUrlByID(singleID);

        if(!response) tryGenerateSingleID = true;
    }

    try {
        await setDoc(doc(db, 'urls', singleID), {
            link: url,
        });
        return singleID;
    } catch(error) {
        console.error('Erro ao adicionar um link: ', error);
        return null;
    }
}

export const getUrlByLink = async (link: string): Promise<Url | null> => {
    const urlsRef = collection(db, 'urls');
    const response: Url[] = [];

    const myQuery = query(urlsRef, where('link', '==', link));

    try {
        const snapshot = await getDocs(myQuery);

        if(snapshot.empty) {
            return null;
        }

        snapshot.forEach((doc) => {
            response.push(doc.data() as Url);
        });

        return response[0];
    } catch(error) {
        console.error('Erro ao buscar a url: ', error);
        return null;
    }
}

export const getUrlByID = async (id: string): Promise<Url | null> => {
 const urlRef = doc(db, 'urls', id);

 try {
    const snapshot = await getDoc(urlRef);
    if(snapshot.exists()) {
        return snapshot.data() as Url;
    } else {
        return null;
    }
 } catch(error) {
    console.error('Erro ao buscar o link por ID: ', error);
    return null
 }
}

export const getUrls = async (): Promise<Url[] | null> => {
    const response: Url[] = [];

    try {
        const snapshot = await getDocs(collection(db, 'urls'));
        snapshot.forEach((doc) => {
            response.push(doc.data() as Url);
        })
        return response;
    } catch(error) {
        console.error('Erro ao buscar os links: ', error);
        return null;
    }
}