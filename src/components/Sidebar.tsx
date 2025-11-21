import { Badge } from '@/components/ui/badge';
import { Label } from './ui/label';
import {
  LogoIcon,
  File03,
  LogoWord,
  File05,
  HelpCircle,
  InfoCircle,
  ShoppingIcon,
  GridDots,
  Share02,
  User02,
  TrendUp,
} from './icons';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { Card, CardAction, CardContent, CardHeader } from './ui/card';
import { useState } from 'react';

type SidebarItemId = 'dashboard' | 'contribute' | 'profile';

const SidebarItem = ({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center justify-between gap-3 !rounded-none !bg-transparent px-1 py-3 text-[20px] leading-none font-bold tracking-normal uppercase ${active ? 'text-[var(--purple-primary)]' : 'text-[var(--gray-2)]'} `}
    >
      <div className="flex gap-x-3">
        <div className="shrink-0">{icon}</div>
        <div>{label}</div>
      </div>
      {active && (
        <div className="ml-auto h-[10px] w-[10px] rounded-full bg-[#00C33A] shadow-[0_0_5px_4px_#00C33A33]" />
      )}
    </Button>
  );
};

export const Sidebar = () => {
  const [active, setActive] = useState<SidebarItemId>('dashboard');

  return (
    <>
      <div className="h-[66px] w-full gap-2 pt-6 pr-6 pb-2 pl-6 text-[var(--purple-primary)]">
        <div className="flex gap-[4px]">
          <div className="flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-[#EEECFE] shadow-[0_2px_8px_0_#00000012]">
            <LogoIcon className="h-4 w-4" />
          </div>
          <div className="flex h-[34px] w-[110px] items-center justify-center rounded-lg border border-[#EEECFE] px-3 shadow-[0_2px_8px_0_#00000012]">
            <LogoWord />
          </div>
        </div>
      </div>

      <div className="mt-4 flex w-full flex-col gap-2 ">
        <SidebarItem
          icon={<File03 className="h-5 w-5" />}
          label="Dashboard"
          active={active === 'dashboard'}
          onClick={() => setActive('dashboard')}
        />
        <Separator />

        <SidebarItem
          icon={<GridDots className="h-5 w-5" />}
          label="Contribute"
          active={active === 'contribute'}
          onClick={() => setActive('contribute')}
        />
        <Separator />

        <SidebarItem
          icon={<User02 className="h-5 w-5" />}
          label="Profile"
          active={active === 'profile'}
          onClick={() => setActive('profile')}
        />
        <Separator />
      </div>

      <div className="flex h-full w-full flex-col gap-4 mt-40">
        <Badge className="rounded-lg bg-[var(--purple-secondary)] px-3 py-2 text-base text-[var(--purple-primary)]">
          <Label className="uppercase">Resources</Label>
        </Badge>

        <div className="w-full">
          {/* Help */}
          <Button
            variant="ghost"
            className="group flex h-[44px] w-full items-center !rounded-none border-none !bg-transparent px-1 text-[var(--gray-2)] hover:text-[var(--purple-primary)]"
          >
            <HelpCircle className="h-5 w-5" />
            <div className="flex-1 text-left align-middle text-[16px] leading-none font-bold uppercase">
              Help
            </div>
            <div className="relative h-6 w-6">
              <TrendUp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out group-hover:top-0 group-hover:left-full group-hover:-translate-x-full group-hover:-translate-y-0" />
            </div>
          </Button>
          <Separator />

          {/* Docs */}
          <Button
            variant="ghost"
            className="group flex h-[44px] w-full items-center !rounded-none border-none !bg-transparent px-1 text-[var(--gray-2)] hover:text-[var(--purple-primary)]"
          >
            <File05 className="h-5 w-5" />
            <div className="flex-1 text-left align-middle text-[16px] leading-none font-bold uppercase">
              Docs
            </div>
            <div className="relative h-6 w-6">
              <TrendUp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out group-hover:top-0 group-hover:left-full group-hover:-translate-x-full group-hover:-translate-y-0" />
            </div>
          </Button>
          <Separator />

          {/* Shop */}
          <Button
            variant="ghost"
            className="group flex h-[44px] w-full items-center !rounded-none border-none !bg-transparent px-1 text-[var(--gray-2)] hover:text-[var(--purple-primary)]"
          >
            <InfoCircle className="h-5 w-5" />
            <div className="flex-1 text-left align-middle text-[16px] leading-none font-bold uppercase">
              Shop
            </div>
            <div className="relative h-6 w-6">
              <TrendUp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out group-hover:top-0 group-hover:left-full group-hover:-translate-x-full group-hover:-translate-y-0" />
            </div>
          </Button>
          <Separator />

          {/* About */}
          <Button
            variant="ghost"
            className="group flex h-[44px] w-full items-center !rounded-none border-none !bg-transparent px-1 text-[var(--gray-2)] hover:text-[var(--purple-primary)]"
          >
            <InfoCircle className="h-5 w-5" />
            <div className="flex-1 text-left align-middle text-[16px] leading-none font-bold uppercase">
              About
            </div>
            <div className="relative h-6 w-6">
              <TrendUp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out group-hover:top-0 group-hover:left-full group-hover:-translate-x-full group-hover:-translate-y-1" />
            </div>
          </Button>
          <Separator />
        </div>

        <Card className="flex w-full flex-col gap-4 rounded-2xl bg-[var(--gray-fill)] p-4 shadow-[0_1px_8px_0_rgba(0,0,0,0.1)]">
          <CardHeader className="flex items-center justify-between p-0">
            <Badge className="flex h-8 items-center gap-2 rounded-lg bg-[var(--gold-100)] px-4 py-2 shadow-[0px_1px_8px_0px_#0000001A]">
              <LogoIcon className="h-4 w-4 text-[var(--gold-primary)]" />
              <Label className="text-base text-[var(--gold-primary)] uppercase">
                Earn pts
              </Label>
            </Badge>
            <InfoCircle className="text-muted-foreground h-5 w-5" />
          </CardHeader>

          <CardContent className="flex flex-col gap-1.5 p-0">
            <div className="flex items-end">
              <p className="font-[Aeonik] text-[32px] leading-none font-medium tracking-[-0.01em] text-[var(--purple-primary)]">
                12{' '}
                <span className="align-baseline text-base leading-none font-medium tracking-[-0.01em]">
                  referrals
                </span>
              </p>
            </div>

            <label className="text-xs text-[var(--gray-2)]">
              Refer Friends to earn more
            </label>

            <CardAction className="mt-2">
              <Button
                variant={'outline'}
                className="gap-1 !border border-1 border-solid !border-[var(--purple-primary)] !bg-transparent px-2 py-3 text-xs font-bold text-[var(--purple-primary)] uppercase"
              >
                Share Link <Share02 className="h-4 w-4" />
              </Button>
            </CardAction>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
