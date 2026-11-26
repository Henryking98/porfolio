'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomScrollbar() {
	const [topPosition, setTopPosition] = useState(0);
	const [isDragging, setIsDragging] = useState(false);

	// Store initial click position and scroll offset without triggering re-renders
	const dragStartY = useRef(0);
	const dragStartScrollTop = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const docHeight =
				document.documentElement.scrollHeight - document.documentElement.clientHeight;

			if (docHeight > 0) {
				const scrollRatio = scrollTop / docHeight;
				// 91% max top + 9% thumb height = 100% viewport height
				setTopPosition(scrollRatio * 91);
			} else {
				setTopPosition(0);
			}
		};

		handleScroll();

		window.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('resize', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleScroll);
		};
	}, []);

	useEffect(() => {
		if (!isDragging) return;

		const handleMouseMove = (e: MouseEvent) => {
			e.preventDefault();

			const docHeight =
				document.documentElement.scrollHeight - document.documentElement.clientHeight;
			const viewportHeight = window.innerHeight;

			// The thumb is 9% of the viewport, so its available travel track is 91%
			const availableTrackHeight = viewportHeight * 0.91;

			if (availableTrackHeight <= 0 || docHeight <= 0) return;

			const deltaY = e.clientY - dragStartY.current;
			const scrollDelta = (deltaY / availableTrackHeight) * docHeight;

			window.scrollTo({
				top: dragStartScrollTop.current + scrollDelta,
				behavior: 'instant', // Prevents lag while dragging
			});
		};

		const handleMouseUp = () => {
			setIsDragging(false);
		};

		// Disable text selection across the page while dragging
		document.body.style.userSelect = 'none';

		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseup', handleMouseUp);

		return () => {
			document.body.style.userSelect = '';
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseup', handleMouseUp);
		};
	}, [isDragging]);

	const handleMouseDown = (e: React.MouseEvent<HTMLSpanElement>) => {
		e.preventDefault();
		setIsDragging(true);
		dragStartY.current = e.clientY;
		dragStartScrollTop.current = window.scrollY;
	};

		return (
			<span
				onMouseDown={handleMouseDown}
				className={`fixed right-0.5 z-50 h-[9%] w-1 transition-colors duration-200 ${
					isDragging
						? 'cursor-grabbing bg-[#009e42]'
						: 'cursor-grab bg-[#00d95b] hover:bg-[#00b84d]'
				}`}
				style={{ top: `${topPosition}%` }}
				aria-hidden="true"
			/>
		);

}
