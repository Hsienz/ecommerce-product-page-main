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
			} lg:block fixed top-0 left-0 z-10`}
		>
			<div onClick={()=>props.setMenu(false)} className="bg-Black fixed w-screen h-screen opacity-75 -z-10"></div>
			<div className="bg-White flex flex-col gap-12 h-screen w-[275px] px-8 py-6 text-Very_dark_blue font-bold">
				<button onClick={() => props.setMenu(false)}>
					<img src={iconClose} alt="" />
				</button>
				<div className="flex flex-col gap-4">
					<a href="#">Collections</a>
					<a href="#">Men</a>
					<a href="#">Women</a>
					<a href="#">About</a>
					<a href="#">Contact</a>
				</div>
			</div>
		</div>
	);
};
export default Menu;
