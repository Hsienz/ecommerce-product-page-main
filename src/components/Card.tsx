import Product from "./Product";
import iconPlus from "../assets/images/icon-plus.svg";
import iconMinus from "../assets/images/icon-minus.svg";
import iconCart from "../assets/images/icon-cart.svg";
import { useState } from "react";
import Header from "./Header";
import { CartType } from "./Cart";
import imageProduct1Thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
const Card = () => {
	const [count, setCount] = useState(0);
	const [cart, setCart] = useState<CartType[]>([]);
	const handleSetCount = (value: number) => {
		setCount((count) => (count + value >= 0 ? count + value : count));
	};
	const handleAddToCart = () => {
		setCart((cart) => [
			...cart,
			{
				name: "Fall Limited Edition Sneakers",
				thumbnail: imageProduct1Thumbnail,
				price: "$125.00",
				number: count,
			},
		]);
		setCount(0);
	};
	return (
		<div className="font-Kumbh font-normal text-Dark_grayish_blue">
			<div className="h-[64px]">
				<Header cart={cart} setCart={setCart} />
			</div>
			<div className="max-w-[400px]">
				<Product />
			</div>
			<div className="flex flex-col px-6 py-6 gap-y-4">
				<h2 className="text-Orange uppercase font-bold text-sm tracking-widest">
					{" "}
					Sneaker Company
				</h2>

				<h1 className="text-Very_dark_blue font-bold text-3xl">
					Fall Limited Edition Sneakers
				</h1>

				<p>
					These low-profile sneakers are your perfect casual wear
					companion. Featuring a durable rubber outer sole, they’ll
					withstand everything the weather can offer.
				</p>
				<div className="flex items-center">
					<p className="text-Very_dark_blue font-bold text-3xl">
						$125.00
					</p>
					<p className="ml-4 px-2 bg-Pale_orange text-Orange rounded-lg font-bold">
						50%
					</p>
					<p className="ml-auto text-Grayish_blue font-bold">
						$250.00
					</p>
				</div>
				<div className="flex bg-Light_grayish_blue rounded-xl justify-between py-4 px-6">
					<button
						onClick={() => {
							handleSetCount(-1);
						}}
					>
						<img src={iconMinus} alt="" />
					</button>
					<p className="text-Very_dark_blue font-bold">{count}</p>
					<button
						onClick={() => {
							handleSetCount(1);
						}}
					>
						<img src={iconPlus} alt="" />
					</button>
				</div>
				<button
					className="bg-Orange text-White flex gap-x-4 py-4 px-6 justify-center rounded-xl transition-all disabled:bg-Grayish_blue"
					disabled={!count}
					onClick={handleAddToCart}
				>
					<img className="brightness-200" src={iconCart} alt="" />
					Add to card
				</button>
			</div>
		</div>
	);
};

export default Card;
