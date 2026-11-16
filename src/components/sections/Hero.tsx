'use client';

import { ProfileCard } from '@/components/organisms/ProfileCard';
import { SideRail } from '@/components/organisms/SideRail';
import { WorkShowcase } from '@/components/organisms/WorkShowcase';

export function Hero() {
	return (
		<main
			className="portfolio relative isolate min-h-svh overflow-hidden max-[760px]:min-h-svh max-[760px]:overflow-auto max-[760px]:p-4"
			id="home"
		>
			<div
				className="ambient-glow pointer-events-none absolute left-[29%] top-[34%] h-[35rem] w-[35rem] rounded-full"
				aria-hidden="true"
			/>

			{/* two-column grid: profile card | hero content */}
			<div className="relative z-[1] grid h-svh grid-cols-[minmax(360px,32vw)_1fr] gap-10 px-5 py-[30px] max-[1200px]:grid-cols-[minmax(320px,34vw)_1fr] max-[1200px]:gap-6 max-[760px]:flex max-[760px]:h-auto max-[760px]:flex-col max-[760px]:gap-6 max-[760px]:px-0 max-[760px]:py-0">
				<ProfileCard />

				<section
					className="relative flex flex-col justify-center pr-[9.6%] pt-[100px] max-[1200px]:pr-[10%] max-[760px]:m-0 max-[760px]:min-h-[760px] max-[760px]:px-[5px] max-[760px]:pb-10 max-[760px]:pt-16"
					id="about"
					aria-label="Introduction"
				>
					<div className="absolute right-[2.3%] top-[67px] text-right text-[17px] font-semibold leading-[1.45] text-[#858585] max-[760px]:right-[5px] max-[760px]:top-[15px] max-[760px]:text-xs">
						Sun, Nov 15
						<br />
						23:47
					</div>
					<h1 className="m-0 text-[clamp(50px,3.75vw,72px)] font-medium leading-[1.105] tracking-[-3.2px] text-[#c4c4c4] max-[1200px]:text-[clamp(44px,5.1vw,62px)] max-[760px]:text-[clamp(39px,10vw,59px)] max-[760px]:leading-[1.08] max-[760px]:tracking-[-2.2px]">
						Start building
						<br />
						websites &amp; brands
						<br />
						people remember
					</h1>
					<span
						className="absolute left-[44%] top-[38.4%] h-1.5 w-1.5 rounded-full bg-[#ff1212] max-[760px]:hidden"
						aria-hidden="true"
					/>
					<div
						className="relative mt-[45px] grid grid-cols-[minmax(500px,1fr)_220px] items-center gap-[42px] max-[1200px]:grid-cols-[minmax(370px,1fr)_150px] max-[1200px]:gap-[15px] max-[760px]:mt-[45px] max-[760px]:flex max-[760px]:h-auto max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-[25px]"
						id="work"
					>
						<WorkShowcase />
						<div
							className="flex flex-col items-start gap-8 max-[760px]:flex-row max-[760px]:justify-between max-[760px]:gap-5 max-[760px]:px-2"
							aria-label="Experience and awards"
						>
							<div className="flex flex-col gap-3">
								<strong className="text-[68px] font-normal leading-none tracking-[-3px] text-[#c4c4c4] max-[1200px]:text-[54px] max-[760px]:text-[47px]">
									10+
								</strong>
								<span className="text-[17px] font-semibold text-[#8e8e8e] max-[760px]:text-[13px]">
									Year of experience
								</span>
							</div>
							<div className="flex flex-col gap-3">
								<strong className="text-[68px] font-normal leading-none tracking-[-3px] text-[#c4c4c4] max-[1200px]:text-[54px] max-[760px]:text-[47px]">
									6x
								</strong>
								<span className="text-[17px] font-semibold text-[#8e8e8e] max-[760px]:text-[13px]">
									Industry Awards
								</span>
							</div>
						</div>
					</div>
				</section>
			</div>

			<SideRail />
			<span
				className="fixed right-0 top-0 h-[9%] w-[5px] bg-[#00d95b] max-[760px]:w-[3px]"
				aria-hidden="true"
			/>
			{/* TODO: build Services section */}
			<section className="sr-only" id="services">
				<h2>Services</h2>
			</section>
			{/* TODO: build Contact section */}
			<section className="sr-only" id="contact">
				<h2>Contact</h2>
			</section>
		</main>
	);
}
// 'use client';

