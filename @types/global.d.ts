import type { ComponentType } from 'react';

declare global {
	type Project = {
		label: string;
		className: string;
		tag: string;
	};

	type LinkItem = {
		label: string;
		href: string;
		icon: ComponentType<{ size?: number }>;
	};
}

export {};
