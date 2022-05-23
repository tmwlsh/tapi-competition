import * as React from "react";

import * as styles from "./styles.module.scss";

import "../../sass/base.scss";

const Layout = ({children}) => {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  )
}

export default Layout;
