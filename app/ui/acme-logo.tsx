import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { bricolage_grotesque } from '@/app/ui/fonts';

export default function AcmeLogo({center} : {center?: boolean}) {
  return (
    <div
      className={`${bricolage_grotesque.className} flex flex-col ${center? (`items-center`): (`items-start`)} leading-none text-white`}
    >
      <div className={`flex flex-col w-full ${ center? ('text-2xl items-center') : ('') }`}>
        <GlobeAltIcon className='h-14 w-12 rotate-[25deg]' />
        <p className="text-xl font-semibold">Love Economy Church</p>
      </div>
      <p className="text-sm text-zinc-200">Alpha</p>
    </div>
  );
}
