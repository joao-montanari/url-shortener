import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';
import { useRef, useState } from 'react';

import './style.css';
import Dropdown from '../Dropdown';

const QRCode = ({ url, withDownloadBtn = true }: {url: string, withDownloadBtn?: boolean}) => {
    const qrRef = useRef<HTMLCanvasElement | null>(null);
    const qrSvgRef = useRef<SVGSVGElement | null>(null);
    const [imageFormat, setImageFormat] = useState<string>("png");
    const DropdownStyles: Map<string, React.CSSProperties> = new Map([
        ["button", {
            borderTopRightRadius: '5px',
            borderBottomRightRadius: '5px',
            height: '40px',
            width: '70px'
        }],
        ["boxOptions", {
            bottom: '-115%',
            width: '70px',
            borderRadius: '4px',
        }],
    ]);

    const downloadQRCode = () => {
        const canvas = qrRef.current;

        if(imageFormat === 'svg') {
            const serializer = new XMLSerializer();
            const svgString = serializer.serializeToString(qrSvgRef.current!);

            const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
            const url = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.download = 'qrcode.svg';
            link.click();
            return;
        }

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
            <div className="qr-code-hidden-svg">
                <QRCodeSVG value={url} includeMargin level="H" ref={qrSvgRef}/>
            </div>
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
                        />
                    </div>
                )
            }
        </div>
    )
}

export default QRCode;
