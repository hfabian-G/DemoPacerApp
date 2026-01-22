import React, { useState, useEffect } from 'react';
import { format, subDays } from 'date-fns';

type SmartDateInputProps = {
    id: string;
    label: string;
    defaultValue?: string;
    placeholder?: string;
};

const SmartDateInput: React.FC<SmartDateInputProps> = ({ id, label, defaultValue = '', placeholder }) => {
    const [inputValue, setInputValue] = useState(defaultValue);

    const parseAndFormatDate = (value: string) => {
        const today = new Date();
        const lowerValue = value.toLowerCase().trim();

        if (lowerValue === 't') {
            return format(today, 'yyyy-MM-dd');
        }

        const match = lowerValue.match(/^t-(\d+)$/);
        if (match) {
            const daysToSubtract = parseInt(match[1], 10);
            if (!isNaN(daysToSubtract)) {
                const targetDate = subDays(today, daysToSubtract);
                return format(targetDate, 'yyyy-MM-dd');
            }
        }
        
        // If it's not a shortcut, return the original value assuming it might be a valid date
        return value;
    };

    const handleBlur = () => {
        if (inputValue) {
            const formattedDate = parseAndFormatDate(inputValue);
            setInputValue(formattedDate);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        // Set default value on initial render if it's a shortcut
        if(defaultValue) {
            setInputValue(parseAndFormatDate(defaultValue));
        }
    }, [defaultValue]);


    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <input 
                type="text" 
                className="form-control" 
                id={id}
                value={inputValue}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={placeholder || "yyyy-mm-dd or 't-7'"}
            />
        </div>
    );
};

export default SmartDateInput;
