import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import '../../../i18n';

import './style.css';

const NotFoundPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return(
        <div className="global-container-not-found">
            <h1>{t('not_found_page.title')}</h1>
            <button onClick={() => navigate('/home')}>
                {t('not_found_page.return_btn')}
            </button>
        </div>
    )
}

export default NotFoundPage;