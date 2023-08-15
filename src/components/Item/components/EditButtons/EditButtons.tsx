import { FaTrash, FaPen } from 'react-icons/fa';

import styles from './EditButtons.module.css';

type EditButtonsProps = {
  onEdit: (event: React.MouseEvent) => void;
  onDelete: (event: React.MouseEvent) => void;
};

const EditButtons = ({ onEdit, onDelete }: EditButtonsProps) => (
  <div className={styles.container}>
    <button
      onClick={onEdit}
      className={styles.button}
    >
      <FaPen className={styles.editIcon} />
    </button>
    <button
      onClick={onDelete}
      className={styles.button}
    >
      <FaTrash className={styles.deleteIcon} />
    </button>
  </div>
);

export default EditButtons;
