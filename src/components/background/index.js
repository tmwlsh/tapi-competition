import * as React from "react";

import * as styles from "./styles.module.scss";

const Background = ({children}) => {
  return (
    <div className={styles.background}>
      {children}
    </div>
  )
}

export default Background;
