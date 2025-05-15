import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

import './style.css';
import { createUrl } from '../../firebase/crud';
import Loading from '../../components/Loading';

const HomePage = () => {
    const { t } = useTranslation();
    const [link, setLink] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [shortenerUrl, setShortenerUrl] = useState<string | null>(null);

    const onSubmit = async () => {
        if(link.length <= 0) return;

        setLoading(true);
        const response = await createUrl(link);
        if(response) {
            setShortenerUrl(`${window.location.host}/#/r/${response}`);
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
            { loading && <Loading/> }
            {
                !shortenerUrl ? (
                    <div className="card-container-area">
                        <h1>{t("home_page.title")}</h1>
                        <div className="input-area">
                            <input 
                                type="text" 
                                title="Cole sua URL"
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                            />
                            <button onClick={onSubmit}>
                                {t("home_page.btn_shortener")}
                            </button>
                        </div>
                        <p>{t("home_page.bottom_message")}</p>
                    </div>
                ) : (
                    <div className="card-container-area">
                        <h1>{t("home_page.after_generate.title")}</h1>
                        <div className="input-area">
                            <input 
                                type="text" 
                                title={t("home_page.after_generate.copy_url")}
                                value={shortenerUrl}
                            />
                            <button onClick={copyLink}>
                                {t("home_page.after_generate.btn_copy")}
                            </button>
                        </div>
                        <p><strong>{t("home_page.after_generate.long_url")}</strong> {link}</p>
                        <div className="btn-area-bottom-container">
                            <button 
                                onClick={() => window.location.reload()}
                            >
                                {t("home_page.after_generate.btn_return")}
                            </button>
                            <button>{t("home_page.after_generate.btn_qrCode")}</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default HomePage;