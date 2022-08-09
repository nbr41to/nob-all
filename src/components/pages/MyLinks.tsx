import type { FC } from 'react';

import { CloseButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/router';
import { BsFillPersonLinesFill, BsBackspaceFill } from 'react-icons/bs';
import { FaStickyNote, FaBlog, FaQrcode } from 'react-icons/fa';
import {
  SiYoutube,
  SiGithub,
  SiTwitter,
  SiZenn,
  SiTiktok,
} from 'react-icons/si';

import { TopLinkButton } from '../ui/TopLinkButton';

export const MyLinks: FC = () => {
  const router = useRouter();
  const [visibleQrCode, visibleQrCodeHandlers] = useDisclosure(false);

  return (
    <>
      <div className="fixed top-0 flex h-full w-full flex-col items-center justify-center gap-5 bg-teal-200">
        <h2 className="text-center text-2xl font-bold text-white drop-shadow-xl">
          nob&#039;s links
        </h2>
        <div className="mx-auto grid max-w-[600px] grid-cols-2 gap-6 px-10">
          <TopLinkButton
            label="Profile"
            icon={<BsFillPersonLinesFill size={36} />}
            url=""
          />
          <TopLinkButton label="Blog" icon={<FaBlog size={36} />} url="" />
          <TopLinkButton
            label="GitHub"
            icon={<SiGithub size={36} />}
            url="https://github.com/nbr41to"
          />
          <TopLinkButton
            label="Zenn"
            icon={<SiZenn size={36} />}
            url="https://zenn.dev/nbr41to"
          />
          <TopLinkButton
            label="Twitter"
            icon={<SiTwitter size={36} />}
            url="https://twitter.com/Knob_nbr41to"
          />
          <TopLinkButton
            label="YouTube"
            icon={<SiYoutube size={36} />}
            url="https://www.youtube.com/channel/UCPcjWvYIfvqGPP4x30kEkMA"
          />
          <TopLinkButton label="TikTok" icon={<SiTiktok size={36} />} url="" />
          <TopLinkButton
            label="note"
            icon={<FaStickyNote className="rotate-180" size={36} />}
            url="https://note.com/nbr41"
          />
        </div>

        <div className="flex gap-12">
          <button
            className="neumorphism-link active:neumorphism-link-active hover:neumorphism-link-hover rounded-xl border-none bg-teal-200 py-4 px-6 text-white"
            type="button"
            onClick={router.back}
          >
            <BsBackspaceFill size={40} />
          </button>
          <button
            className="neumorphism-link active:neumorphism-link-active hover:neumorphism-link-hover rounded-xl border-none bg-teal-200 py-4 px-6 text-white"
            type="button"
            onClick={visibleQrCodeHandlers.open}
          >
            <FaQrcode className="" size={40} />
          </button>
        </div>
      </div>

      {visibleQrCode && (
        <div className="fixed top-0 flex h-full w-full flex-col items-center justify-center gap-5 bg-teal-200">
          <CloseButton
            className="absolute top-3 right-3"
            size="xl"
            iconSize={28}
            radius="xl"
            variant="outline"
            onClick={visibleQrCodeHandlers.close}
          />
          <h2 className="text-center text-2xl font-bold">nob&#039;s links</h2>
          {/* <img src="" alt="" /> */}
        </div>
      )}
    </>
  );
};
