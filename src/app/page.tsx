import { About } from '@/components/sections/About';
import { Hero } from '@/components/sections/Hero';
import { ProfileCard } from '@/components/organisms/ProfileCard';
import { SideRail } from '@/components/organisms/SideRail';
import { WorkHighLights } from '@/components/sections/WorkHighLights';
import { Services } from '@/components/sections/Services';
import { TechStack } from '@/components/sections/TechStack';

export default function Home() {
	return (
		<main className="relative min-h-screen w-full pb-18">
			<div className="fixed left-0 top-0 z-40 h-svh w-[min(40vw,520px)] p-5 py-7.5 max-[1200px]:w-[42vw] max-[760px]:static max-[760px]:h-150 max-[760px]:w-full max-[760px]:p-0 max-[760px]:mb-6">
				<ProfileCard />
			</div>

			<div className="fixed top-13 right-8 z-10 text-end text-sm font-medium text-[#FFFFFF8F] max-[760px]:hidden">
				<p>Sun, Nov 15</p>
				<p>23:47</p>
			</div>

			<SideRail />

			<div className="ml-[min(40vw,520px)] px-10 pr-24 max-[1200px]:ml-[42vw] max-[760px]:ml-0 max-[760px]:px-4 max-[760px]:pr-4">
				<div className="mx-auto w-full max-w-177">
					<Hero />
					<About />
                    <WorkHighLights />
                    <Services />
                    <TechStack />
				</div>
			</div>
		</main>
	);
}
