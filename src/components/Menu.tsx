import iconClose from "../assets/images/icon-close.svg";
type PropType = {
	menu: boolean;
	setMenu: (menu: boolean) => void;
};
const Menu = (props: PropType) => {
	return (
		<div
			className={`hidden ${
				props.menu ? "!block" : ""
			} lg:block fixed lg:relative top-0 left-0 z-10`}
		>
			<div onClick={()=>props.setMenu(false)} className="bg-Black fixed w-screen h-screen opacity-75 -z-10 lg:hidden"></div>
			<div className="bg-White flex flex-col gap-12 h-screen w-[275px] px-8 py-6 text-Very_dark_blue font-bold lg:h-auto lg:w-auto lg:p-0 lg:text-Grayish_blue lg:font-normal">
				<button className="lg:hidden" onClick={() => props.setMenu(false)}>
					<img src={iconClose} alt="" />
				</button>
				<div className="flex flex-col gap-4 lg:flex-row">
					<a className="lg:hover:text-Dark_grayish_blue duration-300 box-border hover:border-b-Orange hover:border-b-2" href="#">Collections</a>
					<a className="lg:hover:text-Dark_grayish_blue duration-300 hover:border-b-Orange hover:border-b-2" href="#">Men</a>
					<a className="lg:hover:text-Dark_grayish_blue duration-300 hover:border-b-Orange hover:border-b-2" href="#">Women</a>
					<a className="lg:hover:text-Dark_grayish_blue duration-300 hover:border-b-Orange hover:border-b-2" href="#">About</a>
					<a className="lg:hover:text-Dark_grayish_blue duration-300 hover:border-b-Orange hover:border-b-2" href="#">Contact</a>
				</div>
			</div>
		</div>
	);
};
export default Menu;
