"use client";

import { Drawer as VaulDrawer } from "vaul";

const Drawer = VaulDrawer.Root;
const DrawerTrigger = VaulDrawer.Trigger;
const DrawerPortal = VaulDrawer.Portal;
const DrawerClose = VaulDrawer.Close;

function DrawerOverlay({ className = "", ...props }: React.ComponentProps<typeof VaulDrawer.Overlay>) {
  return (
    <VaulDrawer.Overlay
      className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm ${className}`}
      {...props}
    />
  );
}

function DrawerContent({ className = "", children, ...props }: React.ComponentProps<typeof VaulDrawer.Content>) {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <VaulDrawer.Content
        className={`fixed inset-x-0 bottom-0 z-[60] flex flex-col rounded-t-2xl border border-[var(--theme-hairline)] bg-surface pb-safe ${className}`}
        {...props}
      >
        {/* Drag handle */}
        <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-white/20 shrink-0" />
        {children}
      </VaulDrawer.Content>
    </DrawerPortal>
  );
}

function DrawerHeader({ className = "", ...props }: React.ComponentProps<"div">) {
  return <div className={`px-5 pt-4 pb-2 ${className}`} {...props} />;
}

function DrawerTitle({ className = "", ...props }: React.ComponentProps<typeof VaulDrawer.Title>) {
  return (
    <VaulDrawer.Title
      className={`text-[10px] font-bold uppercase tracking-[0.22em] text-white/45 ${className}`}
      {...props}
    />
  );
}

export {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
};
