import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { ptSerifCaption } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${ptSerifCaption.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[35deg]" />
      <p className="text-4xl">Alpha</p>
    </div>
  );
}
