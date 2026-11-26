'use client';

import { WorkShowcase } from '@/components/organisms/WorkShowcase';

export function Hero() {
	return (
		<section id="home" className="relative min-h-svh pt-18 max-[760px]:pt-8">
			<h1 className="flex flex-col font-apfel font-medium text-[clamp(2.5rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.02em] text-[#FFFFFFB8] mb-16">
				<span>I&apos;m building websites</span>
				<span>&amp; brands that people</span>
				<span>remember</span>
			</h1>

			<div
				id="work"
				className="relative grid items-center gap-6 max-[1200px]:grid-cols-[minmax(0,1fr)_150px] max-[1200px]:gap-3.75 max-[760px]:mt-4 max-[760px]:flex max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-6"
			>
				<div className="grid place-items-end gap-4">
					<div className="min-w-41.25">
						<p className="flex font-apfel text-[clamp(2.5rem,5vw,3.75rem)] leading-normal">
							10 <span>+</span>
						</p>
						<p className="text-sm text-[#FFFFFF8F]">Year of experience</p>
					</div>

					<div className="min-w-41.25">
						<p className="flex font-apfel text-[clamp(2.5rem,5vw,3.75rem)] leading-normal">
							6 <span>x</span>
						</p>
						<p className="text-sm text-[#FFFFFF8F]">Industry Awards</p>
					</div>
				</div>
			</div>

			<WorkShowcase />
		</section>
	);
}
