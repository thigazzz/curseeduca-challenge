interface CategoryTabProps {
    handleClick: () => void;
    isFocus: boolean;
    children: React.ReactNode;
}

export default function CategoryTab({ handleClick,isFocus, children }: CategoryTabProps) {
    return (
        <>
            {isFocus ? (
                <span onClick={handleClick} className="text-sm md:text-base font-bold mr-2 md:mr-4 cursor-pointer">{children}</span>
            )
            : (
                <span onClick={handleClick} className="text-sm md:text-base text-gray-500 mr-2 md:mr-4 cursor-pointer">{children}</span>
            )}
        </>
    )
}