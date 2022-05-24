import * as React from "react";

import * as styles from "./styles.module.scss";

const Content = ({
    children,
    padding="none",
    marginTop=false,
    slash
  }) => {
  return (
    <div className={`${styles.content} ${styles[slash]} ${styles[padding]} ${marginTop && styles.marginTop}`}>
      {children}
    </div>
  )
}

export default Content;
