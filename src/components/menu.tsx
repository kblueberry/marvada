import { useCallback, useState } from "react";
import Image from "next/image";
import styles from "@/styles/NavBar.module.scss";

const MenuItem = ({
  onClick,
  children,
}: {
  onClick?: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div className={styles.navbar__menu_item} onClick={onClick}>
      {children}
    </div>
  );
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  if (isOpen) {
    return (
      <div className={styles.navbar__menu}>
        <MenuItem>see</MenuItem>
        <MenuItem>read</MenuItem>
        <MenuItem>about</MenuItem>
        <MenuItem>is</MenuItem>
        <MenuItem onClick={handleClose}>
          <Image
            src="/img/close-button.svg"
            alt="Close"
            width={10}
            height={10}
          />
        </MenuItem>
      </div>
    );
  }

  return <MenuItem onClick={handleOpen}>Menu</MenuItem>;
};

export default Menu;
