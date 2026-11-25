'use client';

import Image from 'next/image';
import { FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { Separator } from '../ui/separator';
import { ArrowUpRight, Download } from 'lucide-react';

const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: FaLinkedinIn,
  },
  {
    name: "X",
    url: "https://x.com",
    icon: FaXTwitter,
  },
];
export function ProfileCard() {
	return (
		<aside className="relative flex max-h-[calc(100vh-48px)] rounded-[24px] bg-linear-to-b from-white/8 to-white/4 p-1.5 shadow-[0_0.5px_0.5px_0_rgba(0,0,0,0.0588),0_1px_1px_-0.5px_rgba(0,0,0,0.0588),0_3px_3px_-1.5px_rgba(0,0,0,0.0588),0_5px_5px_-2.5px_rgba(0,0,0,0.1216),inset_0_0.5px_0.5px_0_rgba(255,255,255,0.0784),inset_0_1px_3px_0_rgba(255,255,255,0.0314),inset_0_-4px_12px_0_rgba(255,255,255,0.0392)] backdrop-blur-md">
			<div className="relative z-0 w-full flex-1 overflow-hidden rounded-[18px] bg-[#0f0f0f]">
				<div className="relative h-full w-full overflow-hidden rounded-[18px]">
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

				<div className="absolute top-9.5 left-9.5">
					<Image
						src="/assets/images/logo2.png"
						alt=""
						width={40}
						height={40}
					/>
				</div>

				<ul className="absolute top-9.5 right-9.5 grid items-center gap-2">
					{socialLinks.map((social) => {
						const Icon = social.icon;
						return (
							<li key={social.name}>
								<a
									href={social.url}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={social.name}
									className="size-10 flex items-center justify-center p-2 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.04)_100%)] shadow-[0px_0.5px_0.5px_0px_rgba(0,0,0,0.0588235294),0px_1px_1px_-0.5px_rgba(0,0,0,0.0588235294),0px_3px_3px_-1.5px_rgba(0,0,0,0.0588235294),0px_5px_5px_-2.5px_rgba(0,0,0,0.1215686275),0px_0.5px_0.5px_0px_rgba(255,255,255,0.0784313725)_inset,0px_1px_3px_0px_rgba(255,255,255,0.031372549)_inset,0px_-4px_12px_0px_rgba(255,255,255,0.0392156863)_inset] backdrop-blur-md"
								>
									<Icon className="h-5 w-5" />
								</a>
							</li>
						);
					})}
				</ul>

				<div className="absolute bottom-9.5 left-9.5 right-9.5">
					<h4 className="text-[FFFFFFB8] pb-4 tracking-[-0.02em] font-medium text-md font-apfel text-[32px] leading-normal">
						Hey I&apos;am a Developer
					</h4>
					<p className="text-[#FFFFFF8F] text-sm tracking-[0.005em] ">
						I help startups grow with smart design and no-code development, based in
						Cupertino, CA.
					</p>
					<Separator className="bg-[#FFFFFF14] my-8 h-px" />

					<div className="flex items-center gap-2 border-[rgba(255,255,255,.11)]">
						<a className="flex h-10 aspect-[1] items-center justify-center rounded-full bg-[#00de51]">
							<ArrowUpRight size={18} className="text-[#0F0F0F]" />
						</a>
						<span className="flex h-10 items-center justify-center rounded-[28px] px-5 text-sm bg-[#00de51] text-[#0F0F0F] font-medium">
							Let&apos;s talk
						</span>
						<a
							className="ml-3.5 flex items-center gap-3 text-sm text-[#b8c5cf] "
							href="#contact"
						>
							<Download size={17} />
							Download CV
						</a>
					</div>
				</div>
			</div>
		</aside>
	);
}
