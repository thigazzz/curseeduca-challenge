'use client'
import { usePathname, useSearchParams } from "next/navigation";
import PaginationTab from "./PaginationTab";
import { ELLIPSIS_LEFT, ELLIPSIS_RIGTH, usePagination } from "./usePagination";

interface PaginationSectionProps {
    page: number;
    limit: number;
    total: number
}
  
export default function Pagination({page,limit,total}: PaginationSectionProps) {
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const {pages, isCurrentPage} = usePagination({page, limit, total})

    const makeURL = (page: number) => {
        const params = new URLSearchParams(searchParams)
        params.set('page', page.toString())
        const url = `${pathName}?${params.toString()}`
        return url
    }

    return (
      <div className="self-start mt-4">
        {pages.map(page => {
        const isEllpsis = page === ELLIPSIS_LEFT || page === ELLIPSIS_RIGTH
        
        if (isEllpsis) {
            return (
                <span className="bg-slate-800 text-slate-200 p-1 rounded mr-1 cursor-pointer">'...'</span>
            )
        }

        return (
            <PaginationTab to={makeURL(page)} isFocus={isCurrentPage(page)} key={page}>{page}</PaginationTab>
        )
    })}
      </div>
    )
  }