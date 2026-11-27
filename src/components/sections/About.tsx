'use client';

import { UserCircle } from 'lucide-react';
import { SectionBadge } from '../atom/SectionBadge';

export function About() {
	return (
		<div id="about" className="relative p-10">
			<div className="pt-18">
				<SectionBadge
					label="About"
					icon={UserCircle}
					iconClassName="text-[#00de51]"
				/>

				<h4 className="flex flex-col font-apfel font-normal tracking-[-0.02em] leading-12 mb-8 text-[#FFFFFFB8] text-[40px] text-balance">
					Designing brands and websites with clarity, creativity, and no-code speed
				</h4>

				<div className="text-[#FFFFFF8F] space-y-1">
					<p>
						I combine web design, brand identity, and no-code development to help
						businesses move faster while staying true to their personality.
					</p>
					<p>
						Every project is approached with both strategy and style—making sure design
						isn&apos;t just good-looking, but also purposeful and effective.
					</p>
				</div>
			</div>
		</div>
	);
}
