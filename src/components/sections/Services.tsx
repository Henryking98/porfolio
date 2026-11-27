'use client';

import { Sparkle } from 'lucide-react';
import { SectionBadge } from '../atom/SectionBadge';
import Image from 'next/image';

const serviceTags = ['Web Design', 'Visual Design', 'Interaction Design', 'Responsive Layouts'];

export function Services() {
	return (
		<div id="services" className="relative p-10">
			<div className="pt-18">
				<SectionBadge label="Services" icon={Sparkle} iconClassName="text-[#00de51]" />

				{/* Heading */}
				<h3 className="font-apfel font-medium text-[clamp(2rem,4vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-[#FFFFFFB8] mb-8">
					Web Design
				</h3>

				{/* Image — same gradient-border pattern as WorkHighLights */}
				<div className="rounded-[24px] bg-linear-to-b from-white/8 to-white/4 p-1 shadow-[0_0.5px_0.5px_rgba(0,0,0,0.06),0_1px_1px_-0.5px_rgba(0,0,0,0.06),0_3px_3px_-1.5px_rgba(0,0,0,0.06),0_5px_5px_-2.5px_rgba(0,0,0,0.12),inset_0_0.5px_0.5px_rgba(255,255,255,0.08),inset_0_1px_3px_rgba(255,255,255,0.03),inset_0_-4px_12px_rgba(255,255,255,0.04)] mb-8">
					<div className="relative aspect-16/10 w-full overflow-hidden rounded-[20px] bg-[#0f0f0f]">
						<Image
							src="/assets/images/work-2.webp"
							alt="Web design showcase"
							fill
							sizes="(max-width: 760px) 100vw, 708px"
							className="object-cover"
						/>
					</div>
				</div>

				{/* Pills */}
				<div className="flex flex-wrap gap-2 mb-8">
					{serviceTags.map((tag) => (
						<span
							key={tag}
							className="inline-flex items-center rounded-full bg-linear-to-b from-white/8 to-white/4 px-4 py-2 text-sm font-medium text-[#FFFFFFB8] tracking-[-0.005em]"
						>
							{tag}
						</span>
					))}
				</div>

				{/* Description */}
				<p className="text-[#FFFFFF8F] text-base leading-relaxed max-w-xl">
					I design modern, responsive websites that balance creativity with usability,
					making sure your digital presence feels seamless and memorable.
				</p>
			</div>
		</div>
	);
}
