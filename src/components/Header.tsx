import { BookOpen, Calendar, HelpCircle, BarChart2, RefreshCw } from 'lucide-react';

interface HeaderProps {
  onOpenHelp: () => void;
  onOpenStats: () => void;
  onOpenArchive: () => void;
  isArchivePlay: boolean;
  archiveDate?: string;
  onResetDaily: () => void;
  puzzleNumber: number;
}

export default function Header({
  onOpenHelp,
  onOpenStats,
  onOpenArchive,
  isArchivePlay,
  archiveDate,
  onResetDaily,
  puzzleNumber
}: HeaderProps) {
  return (
    <header className="border-b border-amber-100/20 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40 px-4 py-3">
      <div className="max-w-md mx-auto flex items-center justify-between">
        
        {/* Left Side: Brand Action or Reset */}
        <div className="flex items-center gap-1.5">
          {isArchivePlay ? (
            <button
              onClick={onResetDaily}
              className="flex items-center gap-1.5 text-xs font-semibold bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 rounded-full px-2.5 py-1 transition-all"
              title="Return to Today's Daily Puzzle"
              id="return-to-today-btn"
            >
              <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" />
              <span>Go Today</span>
            </button>
          ) : (
            <button
              onClick={onOpenArchive}
              className="p-2 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-900 transition-colors"
              title="Play Past Puzzles"
              id="open-archive-header-btn"
            >
              <Calendar className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Center: Branding */}
        <div className="text-center flex-1 flex flex-col items-center">
          <div className="flex items-center gap-1">
            <span className="text-[10px] uppercase tracking-wider text-amber-400/80 font-bold font-mono">
              Sozique Christian Network
            </span>
          </div>
          <h1 className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
              BIBLE WORDVERSE
            </span>
            <span className="text-xs bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1.5 py-0.5 rounded-md font-mono">
              #{puzzleNumber}
            </span>
          </h1>
          {isArchivePlay && archiveDate && (
            <span className="text-[10px] font-semibold text-amber-400 bg-amber-950/40 border border-amber-900/40 px-2 py-0.5 rounded mt-0.5 animate-pulse">
              Archive Play: {new Date(archiveDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
          )}
        </div>

        {/* Right Side: Modals */}
        <div className="flex items-center gap-1">
          <button
            onClick={onOpenHelp}
            className="p-2 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-900 transition-colors"
            title="How to Play"
            id="open-help-btn"
          >
            <HelpCircle className="w-5 h-5" />
          </button>
          <button
            onClick={onOpenStats}
            className="p-2 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-900 transition-colors"
            title="Statistics & Devotion"
            id="open-stats-btn"
          >
            <BarChart2 className="w-5 h-5" />
          </button>
        </div>
        
      </div>
    </header>
  );
}
