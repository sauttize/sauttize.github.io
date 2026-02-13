interface SideBarButtonProps {
    currentPage: string;
    onButtonClick: (page : string) => void;
    selected?: boolean;
}

export default function SideBarButton( { currentPage, onButtonClick, selected }: SideBarButtonProps ) {
    function handleClick() {
        onButtonClick(currentPage);
    }
  
    return (
    <li className={selected ? 'selected' : ''}><button onClick={handleClick}>{currentPage}</button></li>
  )
}
