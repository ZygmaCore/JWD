import { GalleryLightbox } from '@/components/gallery-lightbox';
import { GalleryVertical } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center mb-12">
          <GalleryVertical className="w-16 h-16 text-primary mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Our School Gallery</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              A glimpse into the vibrant life at JWD Ahh School. Click on any image to view it larger.
          </p>
      </div>
      <GalleryLightbox />
    </div>
  );
}
