import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

import './style.css';
import { createUrl } from '../../firebase/crud';
import Loading from '../../components/Loading';
import QRCode from '../../components/QRCode';
import Notification, { type NotificationType } from '../../components/Notification';

const HomePage = () => {
    const { t } = useTranslation();
    const [link, setLink] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [shortenerUrl, setShortenerUrl] = useState<string | null>(null);
    const [isShowQRCode, setShowQRCode] = useState<boolean>(false);
    const [note, setNote] = useState<NotificationType>({
        message: "",
        show: false,
        type: "info",
    });

    const onSubmit = async () => {
        if(link.length <= 0) return;

        setLoading(true);
        const response = await createUrl(link);
        if(response) {
            console.log('encurtado')
            setNote({
                message: t('notification.messages.success_create_link'),
                show: true,
                type: "success",
            });
            setShortenerUrl(`${window.location.host}/#/r/${response}`);
        } else {
            setNote({
                message: t('notification.messages.error_create_link'),
                show: true,
                type: "error",
            });
        }
        setLoading(false);
    }

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(shortenerUrl!);
            setNote({
                message: t('notification.messages.success_text_copy'),
                show: true,
                type: "info",
            });
        } catch(error) {
            console.error(`${t("home_page.copy_text_error")}: `, error);
            setNote({
                message: t('notification.messages.error_text_copy'),
                show: true,
                type: "warning",
            });
        }
    }

    const goAnalysisPage = () => {
        setNote({
            message: t('notification.messages.block_facture'),
            show: true,
            type: "info",
        });
    }

    return (
        <div className="master-container">
            { loading && <Loading/> }
            <Notification setNote={setNote} note={note}/>
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
                        <div className="larger-url-container">
                            <p><strong>{t("home_page.after_generate.long_url")}</strong> {link}</p>
                        </div>
                        {
                            isShowQRCode ? (
                                <div className="show-qr-code-container">
                                    <QRCode url={shortenerUrl}/>
                                    <div className="show-qr-code-content">
                                        <button 
                                            className='area-bottom-container-btn' 
                                            onClick={() => window.location.reload()}
                                        >
                                            {t("home_page.after_generate.btn_return")}
                                        </button>
                                        <button className='area-bottom-container-btn' onClick={goAnalysisPage}>
                                            {t("home_page.after_generate.analysis_url")}
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="area-bottom-container">
                                        <button 
                                            className='area-bottom-container-btn' 
                                            onClick={() => window.location.reload()}
                                        >
                                            {t("home_page.after_generate.btn_return")}
                                        </button>
                                        <button 
                                            className='area-bottom-container-btn' 
                                            onClick={() => setShowQRCode(!isShowQRCode)}
                                        >
                                            {t("home_page.after_generate.btn_qrCode")}
                                        </button>
                                    </div>
                                    <button onClick={goAnalysisPage} className='area-bottom-container-btn btn-analysis-url'>
                                        {t("home_page.after_generate.analysis_url")}
                                    </button>
                                </>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default HomePage;