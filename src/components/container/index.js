import * as React from "react";

import * as styles from "./styles.module.scss";

const Container = ({children, size="large", alignment="left"}) => {
  return (
    <div className={`${styles.container} ${styles[size]} ${styles[alignment]}`}>
      {children}
    </div>
  )
}

export default Container;