// import { ProfileCard } from '@/components/organisms/ProfileCard';
// import { SideRail } from '@/components/organisms/SideRail';
// import { WorkShowcase } from '@/components/organisms/WorkShowcase';

// export function Hero() {
// 	return (
// 		<main
// 			className="portfolio relative isolate min-h-svh overflow-hidden max-[760px]:min-h-svh max-[760px]:overflow-auto max-[760px]:p-4"
// 			id="home"
// 		>
// 			<div
// 				className="ambient-aglow pointer-events-none absolute left-[29%] top-[34%] h-[35rem] w-[35rem] rounded-full"
// 				aria-hidden="true"
// 			/>
// 			<ProfileCard />
// 			<section
// 				className="relative ml-[41%] min-h-svh pr-[9.6%] pb-[35px] pt-[100px] max-[1200px]:ml-[40%] max-[1200px]:pr-[10%] max-[760px]:m-0 max-[760px]:min-h-[760px] max-[760px]:px-[5px] max-[760px]:pb-10 max-[760px]:pt-16"
// 				id="about"
// 				aria-label="Introduction"
// 			>
// 				<div className="absolute right-[2.3%] top-[67px] text-right text-[17px] font-semibold leading-[1.45] text-[#858585] max-[760px]:right-[5px] max-[760px]:top-[15px] max-[760px]:text-xs">
// 					Sun, Nov 15
// 					<br />
// 					23:47
// 				</div>
// 				<h1 className="m-0 text-[clamp(50px,3.75vw,72px)] font-medium leading-[1.105] tracking-[-3.2px] text-[#c4c4c4] max-[1200px]:text-[clamp(44px,5.1vw,62px)] max-[760px]:text-[clamp(39px,10vw,59px)] max-[760px]:leading-[1.08] max-[760px]:tracking-[-2.2px]">
// 					Start building
// 					<br />
// 					websites &amp; brands
// 					<br />
// 					people remember
// 				</h1>
// 				<span
// 					className="absolute left-[44%] top-[38.4%] h-1.5 w-1.5 rounded-full bg-[#ff1212] max-[760px]:hidden"
// 					aria-hidden="true"
// 				/>
// 				<div
// 					className="absolute left-0 right-[8.8%] top-[43%] grid h-[54%] grid-cols-[minmax(500px,1fr)_220px] items-center gap-[42px] max-[1200px]:right-[9%] max-[1200px]:grid-cols-[minmax(370px,1fr)_150px] max-[1200px]:gap-[15px] max-[760px]:relative max-[760px]:inset-auto max-[760px]:mt-[45px] max-[760px]:flex max-[760px]:h-auto max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-[25px]"
// 					id="work"
// 				>
// 					<WorkShowcase />
// 					<div
// 						className="flex flex-col items-start gap-8 max-[760px]:flex-row max-[760px]:justify-between max-[760px]:gap-5 max-[760px]:px-2"
// 						aria-label="Experience and awards"
// 					>
// 						<div className="flex flex-col gap-3">
// 							<strong className="text-[68px] font-normal leading-none tracking-[-3px] text-[#c4c4c4] max-[1200px]:text-[54px] max-[760px]:text-[47px]">
// 								10+
// 							</strong>
// 							<span className="text-[17px] font-semibold text-[#8e8e8e] max-[760px]:text-[13px]">
// 								Year of experience
// 							</span>
// 						</div>
// 						<div className="flex flex-col gap-3">
// 							<strong className="text-[68px] font-normal leading-none tracking-[-3px] text-[#c4c4c4] max-[1200px]:text-[54px] max-[760px]:text-[47px]">
// 								6x
// 							</strong>
// 							<span className="text-[17px] font-semibold text-[#8e8e8e] max-[760px]:text-[13px]">
// 								Industry Awards
// 							</span>
// 						</div>
// 					</div>
// 				</div>
// 			</section>
// 			<SideRail />
// 			<span
// 				className="fixed right-0 top-0 h-[9%] w-[5px] bg-[#00d95b] max-[760px]:w-[3px]"
// 				aria-hidden="true"
// 			/>
// 			{/* TODO: build Services section */}
// 			<section className="sr-only" id="services">
// 				<h2>Services</h2>
// 			</section>
// 			{/* TODO: build Contact section */}
// 			<section className="sr-only" id="contact">
// 				<h2>Contact</h2>
// 			</section>
// 		</main>
// 	);
// }
