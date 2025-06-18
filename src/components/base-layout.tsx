"use client";

import { Header } from "./header";
import { HomeIcon, Server, Monitor } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarMenu,
    SidebarMenuLink,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

export function BaseLayout({
    children,
    gutter,
}: {
    children: React.ReactNode;
    gutter?: boolean;
}) {
    return (
        <div className="flex flex-col w-full md:overflow-hidden">
            <Header />
            <div className="bg-sidebar flex flex-1 mt-12 md:mt-0 md:overflow-y-auto">
                <Sidebar collapsible="icon">
                    <SidebarContent data-scrollbar-custom="true">
                        <SidebarMenu className="p-2 pt-3">
                            <SidebarMenuItem>
                                <SidebarMenuLink tooltip="Home" href="/">
                                    <HomeIcon />
                                    <span>Home</span>
                                </SidebarMenuLink>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuLink
                                    tooltip="Server"
                                    href="/docs/server"
                                >
                                    <Server />
                                    <span>Server</span>
                                </SidebarMenuLink>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuLink
                                    tooltip="Client"
                                    href="/docs/client"
                                >
                                    <Monitor />
                                    <span>Client</span>
                                </SidebarMenuLink>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarContent>
                </Sidebar>
                <main
                    className="bg-background flex-1 flex flex-col md:border-t md:rounded-tl-xl md:border-l md:overflow-y-auto"
                    style={{ scrollbarGutter: gutter ? "stable" : "auto" }}
                >
                    {children}
                </main>
            </div>
        </div>
    );
}
