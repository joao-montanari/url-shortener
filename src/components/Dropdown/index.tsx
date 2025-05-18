import { useState } from 'react';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';

import './style.css';

export interface DropdownProps {
    items: string[];
    setValue: (item: string) => void;
    value: string;
    styleButton?: React.CSSProperties;
    styleOptionsBox?: React.CSSProperties;
    styleOption?: React.CSSProperties;
}

const Dropdown = ({
    items,
    setValue,
    value,
    styleButton,
    styleOptionsBox,
    styleOption,
}: DropdownProps) => {
    const [showOptions, setShowOptions] = useState<boolean>(false);

    const onSelectOption = (item: string) => {
        setValue(item);
        setShowOptions(false);
    }

    return (
        <div className="dropdown-container-global">
            <button 
                style={styleButton}
                onClick={() => setShowOptions(!showOptions)}
            >
                <span>{value}</span>
                <SvgIcon 
                    component={ showOptions ? KeyboardArrowUp : KeyboardArrowDown} 
                    className='button-component-icon'
                />
            </button>
            {
                showOptions && (
                    <div 
                        className="dropdown-options-area"
                        style={styleOptionsBox}
                    >
                        {
                            items.map((item, i) => (
                                <div 
                                    key={`option-item-${i}`} 
                                    className="option-content"
                                    onClick={() => onSelectOption(item)}
                                    style={styleOption}
                                >
                                    {item}
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Dropdown;