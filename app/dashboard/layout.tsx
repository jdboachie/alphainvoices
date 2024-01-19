import SideNav from '@/app/ui/dashboard/sidenav';
import ScrollableSection from '../ui/scrollable-section';
ScrollableSection

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <ScrollableSection>
        <div className="flex-grow p-6 md:p-12">
          {children}
        </div>
      </ScrollableSection>
    </div>
  );
}