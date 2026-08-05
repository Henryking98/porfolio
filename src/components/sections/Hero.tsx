import { ArrowUpRight, FileText, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FloatingNav } from '@/components/molecules/floating-nav';

export function Hero() {
	return (
		<section className="relative min-h-screen w-full bg-[#09090B] text-[#FAFAFA] font-sans overflow-hidden px-4 py-12 md:px-12 lg:px-20 flex items-center">
			{/* Background Radial Glow Effect */}
			<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-[#10B981]/5 blur-[160px] pointer-events-none" />

			{/* Top Status Header Bar */}
			<div className="absolute top-6 right-12 text-right hidden md:block text-xs tracking-wider text-[#71717A]">
				<div>Mon, Aug 3</div>
				<div className="font-mono text-[#E4E4E7] mt-0.5">14:54</div>
			</div>

			{/* Main Grid Content Matrix Layout */}
			<div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10 pr-0 lg:pr-16">
				{/* LEFT COLUMN: Profile Bento Box Card (Grid: 5 cols) */}
				<div className="lg:col-span-5 rounded-[28px] border border-[#27272A] bg-[#121214] p-6 flex flex-col justify-between relative overflow-hidden group min-h-[520px]">
					{/* Card Top Strip Layer */}
					<div className="flex justify-between items-start">
						{/* Minimal Custom Monogram Badge */}
						<div className="h-10 w-10 rounded-xl bg-[#1C1C1F] border border-[#27272A] flex items-center justify-center font-bold tracking-tight text-[#E4E4E7]">
							Is
						</div>
						{/* Social Link Stack */}
						<div className="flex flex-col gap-2">
							<a
								href="#"
								className="h-8 w-8 rounded-lg bg-[#1C1C1F] border border-[#27272A] flex items-center justify-center text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
							>
								<X size={14} />
							</a>
							<a
								href="#"
								className="h-8 w-8 rounded-lg bg-[#1C1C1F] border border-[#27272A] flex items-center justify-center text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
							>
								<X size={14} />
							</a>
							<a
								href="#"
								className="h-8 w-8 rounded-lg bg-[#1C1C1F] border border-[#27272A] flex items-center justify-center text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
							>
								<X size={14} />
							</a>
						</div>
					</div>

					{/* Left Absolute Text Strip: Availability Indicator */}
					<div className="absolute left-4 top-1/3 -rotate-90 origin-left flex items-center gap-2 text-[10px] tracking-widest text-[#A1A1AA] font-medium uppercase">
						<span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
						Available for Work
					</div>

					{/* Profile Image Mask and Blend Styling */}
					<div className="absolute inset-x-0 bottom-0 top-16 bg-gradient-to-t from-[#121214] via-transparent to-transparent z-0 pointer-events-none" />
					<img
						src="https://unsplash.com"
						alt="Isa Portfolio Avatar"
						className="absolute bottom-0 right-0 h-[80%] w-auto object-contain grayscale opacity-35 mix-blend-luminosity pointer-events-none"
					/>

					{/* Card Bottom Content Block */}
					<div className="relative z-10 mt-auto pt-24">
						<h2 className="text-3xl font-semibold tracking-tight text-[#FAFAFA] flex items-center gap-1">
							Hey, I&apos;m Isa
							<span className="h-7 w-[2px] bg-[#10B981] inline-block ml-0.5" />
						</h2>
						<p className="text-sm text-[#A1A1AA] mt-2 max-w-[280px] leading-relaxed">
							I help startups grow with smart design and no-code development, based in
							Cupertino, CA.
						</p>

						{/* Action Buttons Tier using Shadcn primitives */}
						<div className="flex items-center gap-3 mt-6">
							<Button className="bg-[#10B981] text-[#0A0A0A] hover:bg-[#059669] rounded-full pl-1 pr-4 py-5 flex items-center gap-2 h-9 font-semibold text-xs shadow-lg shadow-[#10B981]/10">
								<div className="h-7 w-7 rounded-full bg-[#0A0A0A]/10 flex items-center justify-center -rotate-45">
									<ArrowUpRight size={14} />
								</div>
								Let&apos;s talk
							</Button>

							<Button
								variant="outline"
								className="border-[#27272A] bg-[#1C1C1F]/40 text-[#A1A1AA] hover:bg-[#27272A] hover:text-[#FAFAFA] rounded-full px-4 h-9 text-xs font-medium transition-colors gap-2"
							>
								<FileText size={14} />
								Download CV
							</Button>
						</div>
					</div>
				</div>

				{/* RIGHT COLUMN: Typography Layout & Project Decks (Grid: 7 cols) */}
				<div className="lg:col-span-7 flex flex-col justify-between gap-12 py-4">
					{/* Hero Statement */}
					<h1 className="text-4xl sm:text-5xl md:text-[56px] leading-[1.1] font-medium tracking-tight text-[#F4F4F5] max-w-2xl">
						I’m building websites & brands that people remember
					</h1>

					{/* Bottom Split Row: Project Deck Fan & Numerical Metrics Stack */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
						{/* Fan Deck Layer Structure using Unsplash placeholders */}
						<div className="relative h-48 w-full flex items-center justify-center md:justify-start">
							{/* Card 1 (Back Left) */}
							<div
								className="absolute bottom-2 left-4 h-36 w-28 bg-[#1C1C1F] border border-[#27272A] rounded-xl rotate-[-12deg] shadow-2xl overflow-hidden bg-cover bg-center"
								style={{ backgroundImage: `url('https://unsplash.com')` }}
							/>
							{/* Card 2 (Center Back) */}
							<div
								className="absolute bottom-4 left-16 h-36 w-28 bg-[#27272A] border border-[#3F3F46] rounded-xl rotate-[-4deg] shadow-2xl overflow-hidden bg-cover bg-center"
								style={{ backgroundImage: `url('https://unsplash.com')` }}
							/>
							{/* Card 3 (Center Front) */}
							<div
								className="absolute bottom-1 left-28 h-36 w-28 bg-[#10B981] border border-[#34D399] rounded-xl rotate-[6deg] shadow-2xl overflow-hidden bg-cover bg-center"
								style={{ backgroundImage: `url('https://unsplash.com')` }}
							/>
							{/* Card 4 (Front Right Metric Panel) */}
							<div className="absolute bottom-6 left-40 h-36 w-28 bg-[#0A0A0A] border border-[#27272A] rounded-xl rotate-[16deg] shadow-2xl overflow-hidden p-2 flex flex-col justify-between">
								<div className="text-[8px] uppercase tracking-widest text-[#71717A]">
									Active Case
								</div>
								<div
									className="h-16 w-full rounded bg-[#18181B] bg-cover bg-center"
									style={{ backgroundImage: `url('https://unsplash.com')` }}
								/>
								<div className="text-[9px] text-[#E4E4E7] font-medium tracking-tight">
									14,827 users
								</div>
							</div>
						</div>

						{/* Metric Statistics Block Stack */}
						<div className="flex flex-col gap-6 md:pl-6">
							<div>
								<div className="text-4xl md:text-5xl font-semibold tracking-tight text-[#FAFAFA]">
									10+
								</div>
								<div className="text-xs text-[#71717A] uppercase tracking-wider mt-1">
									Years of experience
								</div>
							</div>
							<div className="h-[1px] w-full bg-[#1C1C1F]" />
							<div>
								<div className="text-4xl md:text-5xl font-semibold tracking-tight text-[#FAFAFA]">
									6x
								</div>
								<div className="text-xs text-[#71717A] uppercase tracking-wider mt-1">
									Industry Awards
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Floating Sidebar Placement (Hidden on mobile and tablet screens) */}
			<div className="fixed right-4 top-1/2 -translate-y-1/2 hidden xl:block z-50">
				<FloatingNav />
			</div>
		</section>
	);
}
