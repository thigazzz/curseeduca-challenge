interface CategoryTabProps {
    isFocus: boolean;
    children: React.ReactNode;
}


export default function CategoryTab({ isFocus, children }: CategoryTabProps) {
    return (
        <>
            {isFocus ? (
                <span className="text-sm md:text-base font-bold mr-2 md:mr-4 cursor-pointer">{children}</span>
            )
            : (
                <span className="text-sm md:text-base text-gray-500 mr-2 md:mr-4 cursor-pointer">{children}</span>
            )}
        </>
    )
}