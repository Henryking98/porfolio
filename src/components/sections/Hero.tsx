'use client';

import { ProfileCard } from '@/components/organisms/ProfileCard';
import { SideRail } from '@/components/organisms/SideRail';
import { WorkShowcase } from '@/components/organisms/WorkShowcase';

export function Hero() {
	return (
		<main className="relative isolate min-h-svh max-[760px]:min-h-svh max-[760px]:p-4">
			<div className="absolute top-13 right-8 z-10 text-end text-sm text-[#FFFFFF8F] font-medium">
				<p>Sun, Nov 15</p>
				<p>23:47</p>
			</div>

			{/* two-column grid: profile card | hero content */}
			<div className="relative z-1 grid h-svh grid-cols-[minmax(360px,32vw)_1fr] gap-10 px-5 py-7.5 max-[1200px]:grid-cols-[minmax(320px,34vw)_1fr] max-[1200px]:gap-6 max-[760px]:flex max-[760px]:h-auto max-[760px]:flex-col max-[760px]:gap-6 max-[760px]:px-0 max-[760px]:py-0">
				<ProfileCard />

				<section className="relative flex flex-col px-4 pt-18 max-[760px]:gap-10 ml-18">
					<h1 className="flex flex-col font-apfel font-medium text-[clamp(2.5rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.02em] text-[#FFFFFFB8] mb-16">
						<span>I&apos;m building websites</span>
						<span>&amp; brands that people</span>
						<span>remember</span>
					</h1>

					<div
						className="relative grid grid-cols-[minmax(500px,1fr)_220px] items-center max-[1200px]:grid-cols-[minmax(370px,1fr)_150px] max-[1200px]:gap-3.75 max-[760px]:mt-11.25 max-[760px]:flex max-[760px]:h-auto max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-6.25"
						id="work"
					>
						<div className="grid place-items-end gap-4 mb-74">
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
			</div>

			<SideRail />
		</main>
	);
}
