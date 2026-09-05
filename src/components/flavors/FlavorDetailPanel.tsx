import type { Flavor } from "@/types";
import { useIsMobile } from "@/hooks/use-mobile";
import { FlavorDetailBody } from "./FlavorDetailBody";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface Props {
  flavor: Flavor | null;
  onClose: () => void;
}

export function FlavorDetailPanel({ flavor, onClose }: Props) {
  const isMobile = useIsMobile();
  const open = flavor !== null;
  const handleOpenChange = (next: boolean) => {
    if (!next) onClose();
  };

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={handleOpenChange}>
        <DrawerContent className="flex max-h-[92vh] flex-col">
          <DrawerHeader className="shrink-0 px-5 text-left">
            <DrawerTitle className="font-display text-2xl">{flavor?.name}</DrawerTitle>
          </DrawerHeader>
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
            {flavor && <FlavorDetailBody flavor={flavor} />}
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetContent side="right" className="w-full overflow-y-auto sm:max-w-md">
        <SheetHeader className="px-5">
          <SheetTitle className="font-display text-3xl">{flavor?.name}</SheetTitle>
        </SheetHeader>
        {flavor && <FlavorDetailBody flavor={flavor} />}
      </SheetContent>
    </Sheet>
  );
}
