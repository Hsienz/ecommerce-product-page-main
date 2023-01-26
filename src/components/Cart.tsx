import iconDelete from "../assets/images/icon-delete.svg";
import { useState } from "react";

export type CartType = {
	thumbnail: string;
	name: string;
	price: string;
	number: number;
};

type CartPropType = {
	cart: CartType[];
	setCart: (cart: CartType[]) => void;
	openCart: boolean;
	setOpenCart: (openCart: boolean) => void;
};

const Cart = (props: CartPropType) => {
	return (
		<div
			className={`hidden ${
				props.openCart ? "!block" : ""
			} fixed z-10 top-24 left-0 w-screen px-4`}
		>
            <div onClick={()=>props.setOpenCart(false)} className="fixed w-screen h-screen top-0 left-0 -z-10"></div>
			<div className="bg-White rounded-xl p-4">
				<p className="text-Very_dark_blue font-bold">Cart</p>
				<hr className="my-4" />
				{props.cart.length ? (
					<div className="flex flex-col gap-4">
						{props.cart.map((x, i) => (
							<div className="flex items-center gap-4">
								<div className="h-10 aspect-square">
									<img className="rounded-md" src={x.thumbnail} alt="" />
								</div>
								<div className="flex flex-col">
									<p>{x.name}</p>
									<p>
										{x.price} x {x.number}{" "} <span className="font-bold text-Very_dark_blue">{x.price[0]}
										{parseFloat(x.price.slice(1)) *
											x.number}</span>
									</p>
								</div>
								<button onClick={()=>{props.setCart(props.cart.slice(0,i).concat(props.cart.slice(i+1)))}}>
									<img src={iconDelete} alt="" />
								</button>
							</div>
						))}
                        <button className="bg-Orange w-full text-White py-4 rounded-xl">Checkout</button>
					</div>
				) : (
					<p>Your cart is empty.</p>
				)}
			</div>
		</div>
	);
};

export default Cart;
