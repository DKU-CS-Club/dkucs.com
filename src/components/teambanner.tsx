import Image from "next/image";

export function TeamBanner() {
	return (
		<div className=" relative w-screen h-[200px] sm:h-[300px] md:h-[35vw] shadow-md">
			<Image
				// Ensure this image exists in the public directory
				src="/banner.webp"
				alt="Our Team"
				className="opacity-70"
				priority
				fill
				style={{
					objectFit: "cover",
				}}
			/>
			{/* Overlay Container */}
			<div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
				<h1 className=" object-cover font-lexend object-covertext-2xl text-3xl sm:text-4xl md:text-5xl drop-shadow-md lg:text-7xl font-extralight text-white opacity-90 text-center px-4">
					Coding the Future Together
				</h1>
			</div>
		</div>
	);
}
