'use client';

import { Sparkle } from 'lucide-react';
import { SectionBadge } from '../atom/SectionBadge';

export function Testimonials() {
    return (
        <div id="about" className="relative p-10">
            <div className="pt-18">
                <SectionBadge
                    label="Testimonials"
                    icon={Sparkle}
                    iconClassName="text-[#00de51]"
                />

                
            </div>
        </div>
    );
}
