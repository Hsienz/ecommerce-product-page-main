import iconMenu from "../assets/images/icon-menu.svg";
import logo from "../assets/images/logo.svg";
import iconCart from "../assets/images/icon-cart.svg";
import imageAvatar from "../assets/images/image-avatar.png";
import { useState } from "react";
import Menu from "./Menu";
import Cart, { CartType } from "./Cart";
type HeaderPropType = {
	cart: CartType[];
	setCart: (cart: CartType[]) => void;
};
const Header = (props: HeaderPropType) => {
	const [menu, setMenu] = useState(false);
	const [openCart, setOpenCart] = useState(false);
	return (
		<div className="flex justify-between items-center px-4 h-full">
			<div className="flex items-center gap-x-4">
				<button
					onClick={() => {
						setMenu(!menu);
					}}
				>
					<img className="h-5" src={iconMenu} alt="" />
				</button>
				<img className="h-5" src={logo} alt="" />
			</div>
			<div className="flex items-center gap-x-4">
				<button
					className="relative"
					onClick={() => setOpenCart(!openCart)}
				>
					<img className="h-6" src={iconCart} alt="" />
					{props.cart.length != 0 && (
						<span className="absolute text-White -top-2 -right-2 bg-Orange w-6 text-xs rounded-full">
							{props.cart.length}
						</span>
					)}
				</button>
				<img
					className="h-6 aspect-square rounded-full"
					src={imageAvatar}
					alt=""
				/>
			</div>
			<Menu menu={menu} setMenu={setMenu} />
			<Cart
				cart={props.cart}
				setCart={props.setCart}
				openCart={openCart}
				setOpenCart={setOpenCart}
			/>
		</div>
	);
};

export default Header;
