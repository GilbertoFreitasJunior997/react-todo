export default interface TodoProps {
    name: string;
    id: number;

    onDelete(): void;
    onValueUpdate(newVal: string): void;
}