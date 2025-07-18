import type { ReactElement } from "react";

interface SidebarContentProps {
    icon?: ReactElement;
    text?: string
}

export const SidebarContent = ({ icon, text }: SidebarContentProps) => {
    return <div className="ml-10">

        <div className="flex items-center gap-7 mb-8">
            {icon}
            <span>
                {text}
            </span>
        </div>

    </div>
}