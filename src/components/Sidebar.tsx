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
import { Separator } from '@radix-ui/react-select';
import { Button } from './ui/button';
import { Card, CardAction, CardContent, CardHeader } from './ui/card';
export const Sidebar = () => {
  return (
    <>
      <div className="h-[66px] w-full gap-2 pt-6 pr-6 pb-2 pl-6">
        <div className="flex gap-[4px]">
          <div className="flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-[#EEECFE] shadow-[0_2px_8px_0_#00000012]">
            <LogoIcon />
          </div>
          <div className="flex h-[34px] w-[110px] items-center justify-center rounded-lg border border-[#EEECFE] shadow-[0_2px_8px_0_#00000012]">
            <LogoWord />
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex items-center justify-start uppercase">
          <div>
            <File03 />
          </div>
          <div>Dashboard</div>
        </div>
        <Separator />
        <div className="flex items-center justify-start uppercase">
          <div>
            <GridDots />
          </div>
          <div>Contribute</div>
        </div>
        <Separator />
        <div className="flex items-center justify-start uppercase">
          <div>
            <User02 />
          </div>
          <div>Profile</div>
        </div>
      </div>

      <div className="w-full h-full flex flex-col justify-end">
        <Badge>
          <Label className="uppercase">Resources</Label>
        </Badge>

        <div className="w-full justify-center">
          <Button
            variant="ghost"
            className="group r-0 flex h-[44px] w-full items-center !rounded-none border-none"
          >
            <div>
              <InfoCircle />
            </div>
            <div className="flex-1 text-left">Help</div>
            <div className="relative h-6 w-6">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out group-hover:top-0 group-hover:left-full group-hover:-translate-x-full group-hover:-translate-y-0">
                <TrendUp />
              </div>
            </div>
          </Button>
          <Button
            variant="ghost"
            className="group r-0 flex h-[44px] w-full items-center !rounded-none border-none"
          >
            <div>
              <File05 />
            </div>
            <div className="flex-1 text-left">Docs</div>
            <div className="relative h-6 w-6">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out group-hover:top-0 group-hover:left-full group-hover:-translate-x-full group-hover:-translate-y-0">
                <TrendUp />
              </div>
            </div>
          </Button>
          <Button
            variant="ghost"
            className="group r-0 flex h-[44px] w-full items-center !rounded-none border-none"
          >
            <div>
              <InfoCircle />
            </div>
            <div className="flex-1 text-left">Shop</div>
            <div className="relative h-6 w-6">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out group-hover:top-0 group-hover:left-full group-hover:-translate-x-full group-hover:-translate-y-0">
                <TrendUp />
              </div>
            </div>
          </Button>
          <Button
            variant="ghost"
            className="group r-0 flex h-[44px] w-full items-center !rounded-none border-none"
          >
            <div>
              <InfoCircle />
            </div>
            <div className="flex-1 text-left">About</div>
            <div className="relative h-6 w-6">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out group-hover:top-0 group-hover:left-full group-hover:-translate-x-full group-hover:-translate-y-0">
                <TrendUp />
              </div>
            </div>
          </Button>
        </div>

        <Card className="w-full">
          <CardHeader className="flex justify-between">
            <Badge>
              <LogoIcon /> <Label>Earn Points</Label>
            </Badge>
            <InfoCircle />
          </CardHeader>

          <CardContent>
            <p>12 referrals</p>
            <label>Refer Freinds to earn more</label>
            <CardAction>
              <Button variant="outline" className="uppercase">
                Share Link <Share02 />
              </Button>
            </CardAction>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
