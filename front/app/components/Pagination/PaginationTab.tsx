import Link from "next/link";

interface PaginationTabProps {
    isFocus: boolean;
    to: string;
    children: React.ReactNode;
}

export default function PaginationTab({isFocus, to, children}: PaginationTabProps) {
    return (
        <>
            {isFocus ? (
                <span><Link href={to} className="bg-slate-800 text-slate-200 p-1 rounded mr-1 cursor-pointer">{children}</Link></span>
            )
            : (
                <span><Link href={to} className="bg-slate-200 p-1 rounded text-sm mr-1 cursor-pointer">{children}</Link></span>
            )}
        </>
    )
}