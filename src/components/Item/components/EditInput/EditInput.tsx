import styles from './EditInput.module.css';

type EditInputProps = {
  defaultValue: string;
  onUpdate: (title: string) => void;
};

const EditInput = ({ defaultValue, onUpdate }: EditInputProps) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;

    onUpdate(event.currentTarget.value);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    onUpdate(event.target.value);
  };

  return (
    <input
      type='text'
      className={styles.input}
      defaultValue={defaultValue}
      autoFocus
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  );
};

export default EditInput;
