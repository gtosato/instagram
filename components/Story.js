const Story = ({ img, username }) => {
	return (
		<div>
			<img
				className="h-14 w-14 rounded-full p-[1.5px]
                border-2 object-contain cursor-pointer border-red-500
                hover:scale-110 transition transform
                duration-200 ease-out"
				src={img}
				alt=""
				sizes="30"
			/>
			<p className="text-xs w-14 truncate">{username}</p>
		</div>
	);
};

export default Story;
