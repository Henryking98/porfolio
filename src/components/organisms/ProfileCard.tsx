'use client';

import Image from 'next/image';
import { ArrowUpRight, Copy, Download, X } from 'lucide-react';

export function ProfileCard() {
	return (
		<aside
			className="relative flex h-[calc(100svh-60px)] w-full flex-col overflow-hidden rounded-[30px] border border-[#292929] bg-gradient-to-br from-[rgba(20,20,20,.88)] to-[rgba(15,15,15,.79)] shadow-[inset_0_0_0_7px_rgba(255,255,255,.035),0_10px_35px_rgba(0,0,0,.28)] max-[760px]:h-[min(760px,88svh)] max-[760px]:min-h-[610px] max-[760px]:rounded-3xl"
			aria-label="Developer profile"
		>
			{/* image layer — stays absolute so it fills the card behind the content */}
			<div className="absolute inset-0" role="img" aria-label="Portrait of Developer">
				<Image
					src="/avatar.png"
					alt=""
					fill
					priority
					sizes="(max-width: 760px) 100vw, 32vw"
					className="object-cover object-top"
				/>
				{/* gradient fade so the copy at the bottom stays readable */}
				<div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(13,13,13,.82),transparent_60%),radial-gradient(ellipse_at_48%_47%,transparent_10%,rgba(0,0,0,.26)_75%)]" />
			</div>

			{/* topline — first flow child */}
			<div className="relative z-[2] flex items-start justify-between px-[46px] pt-12 max-[760px]:px-7 max-[760px]:pt-[30px]">
				<div
					className="brand-mark relative h-[49px] w-[49px] rounded-full"
					aria-label="Personal portfolio mark"
				>
					<span className="absolute bottom-[5px] left-[2px] h-2 w-[23px] rotate-45" />
				</div>
				<div className="grid gap-2.5 max-[760px]:gap-2">
					<a
						href="#contact"
						aria-label="X profile"
						className="grid h-[50px] w-[50px] cursor-pointer place-items-center rounded-full border-0 bg-[rgba(42,42,42,.76)] text-[#ddd] transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#333] max-[760px]:h-[42px] max-[760px]:w-[42px]"
					>
						<X size={22} />
					</a>
					<a
						href="#contact"
						aria-label="LinkedIn profile"
						className="grid h-[50px] w-[50px] cursor-pointer place-items-center rounded-full border-0 bg-[rgba(42,42,42,.76)] text-[#ddd] transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#333] max-[760px]:h-[42px] max-[760px]:w-[42px]"
					>
						<span className="rounded-[3px] border-2 border-current px-0.5 text-[21px] font-bold leading-none tracking-[-1px]">
							in
						</span>
					</a>
					<button
						type="button"
						aria-label="Copy portfolio link"
						onClick={() => navigator.clipboard?.writeText(window.location.href)}
						className="grid h-[50px] w-[50px] cursor-pointer place-items-center rounded-full border-0 bg-[rgba(42,42,42,.76)] text-[#ddd] transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#333] max-[760px]:h-[42px] max-[760px]:w-[42px]"
					>
						<Copy size={18} />
					</button>
				</div>
			</div>

			{/* copy — last flow child, pinned to the bottom by mt-auto */}
			<div className="relative z-[2] mt-auto px-[47px] pb-[43px] max-[1200px]:px-8 max-[760px]:px-[26px] max-[760px]:pb-[25px]">
				<p className="mb-12 flex items-center gap-2.5 text-base text-[#c7d1d9] max-[760px]:mb-7 max-[760px]:text-sm">
					<span className="h-[11px] w-[11px] rounded-full bg-[var(--green)]" />
					Available for Work
				</p>
				<h2 className="mb-6 whitespace-nowrap text-4xl font-normal tracking-[-1.6px] max-[1200px]:text-[29px] max-[760px]:mb-[15px] max-[760px]:text-[clamp(25px,7vw,34px)] max-[760px]:tracking-[-1.4px]">
					Hey, I&apos;m <strong className="font-medium">Developer</strong>
					<i
						className="ml-2 inline-block h-[46px] w-[3px] bg-[#f5f5f5] align-middle max-[760px]:h-[35px]"
						aria-hidden="true"
					/>
				</h2>
				<p className="mb-10 text-[17px] leading-[1.45] text-[#9dabb6] max-[1200px]:text-[15px] max-[760px]:mb-[26px] max-[760px]:text-sm">
					I help startups grow with smart design and no-code
					<br className="desktop-break" /> development, based in Cupertino, CA.
				</p>
				<div className="flex items-center gap-2.5 border-t border-[rgba(255,255,255,.11)] pt-10 max-[760px]:gap-2 max-[760px]:pt-6">
					<a
						className="flex h-[51px] w-[51px] items-center justify-center rounded-full bg-[var(--green)] text-[#07130b] max-[760px]:h-[46px] max-[760px]:w-[46px]"
						href="#contact"
						aria-label="Jump to contact"
					>
						<ArrowUpRight size={23} />
					</a>
					<a
						className="flex h-[51px] items-center justify-center rounded-[28px] bg-[var(--green)] px-[26px] text-base text-[#07130b] max-[760px]:h-[46px] max-[760px]:px-[18px] max-[760px]:text-sm"
						href="mailto:hello@example.com"
					>
						Let&apos;s talk
					</a>
					<a
						className="ml-3.5 flex items-center gap-3 text-base text-[#b8c5cf] max-[760px]:ml-auto max-[760px]:gap-[7px] max-[760px]:text-[13px]"
						href="#contact"
					>
						<Download size={17} />
						Download CV
					</a>
				</div>
			</div>
		</aside>
	);
}
// 'use client';

