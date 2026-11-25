'use client';

import Image from 'next/image';

interface CardSpec {
	src: string;
	alt: string;
	z: number;
	x: number;
	y: number;
}

const cards: CardSpec[] = [
	{ src: '/assets/images/flip-1.webp', alt: '', z: 1, x: 44, y: 45 },
	{ src: '/assets/images/flip-2.webp', alt: '', z: 2, x: 134, y: 105 },
	{ src: '/assets/images/flip-3.webp', alt: '', z: 3, x: 224, y: 165 },
	{ src: '/assets/images/flip-4.webp', alt: '', z: 4, x: 314, y: 225 },
	{ src: '/assets/images/flip-5.webp', alt: '', z: 5, x: 404, y: 285 },
	{ src: '/assets/images/flip-6.webp', alt: '', z: 6, x: 494, y: 345 },
];

interface WorkShowcaseProps {
	cards?: CardSpec[];
}

export function WorkShowcase({ cards: items = cards }: WorkShowcaseProps) {
	return (
		<div className="absolute top-72 bottom-18 left-0 right-0 h-135">
			<div className="absolute inset-0 transform-3d perspective-midrange">
				{items.map((card) => (
					<div
						key={card.src}
						style={{
							zIndex: card.z,
							transform: `translate(${card.x}px, ${card.y}px) rotate(-10deg) rotateY(10deg) rotateX(4deg)`,
						}}
						className="absolute top-0 left-0 size-37.5 overflow-hidden rounded-[16px]"
					>
						<Image
							src={card.src}
							alt={card.alt}
							fill
							sizes="150px"
							className="object-cover"
						/>
					</div>
				))}
			</div>
		</div>
	);
}
