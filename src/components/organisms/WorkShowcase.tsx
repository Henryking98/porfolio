'use client';

const projectCards: Project[] = [
	{
		label: 'Project image 01 · Featured website',
		className: 'project-card project-one',
		tag: 'INDUSTRIAL / BRAND',
	},
	{
		label: 'Project image 02 · Mobile experience',
		className: 'project-card project-two',
		tag: 'DIGITAL / PRODUCT',
	},
	{
		label: 'Project image 03 · Campaign',
		className: 'project-card project-three',
		tag: 'CAMPAIGN / FILM',
	},
	{
		label: 'Project image 04 · 3D showcase',
		className: 'project-card project-four',
		tag: 'INTERACTIVE / 3D',
	},
];

/**
 * Positioning per card is unique (different sizes, offsets, rotations, and
 * on mobile different percentages). The only sane place for these is inline
 * per card, so we key a map here and let `className` carry the decoration
 * (pseudo-elements) from globals.css.
 */
const cardLayout: Record<string, string> = {
	'project-card project-one':
		'absolute left-[8%] top-[4%] h-[184px] w-[200px] -rotate-10 bg-[#111] max-[760px]:left-[1%] max-[760px]:top-[3%] max-[760px]:h-[140px] max-[760px]:w-[37%]',
	'project-card project-two':
		'absolute left-[29%] top-[20%] h-[220px] w-[180px] -rotate-10 bg-[#d5d5d5] max-[760px]:left-[24%] max-[760px]:top-[20%] max-[760px]:h-[185px] max-[760px]:w-[34%]',
	'project-card project-three':
		'absolute left-[51%] top-[39%] h-[232px] w-[198px] -rotate-11 bg-[#151515] max-[760px]:left-[47%] max-[760px]:top-[39%] max-[760px]:h-[190px] max-[760px]:w-[34%]',
	'project-card project-four':
		'absolute left-[75%] top-[63%] h-[205px] w-[177px] -rotate-10 bg-[#080808] max-[760px]:left-[68%] max-[760px]:top-[58%] max-[760px]:h-[160px] max-[760px]:w-[29%]',
};

interface WorkShowcaseProps {
	projects?: Project[];
}

export function WorkShowcase({ projects = projectCards }: WorkShowcaseProps) {
	return (
		<div
			className="relative h-full min-w-[500px] max-[1200px]:w-[120%] max-[1200px]:origin-left max-[1200px]:scale-[.82] max-[1200px]:min-w-[360px] max-[760px]:h-[380px] max-[760px]:w-full max-[760px]:min-w-0 max-[760px]:scale-100"
			aria-label="Selected work image placeholders"
		>
			{projects.map((card) => (
				<div
					className={`${card.className} overflow-hidden border border-[rgba(255,255,255,.06)] shadow-[0_20px_40px_rgba(0,0,0,.65)] ${cardLayout[card.className] ?? ''}`}
					role="img"
					aria-label={card.label}
					key={card.className}
				>
					<span className="image-label absolute left-3 top-3 z-[2] rounded border border-[rgba(255,255,255,.16)] bg-[rgba(0,0,0,.48)] px-[7px] py-[5px] text-[8px] tracking-[.14em] text-[rgba(235,235,235,.64)] opacity-70 project-two:text-[#333] project-two:bg-[rgba(255,255,255,.7)]">
						{card.tag}
					</span>
					<span className="placeholder-caption absolute bottom-[9px] left-[11px] z-[3] text-[7px] tracking-[.07em] text-[#a6a6a6] project-two:text-[#333]">
						{card.label}
					</span>
				</div>
			))}
		</div>
	);
}
