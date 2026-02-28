import { formatDistanceToNow, subMinutes } from 'date-fns';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Card, CardContent, CardFooter } from '../ui/card';
import ProfileCard from './profile-card';

export default function PostCard() {
  return (
    <Card className="py-3">
      <CardContent className="px-3">
        <img
          src={POST.content.imageUrl}
          alt={POST.content.description}
          width={1000}
          height={1000}
          className="object-cover bg-bottom max-h-120 w-full h-fit overflow-hidden rounded-xl"
        />
      </CardContent>
      <CardFooter className="flex-col items-start gap-2">
        <div>
          <div className="">
            <HoverCard openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
                <span className="font-bold hover:underline cursor-pointer">{POST.content.author}</span>
              </HoverCardTrigger>
              <HoverCardContent className="p-2">
                <ProfileCard />
              </HoverCardContent>
            </HoverCard>
            <span className="text-neutral-200">&nbsp;{POST.content.description}</span>
          </div>
        </div>

        {/* <div>{formatDate(POST.createdAt, 'MM dd yyyy')}</div> */}
        <div className="text-xs text-neutral-500">{formatDistanceToNow(POST.createdAt, { addSuffix: true })}</div>
      </CardFooter>
    </Card>
  );
}

const POST = {
  content: {
    imageUrl:
      'https://images.unsplash.com/photo-1770666796705-6d8d8bdfd44d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Give a shoutout to Volodymyr Dobrovolskyy on social or copy the text below to attribute.',
    author: 'najmiter',
  },
  createdAt: subMinutes(new Date(), 18),
  metadata: {
    likes: 12,
  },
};
