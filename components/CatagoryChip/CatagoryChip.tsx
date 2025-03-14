// Styles.
import styles from "./CatagoryChip.module.css";

interface Props {
  catagory: string;
}

export const CatagoryChip = ({ catagory }: Props) => {
  function getChipStyles(catagory: string) {
    if (catagory === "Web Development") return styles.orange;
    if (catagory === "Reflection") return styles.purple;
    if (catagory === "Progress Report") return styles.green;
    if (catagory === "Achievement") return styles.blue;
    return styles.default;
  }

  // Render.
  return (
    <div className={`${styles.chip} ${getChipStyles(catagory)}`}>
      {catagory ?? "Miscellaneous"}
    </div>
  );
};
