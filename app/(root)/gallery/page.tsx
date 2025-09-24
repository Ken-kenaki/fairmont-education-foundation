"use client";
import React, { useEffect, useState, useMemo } from "react";
import { X, Search, Grid, List, Eye } from "lucide-react";
import Image from "next/image";

interface GalleryImage {
  name: string;
  url: string;
}

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isLoading, setIsLoading] = useState(true);

  // Static images from public folder
  const staticImages = [
    { name: "Our student's departure to Japan", url: "/connect-1.jpg" },
    { name: "Our student's departure to Japan", url: "/connect-2.jpg" },
    { name: "Our student's departure to Japan", url: "/connect-3.jpg" },
    { name: "Our student's departure to Japan", url: "/connect-4.jpg" },
    { name: "Japan", url: "/japan.jpg" },
    { name: "Australia", url: "/australia.jpg" },
    { name: "UK", url: "/uk.jpg" },
  ];

  useEffect(() => {
    // Simulate loading with static data
    const timer = setTimeout(() => {
      setImages(staticImages);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Memoize filtered images for performance
  const filteredImages = useMemo(() => {
    if (searchTerm.trim() === "") return images;
    return images.filter((img) =>
      img.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [images, searchTerm]);

  const openModal = (url: string) => setSelectedImage(url);
  const closeModal = (e?: React.MouseEvent | KeyboardEvent) => {
    if (e) e.stopPropagation();
    setSelectedImage(null);
  };

  // Keyboard accessibility: close modal on ESC
  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeModal();
      }
    }
    if (selectedImage) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedImage]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#1E165F] via-[#0f0d30] to-[#AE1418]">
        <div className="text-center">
          <div className="animate-spin h-12 w-12 rounded-full border-4 border-[#AE1418] border-t-transparent mx-auto mb-4" />
          <p className="text-white text-lg">Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="overflow-x-hidden">
      <div className="w-full max-w-[100vw] min-h-screen pt-52 bg-gradient-to-br from-[#1E165F] via-[#0f0d30] to-[#AE1418]">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-12">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-white to-[#FFD700] bg-clip-text text-transparent mb-6 drop-shadow-2xl">
              Visual Gallery
            </h1>
            <p className="text-gray-200 text-xl max-w-2xl mx-auto leading-relaxed">
              Immerse yourself in a curated collection of stunning visuals and captivating moments
            </p>
          </header>

          {/* Stats and View Mode */}
          <section className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl mb-8 flex flex-wrap justify-between items-center gap-6 border border-white/20">
            <div className="flex gap-8 items-center text-white">
              <div className="flex gap-3 items-center">
                <Eye className="w-5 h-5 text-[#FFD700]" />
                <span className="text-lg">Total Images:</span>
                <strong className="text-2xl text-[#FFD700]">{images.length}</strong>
              </div>
              <div className="flex gap-3 items-center">
                <Search className="w-5 h-5 text-[#00C2FF]" />
                <span className="text-lg">Filtered:</span>
                <strong className="text-2xl text-[#00C2FF]">{filteredImages.length}</strong>
              </div>
            </div>
            <div
              className="flex gap-1 bg-black/30 p-2 rounded-xl backdrop-blur-sm border border-white/10"
              role="group"
              aria-label="View mode toggle"
            >
              <button
                onClick={() => setViewMode("grid")}
                aria-pressed={viewMode === "grid"}
                className={`p-3 rounded-lg transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-[#AE1418] shadow-lg text-white transform scale-105"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
                aria-label="Grid view"
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                aria-pressed={viewMode === "list"}
                className={`p-3 rounded-lg transition-all duration-300 ${
                  viewMode === "list"
                    ? "bg-[#AE1418] shadow-lg text-white transform scale-105"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
                aria-label="List view"
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </section>

          {/* Search Bar */}
          <div className="mb-12 max-w-2xl mx-auto relative">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#AE1418]"
              aria-hidden="true"
            />
            <input
              type="search"
              aria-label="Search images"
              placeholder="Search by image name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-gray-300 focus:border-[#AE1418] focus:ring-2 focus:ring-[#AE1418] outline-none shadow-lg text-lg"
            />
          </div>

          {/* Images Display */}
          {filteredImages.length === 0 ? (
            <div
              className="text-center py-24 bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10"
              role="status"
              aria-live="polite"
            >
              <Search
                className="w-16 h-16 text-[#AE1418] mx-auto mb-4 opacity-60"
                aria-hidden="true"
              />
              <p className="text-xl text-gray-300 mb-2">No images found</p>
              <p className="text-gray-400">Try adjusting your search terms</p>
            </div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
                  : "space-y-6"
              }
            >
              {filteredImages.map((img, index) => (
                <article
                  key={img.url}
                  tabIndex={0}
                  role="button"
                  onClick={() => openModal(img.url)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openModal(img.url);
                    }
                  }}
                  className={`cursor-pointer group transition-all duration-500 focus:outline-none focus:ring-3 focus:ring-[#AE1418] focus:ring-offset-2 focus:ring-offset-[#1E165F] ${
                    viewMode === "grid"
                      ? "bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl hover:scale-105 hover:shadow-2xl border border-white/10 hover:border-white/20"
                      : "bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl p-6 flex items-center gap-6 hover:scale-[1.02] border border-white/10"
                  }`}
                  aria-label={`View image ${img.name}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {viewMode === "grid" ? (
                    <>
                      <div className="relative h-64 w-full overflow-hidden">
                        <Image
                          src={img.url}
                          alt={img.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "/placeholder.jpg";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-4 text-center">
                        <p className="text-white font-semibold truncate text-sm group-hover:text-[#FFD700] transition-colors">
                          {img.name}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={img.url}
                          alt={img.name}
                          fill
                          className="object-cover"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "/placeholder.jpg";
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-white text-lg truncate mb-1 group-hover:text-[#FFD700] transition-colors">
                          {img.name}
                        </p>
                        <p className="text-gray-300 text-sm">Click to view full image</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-3 h-3 rounded-full bg-[#AE1418] animate-pulse" />
                      </div>
                    </>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Modal */}
        {selectedImage && (
          <aside
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Selected image preview"
            tabIndex={-1}
            onClick={closeModal}
          >
            <div
              className="relative max-w-6xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                aria-label="Close image preview"
                className="absolute -top-16 right-0 bg-[#AE1418] rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-white hover:scale-110 transition-transform z-10"
              >
                <X className="text-white w-6 h-6" />
              </button>
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={selectedImage}
                  alt="Selected image preview"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain max-h-[80vh]"
                  loading="eager"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder.jpg";
                  }}
                />
              </div>
            </div>
          </aside>
        )}
      </div>
    </main>
  );
}