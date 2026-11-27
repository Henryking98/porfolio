'use client';

const highlights = [
	{
		value: '7+ years',
		label: 'Building & shipping products',
	},
	{
		value: 'Web & Mobile',
		label: 'Cross-platform development',
	},
	{
		value: 'API & Data',
		label: 'Backend integrations',
	},
	{
		value: 'Real-time',
		label: 'Live & streaming experiences',
	},
];

export function Hero() {
	return (
		<section id="home" className="relative min-h-svh pt-18 max-[760px]:pt-8">
			<h1 className="mb-8 flex flex-col font-apfel text-[clamp(2.5rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.02em] text-[#FFFFFFB8]">
				<span>I turn product ideas into</span>
				<span>dependable web &amp; mobile</span>
				<span>experiences.</span>
			</h1>

			<p className="mb-16 max-w-2xl text-base leading-relaxed text-[#FFFFFF8F]">
				I bring interfaces, backend integrations, and real-time functionality together to
				build intuitive, reliable digital products.
			</p>

			<div className="grid grid-cols-1 gap-4 min-[700px]:grid-cols-2">
				{highlights.map((item) => (
					<div
						key={item.value}
						className="rounded-[20px] bg-linear-to-b from-white/8 to-white/4 p-6 shadow-[0_0.5px_0.5px_rgba(0,0,0,0.06),0_1px_1px_-0.5px_rgba(0,0,0,0.06),0_3px_3px_-1.5px_rgba(0,0,0,0.06),0_5px_5px_-2.5px_rgba(0,0,0,0.12),inset_0_0.5px_0.5px_rgba(255,255,255,0.08),inset_0_1px_3px_rgba(255,255,255,0.03),inset_0_-4px_12px_rgba(255,255,255,0.04)] backdrop-blur-md"
					>
						<p className="mb-2 font-apfel text-lg font-medium tracking-[-0.01em] text-[#FFFFFFB8]">
							{item.value}
						</p>
						<p className="text-sm leading-relaxed text-[#FFFFFF8F]">{item.label}</p>
					</div>
				))}
			</div>
		</section>
	);
}
