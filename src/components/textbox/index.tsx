import { FC, useEffect, useRef } from "react";
import { Input, Label, InputContainer } from './styles';
import TextboxProps from './props';

const Textbox: FC<TextboxProps> = ({ onSubmit, label }) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const labelRef = useRef<HTMLLabelElement>(null);

    const id = `input-${label}`;
    
    const OnInputFocus = () => {
        labelRef.current?.classList.add("label-focus")
    }

    const OnInputBlur = () => {
        if(!inputRef.current?.value)
            labelRef.current?.classList.remove("label-focus")
    }

    return (
        <InputContainer
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(inputRef.current?.value || "");
            }}
        >
            <Label
                htmlFor={id}
                ref={labelRef}
            >
                {label}
            </Label>

            <Input
                ref={inputRef}
                id={id}
                onFocus={OnInputFocus}
                onBlur={OnInputBlur}
            />
        </InputContainer>
    )
}

export default Textbox;
