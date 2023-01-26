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
		<div className="font-Kumbh font-normal text-Dark_grayish_blue flex flex-col lg:px-48">
			<div className="h-[64px] lg:h-[96px]">
				<Header cart={cart} setCart={setCart} />
			</div>
			<hr className="hidden lg:block border-t-2 mb-12" />
			<div className="flex flex-col lg:flex-row lg:gap-24">
				<div className="max-w-[400px] self-center">
					<Product />
				</div>
				<div className="flex flex-col px-6 py-6 gap-y-4 lg:gap-y-8">
					<h2 className="text-Orange uppercase font-bold text-sm tracking-widest">
						{" "}
						Sneaker Company
					</h2>

					<h1 className="text-Very_dark_blue font-bold text-3xl lg:text-5xl">
						Fall Limited Edition Sneakers
					</h1>

					<p>
						These low-profile sneakers are your perfect casual wear
						companion. Featuring a durable rubber outer sole,
						they’ll withstand everything the weather can offer.
					</p>
					<div className="flex items-center lg:flex-wrap">
						<p className="text-Very_dark_blue font-bold text-3xl">
							$125.00
						</p>
						<p className="ml-4 px-2 bg-Pale_orange text-Orange rounded-lg font-bold">
							50%
						</p>
                        <div className="hidden lg:block basis-full h-0"></div>
						<p className="ml-auto text-Grayish_blue font-bold lg:ml-0">
							$250.00
						</p>
					</div>
					<div className="flex flex-col lg:flex-row gap-4">
						<div className="flex bg-Light_grayish_blue rounded-xl justify-between py-4 px-6 lg:w-1/3">
							<button
								className="hover:brightness-125 duration-300"
								onClick={() => {
									handleSetCount(-1);
								}}
							>
								<img src={iconMinus} alt="" />
							</button>
							<p className="text-Very_dark_blue font-bold">
								{count}
							</p>
							<button
								className="hover:brightness-125 duration-300"
								onClick={() => {
									handleSetCount(1);
								}}
							>
								<img src={iconPlus} alt="" />
							</button>
						</div>
						<div className="lg:w-2/3">
							<button
								className="bg-Orange w-full text-White flex gap-x-4 py-4 px-6 justify-center rounded-xl duration-500 hover:brightness-125  shadow-[0_30px_30px_-20px_hsl(26,100%,55%,0.75)] disabled:bg-Grayish_blue disabled:shadow-none disabled:hover:brightness-100"
								disabled={!count}
								onClick={handleAddToCart}
							>
								<img
									className="brightness-200"
									src={iconCart}
									alt=""
								/>
								Add to card
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
