// import * as React from 'react';
import React, { FC, ReactNode, useMemo } from 'react';
import styles from '../../shared/css/home.module.css';
// import f_bold from '../../shared/css/home.module.css';
type COLORS = 'red' | 'green' | 'blue' | 'black' | 'white';
interface IFontProps {
    children?: ReactNode,
    className?: string,
    bold?: boolean,
    fSize8?: boolean,
    color?: COLORS,
}

const FontText: FC<IFontProps> = ({children, className, bold=false, fSize8, color}) =>{
    const styleclass = useMemo(()=> `${
        bold ? styles.f_bold: ''} ${fSize8 ? styles.fs_8: ''} ${className || ''} : ''}
    `,[bold, className]);
  return (
    // <StyleText className={styleclass} color={color}></StyleText>
    <div className={styleclass}>
      {
        children
      }
    </div>
  );
}
export default FontText; 