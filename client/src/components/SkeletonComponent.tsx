import React from 'react'
import { Skeleton } from './ui/skeleton';

const SkeletonComponent = () => {
  return <div className="space-y-4">
              <Skeleton className="w-full h-[20vh]" />
              <div className='grid gap-4 grid-cols-[1.5fr_1fr]'>
                <Skeleton className="w-full h-[16vh]" />
                <Skeleton className="w-full h-[16vh]" />
              </div>
              <Skeleton className="w-full h-[16vh]" />
          </div>;
}

export default SkeletonComponent