'use client';

import { Sparkle } from 'lucide-react';
import { SectionBadge } from '../atom/SectionBadge';

export function Testimonials() {
    return (
		<div id="about" className="relative p-10">
			<div className="pt-18">
				<SectionBadge label="Testimonials" icon={Sparkle} iconClassName="text-[#00de51]" />

				<div className="">
					<h3 className="mb-8 tracking-[-0.02em] text-[40px] text-[FFFFFFB8]">
						Here&apos;s what people are saying
					</h3>
				</div>
			</div>
		</div>
	);
}
