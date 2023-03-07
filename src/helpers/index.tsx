import randomString from "crypto-random-string";
import {
  CSSProperties,
  MouseEvent,
} from 'react';
/**
 * Function to generate unique key for rendering list of components
 * @param prefix Prefix of Key
 * @param index Index of item
 * @returns
 */
export const grk = (prefix: string, index: number) =>
  `${prefix}_${index}_${randomString({ length: 10 })}`;

  export interface TableSortByToggleProps {
    title?: string | undefined;
    style?: CSSProperties | undefined;
    onClick?: ((e: MouseEvent) => void)| undefined;
}

