import { Badge } from './ui/badge';
import { Label } from './ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const invoices = [
  {
    rank: '250',
    wallet: '0x92C3f7aB9c4E12F7eA51aB24cB8e761F4A44191C2',
    lifetime_earning: '1,250.00',
    this_epoch: '250.00',
    referrals: '12',
  },
  {
    rank: '1',
    wallet: '0x92C3f7aB9c4E12F7eA51aB24cB8e761F4A3d91C2',
    lifetime_earning: '1,250.00',
    this_epoch: '250.00',
    referrals: '12',
  },
  {
    rank: '2',
    wallet: '0x4aF0c92DeB7e3481b0a1B22A3D9f702f5cD1a8B7',
    lifetime_earning: '980.00',
    this_epoch: '120.00',
    referrals: '9',
  },
  {
    rank: '3',
    wallet: '0x7bE3a19D0f8cC12aAA43b9E1C2f67A9e82D4F5c1',
    lifetime_earning: '730.00',
    this_epoch: '90.00',
    referrals: '7',
  },
  {
    rank: '4',
    wallet: '0x1C7dE23F8A4b9cD2E5f0aAb14F93e21C9B7aE312',
    lifetime_earning: '520.00',
    this_epoch: '60.00',
    referrals: '4',
  },
  {
    rank: '5',
    wallet: '0xA3b9fC21D7E4c890F1b2E3C4A5D6B7C8E9F0a1B2',
    lifetime_earning: '310.00',
    this_epoch: '30.00',
    referrals: '2',
  },
  {
    rank: '6',
    wallet: '0xBc13F7eA21D4e9F2c0F7ab3E98d12A39B4Ef8a71',
    lifetime_earning: '280.00',
    this_epoch: '28.00',
    referrals: '2',
  },
  {
    rank: '7',
    wallet: '0xD4A91C23b8E41A7cF1b0D92Eef1A32B4Ce9F1134',
    lifetime_earning: '250.00',
    this_epoch: '20.00',
    referrals: '1',
  },
  {
    rank: '8',
    wallet: '0x8e12fA93Cd7Ab234B1c0F29Ee7B8C4d13F2b1c90',
    lifetime_earning: '190.00',
    this_epoch: '15.00',
    referrals: '1',
  },
  {
    rank: '9',
    wallet: '0xF29e41bD1A72cA3b9E88C12EdfbF7A3C19b4F612',
    lifetime_earning: '150.00',
    this_epoch: '10.00',
    referrals: '0',
  },
];

const shortenWallet = (wallet: string) => {
  if (!wallet) return '';
  if (wallet.length <= 8) return wallet; // too short to shorten
  return `${wallet.slice(0, 4)}...${wallet.slice(-4)}`;
};

const UserComponent = ({ wallet }: { wallet: string }) => {
  return (
    <a className="flex flex-row items-center gap-2 text-[var(--gray-2)]">
      <Avatar className="h-[20px] w-[20px]">
        <AvatarImage src="https://github.com/caspercasanova.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      {shortenWallet(wallet)}
    </a>
  );
};

export const Leaderboard = () => {
  return (
    <section className="flex flex-col gap-6">
      <Badge className="gap-10 rounded-lg bg-[var(--purple-secondary)] px-3 py-2 text-base text-[var(--purple-primary)]">
        <Label className="uppercase">Leaderboard</Label>
      </Badge>
      <Table className="text-[var(--gray-2)]">
        <TableHeader className="mb-3">
          <TableRow>
            <TableHead className="align-middle text-sm leading-none font-medium tracking-[-0.04em] text-[var(--gray-3)]">
              Rank
            </TableHead>
            <TableHead className="align-middle text-sm leading-none font-medium tracking-[-0.04em] text-[var(--gray-3)]">
              User
            </TableHead>
            <TableHead className="align-middle text-sm leading-none font-medium tracking-[-0.04em] text-[var(--gray-3)]">
              Lifetime Earning
            </TableHead>
            <TableHead className="align-middle text-sm leading-none font-medium tracking-[-0.04em] text-[var(--gray-3)]">
              This Epoch
            </TableHead>
            <TableHead className="align-middle text-sm leading-none font-medium tracking-[-0.04em] text-[var(--gray-3)]">
              Referrals
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((person, index) => (
            <TableRow
              key={person.wallet}
              className={`h-10 px-4 py-3 hover:bg-[#EEECFE] ${index === 0 ? 'bg-[var(--purple-secondary)] text-[var(--purple-primary)]' : ''} `}
            >
              <TableCell className="font-aeonik align-middle text-sm leading-none font-medium tracking-[-0.04em]">
                {person.rank}
              </TableCell>
              <TableCell className="font-aeonik align-middle text-sm leading-none font-medium tracking-[-0.04em]">
                <UserComponent wallet={person.wallet}></UserComponent>
              </TableCell>
              <TableCell className="font-aeonik align-middle text-sm leading-none font-medium tracking-[-0.04em]">
                {person.lifetime_earning}
              </TableCell>
              <TableCell className="font-aeonik align-middle text-sm leading-none font-medium tracking-[-0.04em]">
                {person.this_epoch}
              </TableCell>
              <TableCell className="font-aeonik align-middle text-sm leading-none font-medium tracking-[-0.04em]">
                {person.referrals}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};
