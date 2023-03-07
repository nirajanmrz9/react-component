import React, { useState } from 'react'
import styles from "./leftSide.module.scss"
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
import SearchInputField from '../../input/serachInput';
import { LayoutBodyProps } from '.';

export const SearchBar = (props: LayoutBodyProps) => {
    const { onClick, toggle, isAdmin = false } = props;
    const [isSearch, setIsSearch] = useState("");
    const searchHandler = async (e: any) => {
        e.preventDefault();
        const search = e.target.value;
        setIsSearch(search);
        console.log("in", search);
      };
      console.log("in", toggle);

  return (
   <>
   {!isAdmin && (
          <div
            className={
              toggle
                ? styles.leftSideBarSearchCollapse
                : styles.leftSideBarSearch
            }
          >
            <div className={styles.iconToggle}>
              {toggle ? (
                <FaArrowRight onClick={onClick} />
              ) : (
                <FaArrowLeft onClick={onClick} />
              )}
            </div>
            {!toggle && (
              <div>
                <div className="w-10/12 pl-2">
                  <SearchInputField
                  value={isSearch}
                    // eslint-disable-next-line no-restricted-globals
                    onChange={() => searchHandler(event)}
                    name="search"
                  />
                </div>
                <div className="text-left">
                  {/* {schoolData?.map((school: any, index: number) => {
                    return (
                      <p
                        className="text-1xl mb-2 pl-3 cursor-pointer"
                        key={index}
                        onClick={() => schoolDetialsHandler(school)}
                      >
                        {school?.name}
                      </p>
                    );
                  })} */}

 
                </div>
              </div>
            )}
          </div>
        )}
   </>
  )
}
