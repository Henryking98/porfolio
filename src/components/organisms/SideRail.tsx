'use client';

import {
	ArrowDown,
	BriefcaseBusiness,
	Copy,
	Home,
	Menu,
	Send,
	Settings,
	Sparkles,
	Sun,
	UserCircle,
} from 'lucide-react';

const railLinks: LinkItem[] = [
	{ label: 'Home', href: '#home', icon: Home },
	{ label: 'About', href: '#about', icon: UserCircle },
	{ label: 'Work', href: '#work', icon: BriefcaseBusiness },
	{ label: 'Services', href: '#services', icon: Sparkles },
	{ label: 'Projects', href: '#work', icon: Copy },
	{ label: 'Capabilities', href: '#services', icon: Menu },
	{ label: 'Contact', href: '#contact', icon: Send },
];

interface SideRailProps {
	links?: LinkItem[];
}

const railItem =
	'grid h-[50px] w-[50px] cursor-pointer place-items-center rounded-full border-0 bg-[#1c1c1c] text-[#696969] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#333] max-[760px]:hidden';

export function SideRail({ links = railLinks }: SideRailProps) {
	return (
		<nav
			className="fixed right-[25px] top-1/2 z-[5] flex -translate-y-1/2 flex-col items-center gap-[34px] max-[760px]:absolute max-[760px]:right-[17px] max-[760px]:top-[17px] max-[760px]:translate-y-0 max-[760px]:gap-0"
			aria-label="Portfolio navigation"
		>
			<button aria-label="Settings" type="button" className={railItem}>
				<Settings size={19} />
			</button>
			<button
				aria-label="Toggle appearance"
				type="button"
				className={`${railItem} text-[var(--green)]`}
			>
				<Sun size={19} />
			</button>
			<div className="rail-group grid gap-0 rounded-[28px] py-2 max-[760px]:hidden">
				{links.map(({ label, href, icon: Icon }) => (
					<a
						href={href}
						aria-label={label}
						key={`${label}-${href}`}
						className="grid h-10 w-[50px] cursor-pointer place-items-center rounded-full bg-transparent text-[#696969] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#333]"
					>
						<Icon size={18} />
					</a>
				))}
			</div>
			<a className={`${railItem} to-top`} href="#home" aria-label="Back to top">
				<ArrowDown size={19} />
			</a>
			{/* mobile hamburger — replaces the hidden rail buttons */}
			<span
				className="hidden max-[760px]:block h-0.5 w-6 bg-[#777] shadow-[0_7px_0_#777,0_14px_0_#777]"
				aria-hidden="true"
			/>
		</nav>
	);
}
