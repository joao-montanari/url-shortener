import { useEffect } from "react";
import { CheckCircleOutline, ErrorOutline, HighlightOff, WarningAmber } from '@mui/icons-material'
import { useTranslation } from "react-i18next";
import '../../../i18n';

import "./style.css";

export type NotificationType = {
    show: boolean,
    type: "info" | "success" | "error" | "warning",
    message: string,
}

const Notification = ({ note, setNote } : { note: NotificationType, setNote: any }) => {
    const { t } = useTranslation();
    const styleAnimation = {
        animationName: "notification-animation",
        animationDuration: "3s",
        animationFillMode: "forwards",
    }

    useEffect(() => {
        if(note.show) {
            setTimeout(() => setNote((prevState: NotificationType) => ({
                ...prevState,
                show: false,
            })), 3000);
        }
    }, [note]);
    
    switch (note.type) {
        case "success":
            return (
                <div className="notification-component-container" style={ note.show ? styleAnimation : {} }>
                    <div className="notification-component-main" style={{ backgroundColor: "#E5FFDB" }}>
                        <CheckCircleOutline style={{ color: "#37B904" }}/>
                        <div className="notification-content">
                            <label style={{ color: "#37B904" }}>
                                <strong>
                                    {t('notification.success')}!
                                </strong>
                            </label>
                            <span style={{ color: "#37B904" }}>{note.message}</span>
                        </div>
                    </div>
                </div>
            )
        case "error":
            return (
                <div className="notification-component-container" style={ note.show ? styleAnimation : {} }>
                    <div className="notification-component-main" style={{ backgroundColor: "#FFDBDB" }}>
                        <HighlightOff style={{ color: "#E11D48" }}/>
                        <div className="notification-content">
                            <label style={{ color: "#E11D48" }}>{t('notification.error')}!</label>
                            <span style={{ color: "#E11D48" }}>{note.message}</span>
                        </div>
                    </div>
                </div>
            )
        case "warning":
            return (
                <div className="notification-component-container" style={ note.show ? styleAnimation : {} }>
                    <div className="notification-component-main" style={{ backgroundColor: "#FFF5DB" }}>
                        <WarningAmber style={{ color: "#e0b439" }}/>
                        <div className="notification-content">
                            <label style={{ color: "#e0b439" }}>{t('notification.warning')}!</label>
                            <span style={{ color: "#e0b439" }}>{note.message}</span>
                        </div>
                    </div>
                </div>
            )
        default:
            return (
                <div className="notification-component-container" style={ note.show ? styleAnimation : {} }>
                    <div className="notification-component-main">
                        <ErrorOutline/>
                        <div className="notification-content">
                            <label>{t('notification.info')}</label>
                            <span>{note.message}</span>
                        </div>
                    </div>
                </div>
            )
    }
}

export default Notification;