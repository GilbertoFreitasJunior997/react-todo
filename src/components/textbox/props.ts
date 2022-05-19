export default interface TextboxProps {
    onSubmit(val: string): void;
    label: string;
    inputRef?: React.RefObject<any>;
}
