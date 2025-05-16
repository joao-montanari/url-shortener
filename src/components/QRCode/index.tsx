import { QRCodeCanvas } from 'qrcode.react';

import './style.css';

const QRCode = ({ url }: {url: string}) => {
    return(
        <div className="global-container-qrcode-component">
            <QRCodeCanvas
                value={url}
                size={200}
                bgColor='#ffffff'
                level="H" // N, L, M, Q, H
                includeMargin={true}
            />
        </div>
    )
}

export default QRCode;
