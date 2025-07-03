import * as React from 'react';
import { cn } from '@/lib/utils';
import { Drawer as DrawerPrimitive } from 'vaul'; // Confirm the correct package name (e.g., "vaul" or "@radix-ui/react-dialog")

/**
 * Core Drawer component with optional background scaling.
 * Wraps the underlying primitive with additional props if needed.
 */
const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);
Drawer.displayName = 'Drawer';

/** Trigger button for opening the drawer */
const DrawerTrigger = DrawerPrimitive.Trigger;

/** Portal component for rendering overlay and content outside DOM hierarchy */
const DrawerPortal = DrawerPrimitive.Portal;

/**
 * Overlay component: semi-transparent backdrop covering the viewport when drawer is open.
 * Uses React.forwardRef for ref forwarding.
 */
const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn('fixed inset-0 z-50 bg-black/80')}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

/**
 * Content container: the main panel of the drawer.
 * Includes optional styling and wrapping with portal overlay.
 */
const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        'fixed inset-x-0 bottom-0 z-50 mt-24 flex flex-col rounded-t-[10px] border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950',
        'max-h-[90vh] overflow-y-auto',
        className
      )}
      {...props}
    >
      {/* Visual indicator for drawer handle / grab area */}
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-zinc-100 dark:bg-zinc-800" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = 'DrawerContent';

/**
 * Header section of the drawer, typically contains title or heading.
 */
const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('grid gap-1.5 p-4 text-center sm:text-left', className)} {...props} />
);
DrawerHeader.displayName = 'DrawerHeader';

/**
 * Footer section for actions or secondary content, aligned at the bottom.
 */
const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mt-auto flex flex-col gap-2 p-4')} {...props} />
);
DrawerFooter.displayName = 'DrawerFooter';

/**
 * Title element for drawer, supports styling and ref forwarding.
 */
const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold leading-none tracking-tight', className)}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

/**
 * Description or subtitle element, for additional details in the drawer.
 */
const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn('text-sm text-zinc-500 dark:text-zinc-400', className)}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

/** Export all components for use in the application */
export {
  Drawer,
  DrawerTrigger,
  DrawerPortal,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
