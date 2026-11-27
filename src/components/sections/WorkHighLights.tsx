'use client';

import { Sparkle } from 'lucide-react';
import { SectionBadge } from '../atom/SectionBadge';
import Image from 'next/image';

export function WorkHighLights() {
	return (
		<div id="about" className="relative p-10">
			<div className="pt-18">
				<SectionBadge
					label="Work HighLights"
					icon={Sparkle}
					iconClassName="text-[#00de51]"
				/>

				<div className="grid">
					<div className="pb-8">
						{/* Gradient border wrapper — padding on ALL sides */}
						<div className="rounded-[24px] bg-linear-to-b from-white/8 to-white/4 p-1 shadow-[0_0.5px_0.5px_rgba(0,0,0,0.06),0_1px_1px_-0.5px_rgba(0,0,0,0.06),0_3px_3px_-1.5px_rgba(0,0,0,0.06),0_5px_5px_-2.5px_rgba(0,0,0,0.12),inset_0_0.5px_0.5px_rgba(255,255,255,0.08),inset_0_1px_3px_rgba(255,255,255,0.03),inset_0_-4px_12px_rgba(255,255,255,0.04)]">
							{/* Inner image frame — radius matches outer minus padding */}
							<div className="relative aspect-16/10 w-full overflow-hidden rounded-[20px] bg-[#0f0f0f]">
								<Image
									src="/assets/images/work-2.webp"
									alt=""
									fill
									sizes="(max-width: 760px) 100vw, 708px"
									className="object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
// 'use client';

// import { Sparkle } from 'lucide-react';
// import { SectionBadge } from '../atom/SectionBadge';
// import Image from 'next/image';
// export function WorkHighLights() {
// 	return (
// 		<div id="about" className="relative p-10">
// 			<div className="pt-18">
// 				<SectionBadge
// 					label="Work HighLights"
// 					icon={Sparkle}
// 					iconClassName="text-[#00de51]"
// 				/>

// 				<div className="grid">
// 					<div className="pb-8">
// 						<div className="px-1 rounded-[24px] bg-linear-to-b from-white/8 to-white/4 shadow-[0_0.5px_0.5px_rgba(0,0,0,0.06),0_1px_1px_-0.5px_rgba(0,0,0,0.06),0_3px_3px_-1.5px_rgba(0,0,0,0.06),0_5px_5px_-2.5px_rgba(0,0,0,0.12),inset_0_0.5px_0.5px_rgba(255,255,255,0.08),inset_0_1px_3px_rgba(255,255,255,0.03),inset_0_-4px_12px_rgba(255,255,255,0.04)]">
// 							<div className="rounded-[20px] overflow-hidden">
// 								<Image
// 									src="/assets/images/work-2.webp"
// 									alt=""
// 									className="object-cover"
// 									width={1000}
// 									height={1000}
// 								/>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
