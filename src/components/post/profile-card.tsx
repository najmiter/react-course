import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '@/components/ui/item';
import { Button } from '../ui/button';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ProfileCard() {
  return (
    <div className="space-y-5">
      <Item className="p-0">
        <ItemMedia>
          <Avatar className="size-10">
            <AvatarImage
              className="object-cover"
              src="https://images.unsplash.com/photo-1772107756927-a3975482b1ef?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <AvatarFallback>N</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent className="gap-0">
          <ItemTitle>najmiter</ItemTitle>
          <ItemDescription>CodeMite</ItemDescription>
        </ItemContent>
      </Item>

      <div className="grid grid-cols-3 gap-3 text-center">
        <div>
          <div className="text-sm font-semibold">7,313</div>
          <div className="text-xs">posts</div>
        </div>
        <div>
          <div className="text-sm font-semibold">7,313</div>
          <div className="text-xs">followers</div>
        </div>
        <div>
          <div className="text-sm font-semibold">313</div>
          <div className="text-xs">following</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-px [&>img]:h-20 [&>img]:object-cover [&>img]:w-full">
        <img
          src="https://images.unsplash.com/photo-1772107756927-a3975482b1ef?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1771533679924-8495042032a2?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1772133970786-6a290959d4ed?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <div className="flex items-center gap-2">
        <Button
          className={cn('flex-1', {
            'text-indigo-500 font-bold': 0,
            uppercase: 0,
          })}>
          <MessageCircle />
          message
        </Button>
        <Button className="flex-1" variant="secondary">
          Following
        </Button>
      </div>
    </div>
  );
}
