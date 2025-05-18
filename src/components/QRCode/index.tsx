import { QRCodeCanvas } from 'qrcode.react';
import { useRef, useState } from 'react';

import './style.css';
import Dropdown from '../Dropdown';

const QRCode = ({ url, withDownloadBtn = true }: {url: string, withDownloadBtn?: boolean}) => {
    const qrRef = useRef<HTMLCanvasElement>(null);
    const [imageFormat, setImageFormat] = useState<string>("png");
    const DropdownStyles: Map<string, React.CSSProperties> = new Map([
        ["button", {
            backgroundColor: '#65B307',
            color: '#ffffff',
            borderTopRightRadius: '5px',
            borderBottomRightRadius: '5px',
            border: '1px solid #65B307',
            height: '40px',
            width: '70px'
        }],
        ["boxOptions", {}],
        ["option", {}],
    ]);

    const downloadQRCode = () => {
        const canvas = qrRef.current;
        if(canvas) {
            const dataUrl = canvas.toDataURL(`image/${imageFormat}`);
            const element = document.createElement('a');
            element.href = dataUrl;
            element.download = `qrcode.${imageFormat}`;
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
                        <button 
                            className='download-btn'
                            onClick={downloadQRCode}
                        >
                            Download
                        </button>
                        <Dropdown
                            items={['png', 'jpeg', 'svg']}
                            value={imageFormat}
                            setValue={setImageFormat}
                            styleButton={DropdownStyles.get('button')}
                            styleOptionsBox={DropdownStyles.get('boxOptions')}
                            styleOption={DropdownStyles.get('option')}
                        />
                    </div>
                )
            }
        </div>
    )
}

export default QRCode;
