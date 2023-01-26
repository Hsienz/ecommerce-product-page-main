import imageProduct1Thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import imageProduct2Thumbnail from "../assets/images/image-product-2-thumbnail.jpg";
import imageProduct3Thumbnail from "../assets/images/image-product-3-thumbnail.jpg";
import imageProduct4Thumbnail from "../assets/images/image-product-4-thumbnail.jpg";
import imageProduct1 from "../assets/images/image-product-1.jpg";
import imageProduct2 from "../assets/images/image-product-2.jpg";
import imageProduct3 from "../assets/images/image-product-3.jpg";
import imageProduct4 from "../assets/images/image-product-4.jpg";
import iconPrevious from "../assets/images/icon-previous.svg";
import iconNext from "../assets/images/icon-next.svg";
import { useState } from "react";
const Product = () => {
	const [selected, setSelected] = useState(0);
	const images = [
		{
			image: imageProduct1,
			thumbnail: imageProduct1Thumbnail,
		},
		{
			image: imageProduct2,
			thumbnail: imageProduct2Thumbnail,
		},
		{
			image: imageProduct3,
			thumbnail: imageProduct3Thumbnail,
		},
		{
			image: imageProduct4,
			thumbnail: imageProduct4Thumbnail,
		},
	];
	return (
		<div className="flex flex-col gap-y-4">
			<div className="group flex items-center relative">
				<button>
					<img
						className="lg:rounded-xl"
						src={images[selected].image}
						alt=""
					/>
				</button>
				<button
					onClick={() =>
						setSelected(
							(selected - 1 + images.length) % images.length
						)
					}
					className="opacity-0 duration-500 group-hover:opacity-100 absolute left-4 lg:hidden bg-White rounded-full h-10 aspect-square flex justify-center items-center"
				>
					<img className="h-3 w-2" src={iconPrevious} alt="" />
				</button>
				<button
					onClick={() => setSelected((selected + 1) % images.length)}
					className="opacity-0 duration-500 group-hover:opacity-100 absolute right-4 lg:hidden bg-White rounded-full h-10 aspect-square flex justify-center items-center"
				>
					<img className="h-3 w-2" src={iconNext} alt="" />
				</button>
			</div>
			<div className="hidden lg:flex lg:justify-between lg:gap-x-4">
				{images.map((x, i) => (
					<button
						key={i}
						onClick={() => {
							setSelected(i);
						}}
						className={`
                        ${
							selected == i
								? "!border-Orange"
								: ""
						} rounded-xl duration-300 border-transparent border-2 relative overflow-hidden group`}
					>
						{" "}
						<img className={`group-hover:opacity-70 ${selected == i ? "opacity-50" : "" }`} src={x.thumbnail} alt="" />
					</button>
				))}
			</div>
		</div>
	);
};

export default Product;
