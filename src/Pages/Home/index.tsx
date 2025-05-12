import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';
import { createUrl } from '../../firebase/crud';
import LoadingComponent from '../../components/Loading';

const HomePage = () => {
    const navigate = useNavigate();
    const [link, setLink] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [shortenerUrl, setShortenerUrl] = useState<string | null>(null);

    const onSubmit = async () => {
        if(link.length <= 0) return;

        setLoading(true);
        const response = await createUrl(link);
        if(response) {
            setShortenerUrl(`http://localhost:5173/#/r/${response}`);
        }
        setLoading(false);
    }

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(shortenerUrl!);
        } catch(error) {
            console.error('Erro ao copiar o texto: ', error);
        }
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
                                onChange={(e) => setLink(e.target.value)}
                            />
                            <button onClick={onSubmit}>
                                Encurtar
                            </button>
                        </div>
                        <p>Gere um link curto para a sua URL e a use livremente para compartilhamento e acesso.</p>
                    </div>
                ) : (
                    <div className="card-container-area">
                        <h1>Sua URL encurtada</h1>
                        <div className="input-area">
                            <input 
                                type="text" 
                                title="Copie sua URL"
                                value={shortenerUrl}
                            />
                            <button onClick={copyLink}>
                                Copiar
                            </button>
                        </div>
                        <p>URL longa: <strong>{link}</strong></p>
                        <div className="btn-area-bottom-container">
                            <button 
                                onClick={() => window.location.reload()}
                            >
                                Encurtar outra URL
                            </button>
                            <button>Gerar QR Code</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default HomePage;