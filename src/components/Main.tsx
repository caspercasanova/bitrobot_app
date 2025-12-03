import { TextAndCarousel } from './Carousel';
import { Earnings } from './Earnings';
import { Leaderboard } from './Leaderboard';

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from './ui/select';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Av = () => (
  <Avatar className="h-[20px] w-[20px]">
    <AvatarImage src="https://github.com/caspercasanova.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
);

const Username = () => {
  return (
    <Select defaultValue='Username 1'>
      <SelectTrigger className="w-[158px] gap-3 rounded-lg !border !border-[#EEECFE] !bg-[#FEFEFE] px-2 py-1 shadow-[0_2px_8px_0_rgba(0,0,0,0.07)]">
        <SelectValue

          placeholder="Select User"
          className="!text-[12px] leading-none font-medium tracking-normal"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="!text-[12px] leading-none font-medium tracking-normal">
          <SelectLabel className="!text-[12px]">Username</SelectLabel>
          <SelectItem value="Username 1">
            <Av />
            <label className="!text-[12px]">Username 1</label>
          </SelectItem>
          <SelectItem value="Username 2">
            <Av />
            <label className="!text-[12px]">Username 2</label>
          </SelectItem>
          <SelectItem value="Username 3">
            <Av />
            <label className="!text-[12px]">Username 3</label>
          </SelectItem>
          <SelectItem value="Username 4">
            <Av />
            <label className="!text-[12px]">Username 4</label>
          </SelectItem>
          <SelectItem value="Username 5">
            <Av />
            <label className="!text-[12px]">Username 5</label>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export const Main = () => {
  return (
    <main className="flex h-full w-full flex-col px-6 pt-[24px]">
      <div className="flex w-full items-center justify-end">
        <Username />
      </div>
      <div className="flex flex-col gap-8">
        <TextAndCarousel />
        <Earnings />
        <Leaderboard />
      </div>
    </main>
  );
};
