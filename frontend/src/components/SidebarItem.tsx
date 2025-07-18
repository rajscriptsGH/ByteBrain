import type { ReactElement } from "react";

interface SidebarContentProps {
    icon?: ReactElement;
    text?: string
}

export const SidebarContent = ({ icon, text }: SidebarContentProps) => {
    return <div className="ml-10">

        <div className="flex items-center gap-7 mb-5 cursor-pointer hover:bg-slate-400 p-3 rounded-xl transition-all 0.7s ease-out">
            {icon}
            <span>
                {text}
            </span>
        </div>

    </div>
}