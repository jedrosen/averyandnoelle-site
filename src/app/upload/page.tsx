"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

type UploadStatus = { file: string; done: boolean; error: boolean };

export default function Upload() {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [statuses, setStatuses] = useState<UploadStatus[]>([]);
  const [done, setDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const addFiles = (incoming: FileList | null) => {
    if (!incoming) return;
    const images = Array.from(incoming).filter((f) => f.type.startsWith("image/"));
    setFiles((prev) => [...prev, ...images]);
    images.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) =>
        setPreviews((prev) => [...prev, e.target?.result as string]);
      reader.readAsDataURL(file);
    });
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    addFiles(e.dataTransfer.files);
  }, []);

  const removeFile = (i: number) => {
    setFiles((prev) => prev.filter((_, idx) => idx !== i));
    setPreviews((prev) => prev.filter((_, idx) => idx !== i));
  };

  const handleUpload = async () => {
    setUploading(true);
    setStatuses(files.map((f) => ({ file: f.name, done: false, error: false })));

    for (let i = 0; i < files.length; i++) {
      try {
        const formData = new FormData();
        formData.append("file", files[i]);
        const res = await fetch("/api/upload", { method: "POST", body: formData });
        if (!res.ok) throw new Error();
        setStatuses((prev) =>
          prev.map((s, idx) => (idx === i ? { ...s, done: true } : s))
        );
      } catch {
        setStatuses((prev) =>
          prev.map((s, idx) => (idx === i ? { ...s, error: true } : s))
        );
      }
    }

    setUploading(false);
    setDone(true);
  };

  const reset = () => {
    setFiles([]);
    setPreviews([]);
    setStatuses([]);
    setDone(false);
  };

  if (done) {
    const failed = statuses.filter((s) => s.error).length;
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4">{failed === 0 ? "🎉" : "⚠️"}</div>
        <h2 className="font-serif text-4xl font-bold text-stone-800 mb-3">
          {failed === 0 ? "Photos Uploaded!" : "Mostly Done"}
        </h2>
        <p className="text-stone-500 mb-2">
          {statuses.length - failed} photo{statuses.length - failed !== 1 ? "s" : ""} added to the gallery.
        </p>
        {failed > 0 && (
          <p className="text-red-400 text-sm mb-2">{failed} photo{failed !== 1 ? "s" : ""} failed to upload.</p>
        )}
        <button
          onClick={reset}
          className="mt-6 px-8 py-3 bg-stone-800 text-white text-sm uppercase tracking-widest hover:bg-stone-700 transition-colors"
        >
          Upload More
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <p className="text-stone-400 uppercase tracking-[0.3em] text-xs mb-3">
          Share the Memories
        </p>
        <h1 className="font-serif text-5xl font-bold text-stone-800">
          Upload Photos
        </h1>
        <p className="text-stone-500 mt-3 text-sm">
          Your photos will appear in the gallery for everyone to enjoy.
        </p>
      </div>

      {/* Drop zone */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onClick={() => inputRef.current?.click()}
        className={`border-2 border-dashed rounded-xl p-16 text-center cursor-pointer transition-colors mb-6 ${
          dragging
            ? "border-stone-400 bg-stone-50"
            : "border-stone-200 hover:border-stone-300 hover:bg-stone-50"
        }`}
      >
        <div className="text-5xl mb-3">📸</div>
        <p className="text-stone-700 font-medium mb-1">
          Drop photos here or click to select
        </p>
        <p className="text-stone-400 text-sm">JPG, PNG, WEBP, HEIC · Multiple files supported</p>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => addFiles(e.target.files)}
        />
      </div>

      {/* Previews */}
      {previews.length > 0 && (
        <div className="mb-6">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-4">
            {previews.map((src, i) => (
              <div key={i} className="relative aspect-square rounded-lg overflow-hidden bg-stone-100 group">
                <Image src={src} alt={`Preview ${i + 1}`} fill className="object-cover" />
                {!uploading && (
                  <button
                    onClick={(e) => { e.stopPropagation(); removeFile(i); }}
                    className="absolute top-1 right-1 w-5 h-5 bg-black/60 text-white rounded-full text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    ×
                  </button>
                )}
                {uploading && statuses[i] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-xl">
                    {statuses[i].done ? "✓" : statuses[i].error ? "✗" : "⋯"}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-stone-400 text-sm mb-4">
              {files.length} photo{files.length !== 1 ? "s" : ""} selected
            </p>
            <button
              onClick={handleUpload}
              disabled={uploading}
              className="px-10 py-4 bg-stone-800 text-white text-sm uppercase tracking-widest hover:bg-stone-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {uploading
                ? `Uploading ${statuses.filter((s) => s.done || s.error).length} / ${files.length}...`
                : `Upload ${files.length} Photo${files.length !== 1 ? "s" : ""}`}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
