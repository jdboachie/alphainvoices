import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { bricolage_grotesque } from './ui/fonts';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-4">
      <div className="flex shrink-0 items-center justify-center rounded-lg bg-blue-500 p-4">
        <AcmeLogo center />
      </div>
      <div className="mt-4 md:p-0 py-10 rounded-lg md:bg-gray-50 md:dark:bg-gray-800 h-full flex">
        <div className="flex flex-col justify-center w-full items-center gap-6 px-6 py-10 md:px-20">
          <p className={`text-2xl md:w-2/3 text-black dark:text-gray-50 md:text-5xl md:leading-normal`}>
            <strong className={`md:p-10 p-2 ${bricolage_grotesque.className}`}>Welcome to Alpha Invoices</strong>
            <p className="text-sm py-5 md:px-10">
              When you have some text, how can you choose a typeface? The aim of this Google Fonts Knowledge module is to show that there are many considerations that can improve our type choices.
            </p>
          </p>
          <div className='flex flex-col md:flex-row p-5 gap-6 max-sm:text-xs'>
            {/* <Link
              href="/login"
              className="cursor-not-allowed flex items-center gap-5 self-start rounded-lg bg-zinc-500 px-6 py-3 text-sm font-medium shadow-xl text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link> */}
            <Link
              href="/dashboard"
              className=" flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium shadow-xl text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Got to dashboard</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>

          </div>
        </div>
      </div>
    </main>
  );
}
