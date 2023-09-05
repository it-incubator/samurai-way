import React, {useState} from 'react';
import s from './Paginator.module.css';
import cn from "classnames";

type PaginatorType = {
    totalUsersCounter: number
    pageSize: number
    currentPage: number
    changePage: (p: number) => void
}

export const Paginator: React.FC<PaginatorType> = ({
                                                       totalUsersCounter,
                                                       pageSize,
                                                       currentPage,
                                                       changePage,
                                                       ...props
                                                   }) => {

    const portionSize = 10

    let pagesCount = Math.ceil(totalUsersCounter / pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {

        pages.push(i)


    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    return (
        <div>

            {portionNumber > 1 && <button onClick={()=>{
                setPortionNumber(portionNumber -1)
            }}>
                PREVENT
            </button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map((p) => {
                    return <span className={ cn({
                        [s.selectedPage]: currentPage === p
                    }, s.pageNumber) }
                                 key={p}
                                 onClick={(e) => {
                                     changePage(p);
                                 }}>{p}</span>
                })}

            {portionCount > portionNumber  && <button onClick={()=>{
                setPortionNumber(portionNumber +1)
            }}>
                NEXT
            </button>}
        </div>
    );
};

