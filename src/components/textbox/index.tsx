import { FC, useRef, useState } from 'react';
import { Input, Label, InputContainer } from './styles';
import TextboxProps from './props';

const TextBox: FC<TextboxProps> = ({ onSubmit, label, inputRef }) => {
    const labelRef = useRef<HTMLLabelElement>(null);
    const [value, setValue] = useState("");

    const randNum = Math.random().toString().replace(".", "");
    const inputId = `input-${randNum}`;
    const labelId = `label-${randNum}`;

    return (
        <InputContainer
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(value);
                setValue("");
            }}
        >
            <Label
                htmlFor={inputId}
                ref={labelRef}
                id={labelId}
            >
                {label}
            </Label>

            <Input
                ref={inputRef}
                id={inputId}
                value={value}
                onChange={e => setValue(e.target.value)}
                onFocus={e => {
                    const label = document.querySelector<HTMLLabelElement>(`#${labelId}`);
                    if (label)
                        label.classList.add("label-focus")
                }}
                onBlur={e => {
                    const noSpacesVal = value.trim() === "";
                    if(noSpacesVal) setValue("");
                    
                    if(!noSpacesVal && value) return;

                    const label = document.querySelector<HTMLLabelElement>(`#${labelId}`);
                    if (label)
                        label.classList.remove("label-focus")
                }}
            />
        </InputContainer>
    )
}

export default TextBox;
