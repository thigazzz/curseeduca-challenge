interface PaginationTabProps {
    isFocus: boolean;
    children: React.ReactNode;
}

export default function PaginationTab({isFocus, children}: PaginationTabProps) {
    return (
        <>
            {isFocus ? (
                <span className="bg-slate-800 text-slate-200 p-1 rounded mr-1 cursor-pointer">{children}</span>
            )
            : (
                <span className="bg-slate-200 p-1 rounded text-sm mr-1 cursor-pointer">{children}</span>
            )}
        </>
    )
}