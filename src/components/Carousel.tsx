'use client';

import * as React from 'react';
import bgShape from '@/assets/robots.png';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Button } from './ui/button';
import { ChevronRight, DiscordIcon, ChevronLeft, LogoIcon } from './icons';
import { Label } from './ui/label';
import { Badge } from './ui/badge';

const Headline = () => (
  <div className="flex flex-col gap-y-4">
    <Badge className="rounded-lg bg-[var(--purple-secondary)] px-3 py-2 text-[16px] text-[var(--purple-primary)]">
      <Label className="uppercase">Discover</Label>
    </Badge>
    <h1 className="!text-[24px] leading-none font-medium tracking-normal text-[var(--purple-primary)]">
      Explore the BitRobot Network
    </h1>
  </div>
);

export function MainCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => api?.scrollPrev()}
        className="absolute top-1/2 left-4 z-50 -translate-y-1/2"
        disabled={!api}
      >
        <ChevronLeft className="h-6 w-6 text-[var(--purple-primary)]" />
      </button>

      {/* RIGHT */}
      <button
        type="button"
        onClick={() => api?.scrollNext()}
        className="absolute top-1/2 right-4 z-50 -translate-y-1/2"
        disabled={!api}
      >
        <ChevronRight className="h-6 w-6 text-[var(--purple-primary)]" />
      </button>
      <Carousel setApi={setApi} className="relative w-full">
        <CarouselContent>
          <CarouselItem className="basis-full">
            <div className="mx-auto h-[246px] w-full max-w-[880px]">
              <FancyCardWithBg />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-full">
            <div className="mx-auto h-[246px] w-full max-w-[880px]">
              <FancyCardWithBg />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      {api && (
        <div className="mt-4 flex justify-center gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`m-0 h-[4px] w-[12px] rounded-full p-0 transition-all ${
                current - 1 === i ? 'bg-[var(--purple-primary)]' : 'bg-[var(--gray-2)]'
              } `}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export const FancyCardWithBg = () => {
  return (
    <Card className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[#EEECFE] bg-[#FEFEFE] shadow-[0_2px_8px_0_rgba(0,0,0,0.07)]">
      <img
        src={bgShape}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10 scale-150 select-none"
      />

      <CardContent className="relative z-10 flex h-full flex-row-reverse justify-between">
        <div className="self-start">
          <Badge className="flex h-8 items-center gap-2 rounded-lg bg-[var(--gold-100)] px-4 py-2 shadow-[0px_1px_8px_0px_#0000001A]">
            <LogoIcon className="h-4 w-4 text-[var(--gold-primary)]" />
            <Label className="text-base text-[var(--gold-primary)] uppercase">
              Earn 20 pts
            </Label>
          </Badge>
        </div>

        <div className="self-end flex flex-col gap-3">
          <DiscordIcon className="h-8 w-8 text-[var(--purple-primary)]" />
          <div>
            <h3 className="text-4 leading-none font-medium tracking-normal text-[var(--purple-primary)]">
              Discord
            </h3>
            <p className="!text-[14px] text-3 mt-2 leading-snug tracking-normal text-[var(--gray-2)] ">
              Stay involved, don&apos;t miss an update. Join the community.
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              variant={'outline'}
              className="gap-1 !text-[14px] !border border-1 border-solid !border-[var(--purple-primary)] !bg-[var(--purple-primary)] px-2 py-3 text-xs font-bold text-[#FEFEFE] uppercase"
            >
              Get Involved
            </Button>
            <Button
              variant={'outline'}
              className="gap-1 !text-[14px] !border border-1 border-solid !border-[var(--purple-primary)] !bg-transparent !px-2 !py-3 text-xs font-bold text-[var(--purple-primary)] uppercase"
            >
              Learn More
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const TextAndCarousel = () => {
  return (
    <div className="flex flex-col gap-6">
      <Headline />
      <MainCarousel />
    </div>
  );
};
