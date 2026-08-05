import { Home, User, FolderGit2, Award, Briefcase, Mail, ArrowUp, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FloatingNav() {
	const navItems = [
		{ icon: <Home className="h-[18px] w-[18px]" />, active: true },
		{ icon: <User className="h-[18px] w-[18px]" /> },
		{ icon: <FolderGit2 className="h-[18px] w-[18px]" /> },
		{ icon: <Briefcase className="h-[18px] w-[18px]" /> },
		{ icon: <Award className="h-[18px] w-[18px]" /> },
		{ icon: <Mail className="h-[18px] w-[18px]" /> },
	];

	return (
		<div className="flex flex-col items-center gap-6 rounded-full border border-[#27272A] bg-[#0A0A0A]/60 px-2 py-4 backdrop-blur-md">
			<Button
				variant="ghost"
				size="icon"
				className="rounded-full text-yellow-500/80 hover:bg-[#18181B]"
			>
				<Sun className="h-[18px] w-[18px]" />
			</Button>
			<div className="h-[1px] w-6 bg-[#27272A]" />
			<div className="flex flex-col gap-3">
				{navItems.map((item, index) => (
					<Button
						key={index}
						variant="ghost"
						size="icon"
						className={`rounded-full hover:bg-[#18181B] ${item.active ? 'bg-[#18181B] text-[#10B981] hover:text-[#10B981]' : 'text-[#71717A] hover:text-[#E4E4E7]'}`}
					>
						{item.icon}
					</Button>
				))}
			</div>
			<div className="h-[1px] w-6 bg-[#27272A]" />
			<Button
				variant="ghost"
				size="icon"
				className="rounded-full text-[#71717A] hover:text-[#E4E4E7] hover:bg-[#18181B]"
			>
				<ArrowUp className="h-[18px] w-[18px]" />
			</Button>
		</div>
	);
}
