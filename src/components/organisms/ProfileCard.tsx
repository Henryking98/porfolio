'use client';

import Image from 'next/image';
import { ArrowUpRight, Copy, Download, X } from 'lucide-react';

export function ProfileCard() {
	return (
		<aside className="relative flex max-h-[calc(100vh-48px)] rounded-[24px] bg-linear-to-b from-white/8 to-white/4 p-1.5 shadow-[0_0.5px_0.5px_0_rgba(0,0,0,0.0588),0_1px_1px_-0.5px_rgba(0,0,0,0.0588),0_3px_3px_-1.5px_rgba(0,0,0,0.0588),0_5px_5px_-2.5px_rgba(0,0,0,0.1216),inset_0_0.5px_0.5px_0_rgba(255,255,255,0.0784),inset_0_1px_3px_0_rgba(255,255,255,0.0314),inset_0_-4px_12px_0_rgba(255,255,255,0.0392)] backdrop-blur-md">
			<div className="relative z-0 w-full flex-1 overflow-hidden rounded-[18px] bg-[#0f0f0f]">
				<div className="relative z-1 h-full w-full overflow-hidden rounded-[18px]">
					<Image
						src="/assets/images/avatar.webp"
						alt="Portrait of Developer"
						fill
						priority
						sizes="(max-width: 760px) 100vw, 32vw"
						className="scale-100 object-cover grayscale transition-transform duration-300 aspect-[0.546728972]"
					/>
				</div>
				<div className="flex min-[576px]:block! top-[50%] left-0 absolute items-center z-2 -translate-y-1/2">
					<div>
						<Image
							src="/assets/images/vector_dark.svg"
							alt=""
							width={32}
							height={227}
							className="grayscale"
						/>
					</div>

					<p className="absolute inset-0 left-0 z-3 inline-flex items-center justify-center flex-col gap-2 text-[rgba(255,255,255,0.72)]">
						<span
							className="text-sm font-medium tracking-normal"
							style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
						>
							Available for work
						</span>
						<span className="relative size-2 rounded-full bg-[#00de51] after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-(--green) after:animate-[rippleFade_1.8s_ease-out_infinite]" />{' '}
					</p>
				</div>
			</div>

			<div className="absolute top-[38px] left-[38px]">
				<Image
					src="/assets/images/logo2.svg"
					alt=""
					fill
					priority
					sizes="(max-width: 760px) 100vw, 32vw"
					className="object-contain grayscale"
				/>
			</div>

			{/* topline */}
			{/* <div className="relative z-[2] flex shrink-0 items-start justify-between px-11.5 pt-12 max-[760px]:px-7 max-[760px]:pt-7.5">
				<div
					className="brand-mark relative h-12.25 w-12.25 rounded-full"
					aria-label="Personal portfolio mark"
				>
					<span className="absolute bottom-1.25 left-0.5 h-2 w-5.75 rotate-45" />
				</div>
				<div className="grid gap-2.5 max-[760px]:gap-2">
					<a
						href="#contact"
						aria-label="X profile"
						className="grid h-12.5 w-12.5 cursor-pointer place-items-center rounded-full border-0 bg-[rgba(42,42,42,.76)] text-[#ddd] transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#333] max-[760px]:h-[42px] max-[760px]:w-[42px]"
					>
						<X size={22} />
					</a>
					<a
						href="#contact"
						aria-label="LinkedIn profile"
						className="grid h-12.5 w-12.5 cursor-pointer place-items-center rounded-full border-0 bg-[rgba(42,42,42,.76)] text-[#ddd] transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#333] max-[760px]:h-[42px] max-[760px]:w-[42px]"
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
			</div> */}

			{/* copy — pinned to bottom */}
			{/* <div className="relative z-[2] mt-auto shrink-0 px-[47px] pb-[43px] max-[1200px]:px-8 max-[760px]:px-[26px] max-[760px]:pb-[25px]">
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
			</div> */}
		</aside>
	);
}
// 'use client';

// import Image from 'next/image';
// import { ArrowUpRight, Copy, Download, X } from 'lucide-react';

// export function ProfileCard() {
// 	return (
// 		<aside
// 			className="relative flex h-[calc(100svh-60px)] w-full flex-col overflow-hidden rounded-[30px] border border-[#292929] bg-linear-to-br from-[rgba(20,20,20,.88)] to-[rgba(15,15,15,.79)] shadow-[inset_0_0_0_7px_rgba(255,255,255,.035),0_10px_35px_rgba(0,0,0,.28)] max-[760px]:h-[min(760px,88svh)] max-[760px]:min-h-152.5 max-[760px]:rounded-3xl"
// 			aria-label="Developer profile"
// 		>
// 			<div className="bg-[#f0f0f0]">
// 				<div className="absolute inset-0" role="img" aria-label="Portrait of Developer">
// 					<Image
// 						src="/assets/images/avatar.webp"
// 						alt=""
// 						fill
// 						priority
// 						sizes="(max-width: 760px) 100vw, 32vw"
// 						className="object-cover object-top"
// 					/>
// 					<div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(13,13,13,.82),transparent_60%),radial-gradient(ellipse_at_48%_47%,transparent_10%,rgba(0,0,0,.26)_75%)]" />
// 				</div>
// 			</div>
// 			{/* image layer — stays absolute so it fills the card behind the content */}

// 			{/* topline — first flow child */}
// 			<div className="relative z-2 flex items-start justify-between px-11.5 pt-12 max-[760px]:px-7 max-[760px]:pt-7.5">
// 				<div
// 					className="brand-mark relative h-12.25 w-12.25 rounded-full"
// 					aria-label="Personal portfolio mark"
// 				>
// 					<span className="absolute bottom-1.25 left-0.5 h-2 w-5.75 rotate-45" />
// 				</div>
// 				<div className="grid gap-2.5 max-[760px]:gap-2">
// 					<a
// 						href="#contact"
// 						aria-label="X profile"
// 						className="grid h-12.5 w-12.5 cursor-pointer place-items-center rounded-full border-0 bg-[rgba(42,42,42,.76)] text-[#ddd] transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#333] max-[760px]:h-[42px] max-[760px]:w-[42px]"
// 					>
// 						<X size={22} />
// 					</a>
// 					<a
// 						href="#contact"
// 						aria-label="LinkedIn profile"
// 						className="grid h-12.5 w-12.5 cursor-pointer place-items-center rounded-full border-0 bg-[rgba(42,42,42,.76)] text-[#ddd] transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#333] max-[760px]:h-[42px] max-[760px]:w-[42px]"
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

// 			{/* copy — last flow child, pinned to the bottom by mt-auto */}
// 			<div className="relative z-[2] mt-auto px-[47px] pb-[43px] max-[1200px]:px-8 max-[760px]:px-[26px] max-[760px]:pb-[25px]">
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
