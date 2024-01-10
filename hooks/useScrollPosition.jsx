import { useEffect, useState } from 'react';

function useScrollPosition() {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		// Attach the scroll event listener
		window.addEventListener('scroll', handleScroll);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []); // Empty dependency array to run the effect only once

	return scrollY;
}

export default useScrollPosition;