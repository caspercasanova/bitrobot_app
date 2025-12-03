import { Main } from './Main';
import { Sidebar } from './Sidebar';


export const Dashboard = () => {
  return (
    <div className="grid min-h-screen w-screen max-w-[1280px] grid-cols-[264px_1fr]">
      <aside className="flex h-full flex-col border-r pt-2 pr-2 pb-10 pl-2">
        <Sidebar />
      </aside>

      <div className="flex h-full w-full flex-col">
        <Main />
      </div>
    </div>
  );
};
