import { Sidebar } from "./Sidebar"

export const Dashboard = () => {
    return (
    <div className="w-screen h-screen grid grid-cols-[264px_1fr] gap-4">
        <aside className="h-[758px] flex flex-col items-stretch bg-gray-500">
            <Sidebar />
        </aside>
        <div className="rounded bg-gray-300 lg:col-span-2"></div>
    </div>
    )
}