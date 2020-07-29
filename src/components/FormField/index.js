import React from 'react'

function FormField({ label, type, name, value, onChange }) {
    if (type === 'textArea') {
        return (
            <div>
                <label>
                    {label}
                    <textArea
                        name={name}
                        value={value}
                        onChange={onChange}
                    />
                </label>
            </div>
        )
    } else {
        return (
            <div>
                <label>
                    {label}
                    <input type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                    />
                </label>
            </div>
        )
    }
}

export default FormField