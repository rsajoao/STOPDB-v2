export interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  error?: string | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}
