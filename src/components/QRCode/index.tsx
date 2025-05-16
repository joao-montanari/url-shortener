import { QRCodeCanvas } from 'qrcode.react';
import { useRef } from 'react';

import './style.css';

const QRCode = ({ url, withDownloadBtn = true }: {url: string, withDownloadBtn?: boolean}) => {
    const qrRef = useRef<HTMLCanvasElement>(null);

    const downloadQRCode = () => {
        const canvas = qrRef.current;
        if(canvas) {
            const dataUrl = canvas.toDataURL('image/png');
            const element = document.createElement('a');
            element.href = dataUrl;
            element.download = 'qrcode.png';
            element.click();
        }
    }

    return(
        <div className="global-container-qrcode-component">
            <QRCodeCanvas
                value={url}
                size={200}
                bgColor='#ffffff'
                level="H" // N, L, M, Q, H
                includeMargin={true}
                className='qr-code-canvas'
                ref={qrRef}
            />
            {
                withDownloadBtn && (
                    <div className="download-qrcode-area">
                        <button onClick={downloadQRCode}>
                            Download
                        </button>
                        <select disabled name="download" id="options-download">
                            <option value="svg">.png</option>
                            <option value="png">.svg</option>
                            <option value="jpeg">.jpeg</option>
                        </select>
                    </div>
                )
            }
        </div>
    )
}

export default QRCode;
