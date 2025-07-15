import { Home, Inbox, Calendar, Search, Settings, Sidebar } from 'lucide-react';
import { SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from './ui/sidebar';
import Link from 'next/link';


const items = [
  { title: "Home", icon: Home, url: '/' },
  { title: 'Inbox', icon: Inbox, url: '/inbox' },
  { title: 'Calendar', icon: Calendar, url: '/calendar' },
  { title: 'Search', icon: Search, url: '/search' },
  { title: 'Settings', icon: Settings, url: '/settings' },
];

const AppSidebar = () => {
  return (
    <Sidebar> 
      <SidebarHeader></SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
         </SidebarGroup>
        </SidebarContent>
          <SidebarFooter> </SidebarFooter>
    </Sidebar>
  );
};


export default AppSidebar;