'use client';

import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionBadgeProps {
	label: string;
	icon?: LucideIcon;
	className?: string;
	iconClassName?: string;
}

export function SectionBadge({ label, icon: Icon, className, iconClassName }: SectionBadgeProps) {
	return (
		<div
			className={cn(
				'inline-flex items-center gap-1 rounded-full bg-linear-to-b from-white/8 to-white/4 py-1.5 pr-3 pl-2 mb-8 text-sm font-medium uppercase tracking-[-0.005em]',
				className,
			)}
		>
			{Icon ? <Icon className={cn('size-3.5', iconClassName)} aria-hidden="true" /> : null}
			<span>{label}</span>
		</div>
	);
}
