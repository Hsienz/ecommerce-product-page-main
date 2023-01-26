import { useState } from "react";
import { images } from "./products";
import iconPrevious from "../assets/images/icon-previous.svg";
import iconNext from "../assets/images/icon-next.svg";
type LightboxPropType = {
    setOpenLightbox: (openLightbox:boolean)=>void
}
const Lightbox = (props:LightboxPropType) => {
	const [selected, setSelected] = useState(0);
	return (
		<div className="z-10 fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
			<div onClick={()=>props.setOpenLightbox(false)} className="fixed top-0 left-0 w-screen h-screen bg-Black opacity-75"></div>
			<div className="flex flex-col justify-center items-center gap-4 px-10">
				<div className="group flex items-center relative max-h-[500px] aspect-square justify-center">
						<img
							className="rounded-xl h-full"
							src={images[selected].image}
							alt=""
						/>
					<button
						onClick={() =>
							setSelected(
								(selected - 1 + images.length) % images.length
							)
						}
						className="opacity-0 duration-500 group-hover:opacity-100 absolute left-0 -translate-x-1/2 bg-White rounded-full h-14 aspect-square flex justify-center items-center"
					>
						<img className="h-3 w-2" src={iconPrevious} alt="" />
					</button>
					<button
						onClick={() =>
							setSelected((selected + 1) % images.length)
						}
						className="opacity-0 duration-500 group-hover:opacity-100 absolute right-0 translate-x-1/2 bg-White rounded-full h-14 aspect-square flex justify-center items-center"
					>
						<img className="h-3 w-2" src={iconNext} alt="" />
					</button>
				</div>
				<div className="flex justify-between gap-x-4">
					{images.map((x, i) => (
						<button
							key={i}
							onClick={() => {
								setSelected(i);
							}}
							className={`
                        ${
							selected == i ? "!border-Orange" : ""
						} rounded-xl duration-300 border-transparent border-2 relative overflow-hidden group`}
						>
							{" "}
							<img
								className={`group-hover:opacity-70 h-[80px] ${
									selected == i ? "opacity-50" : ""
								}`}
								src={x.thumbnail}
								alt=""
							/>
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default Lightbox;
