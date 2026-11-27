'use client';

import { MapPin, Target, CircleDot, UserCircle } from 'lucide-react';
import { SectionBadge } from '../atom/SectionBadge';

export function About() {
	return (
		<div id="about" className="relative">
			<div className="pt-5">
				<SectionBadge label="About" icon={UserCircle} iconClassName="text-[#00de51]" />

				<h4 className="font-apfel font-normal tracking-[-0.02em] leading-[1.2] mb-8 text-[#FFFFFFB8] text-[clamp(1.75rem,3.5vw,2.5rem)] text-balance">
					I build products, not just interfaces.
				</h4>

				<div className="text-[#FFFFFF8F] space-y-6 leading-relaxed">
					<p>
						I approach frontend engineering as more than turning designs into functional
						screens. I care about what happens behind every interaction — how data moves
						through an application, how different parts of a system communicate, and how
						the experience holds up when real users depend on it.
					</p>

					<p>
						Building a property rental mobile app that connects tenants, landlords,
						agents, and lawyers means bringing multiple parts of the rental journey into
						one product. Property discovery, map integration, rental requests,
						messaging, voice and video calls, and digital document signing all have to
						feel like a single coherent flow — not a stack of features stitched
						together.
					</p>

					<p>
						I&apos;m drawn to products where state has to stay coherent under real
						conditions — building a structured learning platform where lessons unlock
						only after the previous one is completed, integrating an AI that evaluates
						submitted answers as users progress, and wiring an AI-powered business
						advisory chat that streams responses over SSE and draws on each user&apos;s
						business context so the conversation feels ongoing rather than generic.
					</p>

					<p>
						My focus is on building maintainable, reliable, and intuitive products. I
						pay attention to API integration, state management, asynchronous operations,
						error handling, performance, and the small interactions that make software
						feel dependable.
					</p>

					<p>
						I enjoy working with teams that value thoughtful engineering, clear
						communication, maintainable code, and products built to solve meaningful
						problems.
					</p>
				</div>

				<dl className="mt-12 flex flex-col gap-6">
					<div>
						<dt className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#FFFFFF5C] mb-2">
							<MapPin size={12} aria-hidden="true" />
							Location
						</dt>
						<dd className="text-base text-[#FFFFFFB8]">Nigeria — Remote worldwide</dd>
					</div>

					<div>
						<dt className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#FFFFFF5C] mb-2">
							<Target size={12} aria-hidden="true" />
							Current focus
						</dt>
						<dd className="text-base text-[#FFFFFFB8]">
							Web & mobile product engineering
						</dd>
					</div>

					<div>
						<dt className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#FFFFFF5C] mb-2">
							<CircleDot size={12} aria-hidden="true" />
							Availability
						</dt>
						<dd className="inline-flex items-center gap-2 rounded-full bg-[#00de51]/10 border border-[#00de51]/30 px-3 py-1.5 text-sm font-medium text-[#00de51] mt-1">
							<span className="relative size-2 rounded-full bg-[#00de51] after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-[#00de51] after:animate-[rippleFade_1.8s_ease-out_infinite]" />
							Open to new opportunities
						</dd>
					</div>
				</dl>
			</div>
		</div>
	);
}
