"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

const images = [
  { src: 'https://anatajir.id/asset/foto_produk/IMG_20240327_074952.jpg', alt: 'icikiwir', hint: 'icikiwir' },
  { src: 'https://anatajir.id/asset/foto_produk/IMG_20240327_074952.jpg', alt: 'icikiwir', hint: 'icikiwir' },
  { src: 'https://anatajir.id/asset/foto_produk/IMG_20240327_074952.jpg', alt: 'icikiwir', hint: 'icikiwir' },
  { src: 'https://anatajir.id/asset/foto_produk/IMG_20240327_074952.jpg', alt: 'icikiwir', hint: 'icikiwir' },
  { src: 'https://anatajir.id/asset/foto_produk/IMG_20240327_074952.jpg', alt: 'icikiwir', hint: 'icikiwir' },
  { src: 'https://anatajir.id/asset/foto_produk/IMG_20240327_074952.jpg', alt: 'icikiwir', hint: 'icikiwir' },
  { src: 'https://anatajir.id/asset/foto_produk/IMG_20240327_074952.jpg', alt: 'icikiwir', hint: 'icikiwir' },
  { src: 'https://anatajir.id/asset/foto_produk/IMG_20240327_074952.jpg', alt: 'icikiwir', hint: 'icikiwir' },
  { src: 'https://anatajir.id/asset/foto_produk/IMG_20240327_074952.jpg', alt: 'icikiwir', hint: 'icikiwir' },
];


export function GalleryLightbox() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (src: string) => {
    setSelectedImage(src);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              'overflow-hidden rounded-lg shadow-lg cursor-pointer group relative',
              index === 1 || index === 4 || index === 8 ? 'md:col-span-1 md:row-span-2' : ''
            )}
            onClick={() => openLightbox(image.src)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={index === 1 || index === 4 || index === 8 ? 800 : 400}
              data-ai-hint={image.hint}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && closeLightbox()}>
        <DialogContent className="max-w-4xl p-0 border-0 bg-transparent shadow-none">
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="Enlarged gallery view"
              width={1200}
              height={800}
              className="rounded-lg w-full h-auto object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
