import { BrainIcon } from "../icons/BrainIcon"
import { LinkIcon } from "../icons/LinkIcon"
import { NoteIcon } from "../icons/NoteIcon"
import { NotionIcon } from "../icons/NotionIcon"
import { TwitterIcon } from "../icons/TwitterIcon"
import { YouTubeIcon } from "../icons/YoutubeIcon"
import { SidebarContent } from "./SidebarItem"



export const Sidebar = () => {
    return (
        <div className="hidden lg:block sm:h-screen sm:w-80  border-r-2 border-slate-300">
            <div className="flex items-center justify-center mt-5 mb-10">
                <BrainIcon size="xl" />
                <h1 className="text-4xl font-semibold ml-3">ByteBrain</h1>
            </div>

            <SidebarContent icon={<TwitterIcon size="lg" />} text="Tweets" />
            <SidebarContent icon={<YouTubeIcon size="lg" />} text="Videos" />
            <SidebarContent icon={<NoteIcon size="lg" />} text="Document" />
            <SidebarContent icon={<LinkIcon size="lg" />} text="Links" />
            <SidebarContent icon={<NotionIcon size="lg" />} text="Notion" />
        </div>
    )
}