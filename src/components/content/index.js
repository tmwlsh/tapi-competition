import * as React from "react";

import * as styles from "./styles.module.scss";

const Content = ({children, padding="none", marginTop=false}) => {
  return (
    <div className={`${styles.content} ${styles[`padd-` + padding]} ${marginTop && styles.marginTop}`}>
      {children}
    </div>
  )
}

export default Content;
