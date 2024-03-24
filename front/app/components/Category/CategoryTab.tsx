import Link from "next/link";

interface CategoryTabProps {
    to: string;
    isFocus: boolean;
    children: React.ReactNode;
}


export default function CategoryTab({ to, isFocus, children }: CategoryTabProps) {
    return (
        <>
            {isFocus ? (
                <Link href={to} className="text-sm md:text-base font-bold mr-2 md:mr-4 cursor-pointer">{children}</Link>
            )
            : (
                <Link href={to} className="text-sm md:text-base text-gray-500 mr-2 md:mr-4 cursor-pointer">{children}</Link>
            )}
        </>
    )
}