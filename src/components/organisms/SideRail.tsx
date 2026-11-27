'use client';

import {
	ArrowDown,
	BriefcaseBusiness,
	Home,
	Layers,
	Send,
	Sparkles,
	Sun,
	UserCircle,
	type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const railLinks: LinkItem[] = [
	{ label: 'Home', href: '#home', icon: Home },
	{ label: 'About', href: '#about', icon: UserCircle },
	{ label: 'Work', href: '#work', icon: BriefcaseBusiness },
	{ label: 'Services', href: '#services', icon: Sparkles },
	{ label: 'Stack', href: '#tech-stack', icon: Layers },
	{ label: 'Contact', href: '#contact', icon: Send },
];

interface SideRailProps {
	links?: LinkItem[];
}

interface LinkItem {
	label: string;
	href: string;
	icon: LucideIcon;
}

const railItem =
	'grid h-10 w-10 cursor-pointer place-items-center rounded-full border-0 bg-[#1c1c1c] text-[#696969] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#333]';

const glassSurface =
	'bg-linear-to-b from-white/8 to-white/4 backdrop-blur-md shadow-[0px_0.5px_0.5px_0px_rgba(0,0,0,0.0588235294),0px_1px_1px_-0.5px_rgba(0,0,0,0.0588235294),0px_3px_3px_-1.5px_rgba(0,0,0,0.0588235294),0px_5px_5px_-2.5px_rgba(0,0,0,0.1215686275),0px_0.5px_0.5px_0px_rgba(255,255,255,0.0784313725)_inset,0px_1px_3px_0px_rgba(255,255,255,0.031372549)_inset,0px_-4px_12px_0px_rgba(255,255,255,0.0392156863)_inset]';

export function SideRail({ links = railLinks }: SideRailProps) {
	return (
		<nav
			className="fixed right-4.5 top-1/2 z-50 flex -translate-y-1/2 flex-col items-center gap-2"
			aria-label="Portfolio navigation"
		>
			<div className={cn('rounded-full backdrop-blur-md', glassSurface)}>
				<div className="group relative grid h-10 w-10 cursor-pointer place-items-center">
					<Sun size={15} className="text-[#00de51]" />
				</div>
			</div>

			<ul className={cn('flex flex-col gap-1 rounded-full px-1 py-1', glassSurface)}>
				{links.map(({ label, href, icon: Icon }) => (
					<li key={`${label}-${href}`} className="flex">
						<a
							href={href}
							aria-label={label}
							className="group relative flex h-8 w-8 items-center justify-center text-[#FFFFFF5C] transition-colors duration-200 hover:text-[#00de51]"
						>
							<Icon
								size={15}
								className="text-[#FFFFFF5C] transition-colors duration-200 group-hover:text-[#00de51]"
							/>
							<span
								className={cn(
									'pointer-events-none absolute top-1/2 right-[calc(100%+12px)] -translate-y-1/2',
									'flex h-7 items-center justify-center rounded-full px-3 whitespace-nowrap',
									'text-xs leading-5 tracking-[-0.005em] text-[#FFFFFFB8]',
									glassSurface,
									'opacity-0 invisible translate-x-2',
									'transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
									'group-hover:opacity-100 group-hover:visible group-hover:translate-x-0',
								)}
							>
								{label}
							</span>
						</a>
					</li>
				))}
			</ul>

			<a className={`${railItem} to-top`} href="#home" aria-label="Back to top">
				<ArrowDown
					size={15}
					className="text-[#FFFFFF5C] transition-colors duration-200 group-hover:text-[#00de51]"
				/>
			</a>

			<span
				className="hidden h-0.5 w-6 bg-[#777] shadow-[0_7px_0_#777,0_14px_0_#777] max-[760px]:block"
				aria-hidden="true"
			/>
		</nav>
	);
}
// 'use client';

// import {
// 	ArrowDown,
// 	BriefcaseBusiness,
// 	Copy,
// 	Home,
// 	Menu,
// 	Send,
// 	Sparkles,
// 	Sun,
// 	UserCircle,
// 	type LucideIcon,
// } from 'lucide-react';
// import { cn } from '@/lib/utils';

// const railLinks: LinkItem[] = [
// 	{ label: 'Home', href: '#home', icon: Home },
// 	{ label: 'About', href: '#about', icon: UserCircle },
// 	{ label: 'Work', href: '#work', icon: BriefcaseBusiness },
// 	{ label: 'Services', href: '#services', icon: Sparkles },
// 	{ label: 'Projects', href: '#work', icon: Copy },
// 	{ label: 'Capabilities', href: '#services', icon: Menu },
// 	{ label: 'Contact', href: '#contact', icon: Send },
// ];

// interface SideRailProps {
// 	links?: LinkItem[];
// }

// interface LinkItem {
// 	label: string;
// 	href: string;
// 	icon: LucideIcon;
// }

// const railItem =
// 	'grid h-10 w-10 cursor-pointer place-items-center rounded-full border-0 bg-[#1c1c1c] text-[#696969] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#333]';

// const glassSurface =
// 	'bg-linear-to-b from-white/8 to-white/4 backdrop-blur-md shadow-[0px_0.5px_0.5px_0px_rgba(0,0,0,0.0588235294),0px_1px_1px_-0.5px_rgba(0,0,0,0.0588235294),0px_3px_3px_-1.5px_rgba(0,0,0,0.0588235294),0px_5px_5px_-2.5px_rgba(0,0,0,0.1215686275),0px_0.5px_0.5px_0px_rgba(255,255,255,0.0784313725)_inset,0px_1px_3px_0px_rgba(255,255,255,0.031372549)_inset,0px_-4px_12px_0px_rgba(255,255,255,0.0392156863)_inset]';

// export function SideRail({ links = railLinks }: SideRailProps) {
// 	return (
// 		<nav
// 			className="fixed right-4.5 top-1/2 z-50 flex -translate-y-1/2 flex-col items-center gap-2"
// 			aria-label="Portfolio navigation"
// 		>
// 			<div className={cn('rounded-full backdrop-blur-md', glassSurface)}>
// 				<div className="group relative grid h-10 w-10 cursor-pointer place-items-center">
// 					<Sun size={15} className="text-[#00de51]" />
// 				</div>
// 			</div>

// 			{/* Nav links with tooltips */}
// 			<ul className={cn('flex flex-col gap-1 rounded-full px-1 py-1', glassSurface)}>
// 				{links.map(({ label, href, icon: Icon }) => (
// 					<li key={`${label}-${href}`} className="flex">
// 						<a
// 							href={href}
// 							aria-label={label}
// 							className="group relative flex h-8 w-8 items-center justify-center text-[#FFFFFF5C] transition-colors duration-200 hover:text-[#00de51]"
// 						>
// 							<Icon
// 								size={15}
// 								className="text-[#FFFFFF5C] transition-colors duration-200 group-hover:text-[#00de51]"
// 							/>
// 							<span
// 								className={cn(
// 									'pointer-events-none absolute top-1/2 right-[calc(100%+12px)] -translate-y-1/2',
// 									'flex h-7 items-center justify-center rounded-full px-3 whitespace-nowrap',
// 									'text-xs leading-5 tracking-[-0.005em] text-[#FFFFFFB8]',
// 									glassSurface,
// 									'opacity-0 invisible translate-x-2',
// 									'transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
// 									'group-hover:opacity-100 group-hover:visible group-hover:translate-x-0',
// 								)}
// 							>
// 								{label}
// 							</span>
// 						</a>
// 					</li>
// 				))}
// 			</ul>

// 			<a className={`${railItem} to-top`} href="#home" aria-label="Back to top">
// 				<ArrowDown
// 					size={15}
// 					className="text-[#FFFFFF5C] transition-colors duration-200 group-hover:text-[#00de51]"
// 				/>
// 			</a>

// 			<span
// 				className="hidden h-0.5 w-6 bg-[#777] shadow-[0_7px_0_#777,0_14px_0_#777] max-[760px]:block"
// 				aria-hidden="true"
// 			/>
// 		</nav>
// 	);
// }
