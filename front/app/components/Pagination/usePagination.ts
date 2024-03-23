interface UsePaginationProps {
    page: number;
    limit: number;
    total: number
}

export const ELLIPSIS_LEFT = -1
export const ELLIPSIS_RIGTH = -2

const generatePages = (page: number, totalPages: number) => {
    const current = Math.min(page, totalPages)
    const total = Math.max(1, totalPages)

    if (total <= 7) {
        return Array.from({length: total}).map((_, i) => i + 1)
    }

    if (current < 3) {
        return [1,2,3, ELLIPSIS_LEFT, total-1, total]
    }

    if (current === 3) {
        return [1,2,3, 4, ELLIPSIS_LEFT, total-1, total]
    }

    if (current > total - 2) {
        return [1,2,ELLIPSIS_RIGTH, total-2,  total-1, total]
    }

    if (current === total - 2) {
        return [1,2,ELLIPSIS_RIGTH, total-3,total-2, total-1, total]
    }

    return [1,ELLIPSIS_LEFT, current -1, current, current +1, ELLIPSIS_RIGTH, total]
}

export const usePagination = ({page, limit, total}: UsePaginationProps) => {
    const totalPages = Math.ceil(total / limit)
    const pages = generatePages(page, totalPages)
    const isCurrentPage = (n: number) => n === page

    return {pages, isCurrentPage}
}