// import { ArrowUpRight, Copy, Download, X } from 'lucide-react';

// export function ProfileCard() {
// 	return (
// 		<aside
// 			className="absolute left-5 top-[30px] bottom-[30px] w-[min(600px,32vw)] overflow-hidden rounded-[30px] border border-[#292929] bg-gradient-to-br from-[rgba(20,20,20,.88)] to-[rgba(15,15,15,.79)] shadow-[inset_0_0_0_7px_rgba(255,255,255,.035),0_10px_35px_rgba(0,0,0,.28)] max-[1200px]:w-[34vw] max-[760px]:relative max-[760px]:inset-auto max-[760px]:mx-auto max-[760px]:h-[min(760px,88svh)] max-[760px]:min-h-[610px] max-[760px]:w-full max-[760px]:rounded-3xl"
// 			aria-label="Developer profile"
// 		>
// 			<div
// 				className="portrait-placeholder absolute inset-0 flex items-center justify-center overflow-hidden"
// 				role="img"
// 				aria-label="Replace with profile portrait"
// 			>
// 				<span className="image-label absolute left-3 top-3 z-[2] rounded border border-[rgba(255,255,255,.16)] bg-[rgba(0,0,0,.48)] px-[7px] py-[5px] text-[8px] tracking-[.14em] text-[rgba(235,235,235,.64)]">
// 					PROFILE IMAGE
// 				</span>
// 				<div className="portrait-silhouette absolute -bottom-[7%] left-[9%] h-[81%] w-[82%] rounded-[48%_48%_10%_10%]">
// 					<span className="absolute left-[33%] top-[27%] z-[1] h-[10%] w-[40%] -rotate-8 rounded-full opacity-80" />
// 				</div>
// 			</div>
// 			<div className="absolute inset-x-[46px] top-12 z-[2] flex items-start justify-between max-[760px]:inset-x-7 max-[760px]:top-[30px]">
// 				<div
// 					className="brand-mark relative h-[49px] w-[49px] rounded-full"
// 					aria-label="Personal portfolio mark"
// 				>
// 					<span className="absolute bottom-[5px] left-[2px] h-2 w-[23px] rotate-45" />
// 				</div>
// 				<div className="grid gap-2.5 max-[760px]:gap-2">
// 					<a
// 						href="#contact"
// 						aria-label="X profile"
// 						className="grid h-[50px] w-[50px] cursor-pointer place-items-center rounded-full border-0 bg-[rgba(42,42,42,.76)] text-[#ddd] transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#333] max-[760px]:h-[42px] max-[760px]:w-[42px]"
// 					>
// 						<X size={22} />
// 					</a>
// 					<a
// 						href="#contact"
// 						aria-label="LinkedIn profile"
// 						className="grid h-[50px] w-[50px] cursor-pointer place-items-center rounded-full border-0 bg-[rgba(42,42,42,.76)] text-[#ddd] transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#333] max-[760px]:h-[42px] max-[760px]:w-[42px]"
// 					>
// 						<span className="rounded-[3px] border-2 border-current px-0.5 text-[21px] font-bold leading-none tracking-[-1px]">
// 							in
// 						</span>
// 					</a>
// 					<button
// 						type="button"
// 						aria-label="Copy portfolio link"
// 						onClick={() => navigator.clipboard?.writeText(window.location.href)}
// 						className="grid h-[50px] w-[50px] cursor-pointer place-items-center rounded-full border-0 bg-[rgba(42,42,42,.76)] text-[#ddd] transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#333] max-[760px]:h-[42px] max-[760px]:w-[42px]"
// 					>
// 						<Copy size={18} />
// 					</button>
// 				</div>
// 			</div>
// 			<div className="absolute inset-x-[45px] bottom-[43px] z-[2] left-[47px] max-[1200px]:left-8 max-[1200px]:right-[25px] max-[760px]:inset-x-[22px] max-[760px]:bottom-[25px] max-[760px]:left-[26px]">
// 				<p className="mb-12 flex items-center gap-2.5 text-base text-[#c7d1d9] max-[760px]:mb-7 max-[760px]:text-sm">
// 					<span className="h-[11px] w-[11px] rounded-full bg-[var(--green)]" />
// 					Available for Work
// 				</p>
// 				<h2 className="mb-6 whitespace-nowrap text-4xl font-normal tracking-[-1.6px] max-[1200px]:text-[29px] max-[760px]:mb-[15px] max-[760px]:text-[clamp(25px,7vw,34px)] max-[760px]:tracking-[-1.4px]">
// 					Hey, I&apos;m <strong className="font-medium">Developer</strong>
// 					<i
// 						className="ml-2 inline-block h-[46px] w-[3px] bg-[#f5f5f5] align-middle max-[760px]:h-[35px]"
// 						aria-hidden="true"
// 					/>
// 				</h2>
// 				<p className="mb-10 text-[17px] leading-[1.45] text-[#9dabb6] max-[1200px]:text-[15px] max-[760px]:mb-[26px] max-[760px]:text-sm">
// 					I help startups grow with smart design and no-code
// 					<br className="desktop-break" /> development, based in Cupertino, CA.
// 				</p>
// 				<div className="flex items-center gap-2.5 border-t border-[rgba(255,255,255,.11)] pt-10 max-[760px]:gap-2 max-[760px]:pt-6">
// 					<a
// 						className="flex h-[51px] w-[51px] items-center justify-center rounded-full bg-[var(--green)] text-[#07130b] max-[760px]:h-[46px] max-[760px]:w-[46px]"
// 						href="#contact"
// 						aria-label="Jump to contact"
// 					>
// 						<ArrowUpRight size={23} />
// 					</a>
// 					<a
// 						className="flex h-[51px] items-center justify-center rounded-[28px] bg-[var(--green)] px-[26px] text-base text-[#07130b] max-[760px]:h-[46px] max-[760px]:px-[18px] max-[760px]:text-sm"
// 						href="mailto:hello@example.com"
// 					>
// 						Let&apos;s talk
// 					</a>
// 					<a
// 						className="ml-3.5 flex items-center gap-3 text-base text-[#b8c5cf] max-[760px]:ml-auto max-[760px]:gap-[7px] max-[760px]:text-[13px]"
// 						href="#contact"
// 					>
// 						<Download size={17} />
// 						Download CV
// 					</a>
// 				</div>
// 			</div>
// 		</aside>
// 	);
// }
