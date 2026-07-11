"use client";

import { useState } from "react";
import { FaTimes, FaDownload, FaSearchPlus, FaSearchMinus, FaExpand } from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";

const PDFViewer = ({ onClose, pdfUrl, title = "Course Overview" }) => {
  const [zoom, setZoom] = useState(100);

  const src = pdfUrl || "https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1";

  const handleZoomIn  = () => setZoom((z) => Math.min(z + 10, 200));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 10, 50));

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#1a1a2e]">

      {/* ── TOP BAR ── */}
      <div className="flex-shrink-0 flex items-center justify-between px-5 py-3 bg-[#243C96] shadow-lg">

        {/* Left: icon + title */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
            <AiOutlineFileText className="text-white text-[18px]" />
          </div>
          <div>
            <p className="text-white font-semibold text-[14px] leading-tight">{title}</p>
            <p className="text-white/60 text-[11px]">Course Material · PDF</p>
          </div>
        </div>

        {/* Right: zoom controls + download + close */}
        <div className="flex items-center gap-2">

          {/* Zoom out */}
          <button
            onClick={handleZoomOut}
            disabled={zoom <= 50}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            title="Zoom Out"
          >
            <FaSearchMinus size={13} />
          </button>

          {/* Zoom level */}
          <span className="text-white/80 text-[12px] font-semibold w-12 text-center">
            {zoom}%
          </span>

          {/* Zoom in */}
          <button
            onClick={handleZoomIn}
            disabled={zoom >= 200}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            title="Zoom In"
          >
            <FaSearchPlus size={13} />
          </button>

          <div className="w-px h-6 bg-white/20 mx-1" />

          {/* Download */}
          {pdfUrl && (
            <a
              href={pdfUrl}
              download
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition cursor-pointer"
              title="Download PDF"
            >
              <FaDownload size={13} />
            </a>
          )}

          {/* Close */}
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 text-white hover:bg-rose-500 transition cursor-pointer ml-1"
            title="Close"
          >
            <FaTimes size={13} />
          </button>
        </div>
      </div>

      {/* ── PDF AREA ── */}
      <div className="flex-1 overflow-hidden flex items-start justify-center bg-[#2d2d44] py-4 px-4">
        <div
          className="w-full h-full rounded-xl overflow-hidden shadow-2xl transition-all duration-300 origin-top"
          style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center" }}
        >
          {pdfUrl ? (
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
              className="w-full h-full border-0"
              title={title}
            />
          ) : (
            /* Placeholder when no URL is provided */
            <div className="w-full h-full bg-white flex flex-col items-center justify-center gap-4 rounded-xl">
              <div className="w-20 h-20 rounded-2xl bg-[#E8F0FE] flex items-center justify-center">
                <AiOutlineFileText className="text-[#3A57E8] text-[40px]" />
              </div>
              <div className="text-center">
                <p className="text-[18px] font-bold text-gray-800">{title}</p>
                <p className="text-[13px] text-gray-400 mt-1">PDF will be loaded here</p>
              </div>
              <div className="mt-2 px-6 py-3 rounded-xl border-2 border-dashed border-gray-200 text-[12px] text-gray-400 text-center max-w-[260px]">
                Pass a <code className="bg-gray-100 px-1 rounded">pdfUrl</code> prop to display the actual PDF document.
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default PDFViewer;
