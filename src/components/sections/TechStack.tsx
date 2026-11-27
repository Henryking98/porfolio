'use client';

import { Sparkle } from 'lucide-react';
import { SectionBadge } from '../atom/SectionBadge';
import Image from 'next/image';

interface Tech {
	name: string;
	description: string;
	src: string;
}

const techStack: Tech[] = [
	{ name: 'Figma', description: 'Leading design tool', src: '/assets/images/tech-1.svg' },
];

export function TechStack() {
	return (
		<div id="services" className="relative p-10">
			<div className="pt-18">
				<SectionBadge label="Tech Stack" icon={Sparkle} iconClassName="text-[#00de51]" />

				<div className="mb-16">
					<h3 className="tracking-[0.02em] text-[40px] leading-12 text-balance mb-10">
						See how my expertise with these tools drives better results
					</h3>

					<div className="flex flex-col gap-4">
						{techStack.map((tech) => (
							<div key={tech.name} className="flex items-center gap-6">
								{/* Icon circle */}
								<div className="grid size-16 shrink-0 place-items-center rounded-full bg-linear-to-b from-white/8 to-white/4 backdrop-blur-md shadow-[0_0.5px_0.5px_rgba(0,0,0,0.06),0_1px_1px_-0.5px_rgba(0,0,0,0.06),0_3px_3px_-1.5px_rgba(0,0,0,0.06),0_5px_5px_-2.5px_rgba(0,0,0,0.12),inset_0_0.5px_0.5px_rgba(255,255,255,0.08),inset_0_1px_3px_rgba(255,255,255,0.03),inset_0_-4px_12px_rgba(255,255,255,0.04)]">
									<Image
										src={tech.src}
										alt={tech.name}
										width={32}
										height={32}
										className="size-8"
									/>
								</div>

								{/* Text */}
								<div>
									<h4 className="text-lg font-medium text-[#FFFFFFB8] leading-tight">
										{tech.name}
									</h4>
									<p className="text-sm text-[#FFFFFF8F]">{tech.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
