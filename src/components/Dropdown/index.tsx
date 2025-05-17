import { useState } from 'react';
import './style.css';

export interface DropdownProps {
    items: string[];
    setValue: (item: string) => void;
    value: string;
}

const Dropdown = ({
    items,
    setValue,
    value,
}: DropdownProps) => {
    const [showOptions, setShowOptions] = useState<boolean>(false);

    return (
        <div className="dropdown-container-global">
            <button onClick={() => setShowOptions(!showOptions)}>
                {value}
            </button>
            {
                showOptions && (
                    <div className="dropdown-options-area">
                        {
                            items.map((item, i) => (
                                <div 
                                    key={`option-item-${i}`} 
                                    className="option-content"
                                    onClick={() => setValue(item)}
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