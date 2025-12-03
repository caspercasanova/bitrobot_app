import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import { ChevronRight, DifferentLogo } from './icons';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardAction, CardContent, CardHeader } from './ui/card';
import { Label } from './ui/label';
import { ChartContainer, type ChartConfig } from '@/components/ui/chart';

export const Earnings = () => {
  return (
    <section className="flex flex-col gap-6">
      <Badge className="gap-10 rounded-lg bg-[var(--purple-secondary)] px-3 py-2 text-[16px] text-[var(--purple-primary)]">
        <Label className="uppercase">Earnings</Label>
      </Badge>

      <div className="grid min-h-[356px] grid-cols-2 gap-4">
        <div className="grid grid-cols-2 grid-rows-3 gap-4">
          <div className="col-span-1 row-span-2">
            <Epoch />
          </div>

          {/* Card 2: col 2, rows 1–2 */}
          <div className="col-span-1 row-span-2">
            <Lifetime />
          </div>

          {/* Card 3: cols 1–2, row 3 */}
          <div className="col-span-2 row-span-1 row-start-3">
            <Bonus />
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-1 gap-4">
          <div className="h-full min-h-64">
            <History />
          </div>
        </div>
      </div>
    </section>
  );
};

const Epoch = () => {
  return (
    <Card className="flex h-full w-full flex-col gap-4 rounded-2xl bg-[var(--gray-fill)] px-4 pt-4 pb-6 shadow-[0_1px_8px_0_rgba(0,0,0,0.1)]">
      <CardHeader className="flex items-center justify-between p-0">
        <Label className="text-right !text-[14px] align-middle text-base leading-none font-bold tracking-normal text-[var(--purple-primary)] uppercase">
          Last Epoch
        </Label>

        <DifferentLogo className="size-6 h-6 w-6 text-[var(--gold-primary)]" />
      </CardHeader>

      <CardContent className="mt-auto flex flex-col gap-2 p-0">
        <div className="flex items-end gap-[6px]">
          <p className="font-[Aeonik] text-[32px] leading-none font-medium tracking-[-0.01em] text-[var(--purple-primary)]">
            234{' '}
            <span className="text-[16px] align-baseline text-base leading-none font-medium tracking-[-0.01em]">
              points
            </span>
          </p>
        </div>

        <CardAction className="mt-2">
          <Button
            variant="link"
            className="group !text-[14px] !hover:border-none gap-1 text-right align-middle text-sm leading-none font-medium tracking-[-0.04em] text-[var(--purple-primary)]"
          >
            Breakdown
            <ChevronRight className="h-[14px] w-[14px] transition-transform duration-150 ease-out group-hover:translate-x-1" />
          </Button>
        </CardAction>
      </CardContent>
    </Card>
  );
};

const Lifetime = () => {
  return (
    <Card className="flex h-full w-full flex-col gap-4 rounded-2xl bg-[var(--gray-fill)] px-4 pt-4 pb-6 shadow-[0_1px_8px_0_rgba(0,0,0,0.1)]">
      <CardHeader className="flex items-center justify-between p-0">
        <Label className="text-right !text-[14px]  align-middle text-base leading-none font-bold tracking-normal text-[var(--purple-primary)] uppercase">
          Lifetime
        </Label>

        <DifferentLogo className="size-6 h-6 w-6 text-[var(--gold-primary)]" />
      </CardHeader>

      <CardContent className="mt-auto flex flex-col gap-2 p-0">
        <div className="flex items-end gap-[6px]">
          <p className="font-[Aeonik] text-[32px] leading-none font-medium tracking-[-0.01em] text-[var(--purple-primary)]">
            1.3k{' '}
            <span className="text-[16px] align-baseline text-base leading-none font-medium tracking-[-0.01em]">
              points
            </span>
          </p>
        </div>

        <CardAction className="mt-2">
          <Button
            variant="link"
            className="group !text-[14px]  !hover:border-none gap-1 text-right align-middle text-sm leading-none font-medium tracking-[-0.04em] text-[var(--purple-primary)]"
          >
            Breakdown
            <ChevronRight className="h-[14px] w-[14px] transition-transform duration-150 ease-out group-hover:translate-x-1" />
          </Button>
        </CardAction>
      </CardContent>
    </Card>
  );
};

const Bonus = () => {
  return (
    <Card className="flex h-full w-full flex-col rounded-2xl bg-[var(--purple-secondary)] px-4 py-3">
      <CardContent className="flex h-full items-center justify-between gap-3 p-0">
        <div className="flex flex-col gap-1">
          <p className="align-middle font-[Aeonik] !text-[16px] leading-none font-medium tracking-normal text-[var(--purple-primary)]">
            Bonuses available!
          </p>
          <p className="align-middle font-[Aeonik] !text-[14px]  leading-none font-medium tracking-normal text-[var(--purple-primary)]">
            The more you participate, the more you earn!
          </p>
        </div>

        <CardAction className="self-center">
          <Button className="!text-[14px] gap-1 bg-[var(--purple-primary)] text-sm leading-none font-medium tracking-[-0.04em] text-[var(--white)] uppercase">
            See Opportunities
          </Button>
        </CardAction>
      </CardContent>
    </Card>
  );
};

const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
];
const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#2563eb',
  },
  mobile: {
    label: 'Mobile',
    color: '#60a5fa',
  },
} satisfies ChartConfig;

const History = () => {
  return (
    <Card className="flex h-full w-full flex-col gap-4 rounded-2xl bg-[var(--gray-fill)] px-4 pt-4 pb-6 shadow-[0_1px_8px_0_rgba(0,0,0,0.1)]">
      <CardHeader className="flex items-center justify-between p-0">
        <Label className="text-right align-middle text-base leading-none font-bold tracking-normal text-[var(--purple-primary)] uppercase">
          Earnings History
        </Label>
      </CardHeader>

      <CardContent className="mt-auto flex flex-col gap-2 p-0">
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
