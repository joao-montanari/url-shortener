import { useState } from 'react';
import './style.css';
import { createUrl } from '../../firebase/crud';
import LoadingComponent from '../../components/Loading';

const HomePage = () => {
    const [link, setLink] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [shortenerUrl, setShortenerUrl] = useState<string | null>(null);

    const onSubmit = async () => {
        setLoading(true);
        const response = await createUrl(link);
        if(response) {
            setShortenerUrl(`http://localhost:5173/#/r/${response}`);
        }
        setShortenerUrl(response);
        setLoading(false);
    }

    return (
        <div className="master-container">
            { loading && <LoadingComponent/> }
            {
                !shortenerUrl ? (
                    <div className="card-container-area">
                        <h1>Cole a sua URL abaixo</h1>
                        <div className="input-area">
                            <input 
                                type="text" 
                                title="Cole sua URL"
                                value={link}
                                onChange={(e) => {
                                    setLink(e.target.value);
                                }}
                            />
                            <button onClick={onSubmit}>
                                Encurtar
                            </button>
                        </div>
                        <p>Gere um link curto para a sua URL e a use livremente para compartilhamento e acesso.</p>
                    </div>
                ) : (
                    <div className="card-container-area">
                        
                    </div>
                )
            }
        </div>
    )
}

export default HomePage;