import React from 'react';

interface ProjectCardVisualProps {
  type: 'aegis' | 'platform' | 'encryption' | 'keylogger' | 'password' | 'cipher';
}

export const ProjectCardVisual: React.FC<ProjectCardVisualProps> = ({ type }) => {
  if (type === 'aegis') {
    return (
      <div className="w-full h-full min-h-[260px] bg-[#0d0e12] relative overflow-hidden flex flex-col justify-between p-6 font-mono text-xs text-[#8a9a5b]/80 border border-white/5 group-hover:border-[#8a9a5b]/30 transition-colors">
        <div className="flex justify-between items-center border-b border-white/10 pb-3">
          <span className="text-[#8a9a5b] font-bold">AEGISGUARD_DEVSECOPS</span>
          <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            WEBSOCKET_STREAMING
          </span>
        </div>
        <div className="space-y-2.5 py-3">
          <div className="flex items-center justify-between text-[11px] p-2 bg-white/[0.02] border border-white/5 rounded">
            <span className="text-[#f4f3ef]">01. Vulnerability Inspection</span>
            <span className="text-emerald-400 font-bold">PASSED [200 OK]</span>
          </div>
          <div className="flex items-center justify-between text-[11px] p-2 bg-white/[0.02] border border-white/5 rounded">
            <span className="text-[#f4f3ef]">02. Config Compliance Check</span>
            <span className="text-[#8a9a5b] font-bold">IN_PROGRESS (98%)</span>
          </div>
          <div className="flex items-center justify-between text-[11px] p-2 bg-rose-950/20 border border-rose-500/20 rounded">
            <span className="text-rose-300">Emergency Kill-Switch</span>
            <span className="text-rose-400 font-bold font-mono">ARMED // READY</span>
          </div>
        </div>
        <div className="flex justify-between items-center text-[10px] text-[#9a9996] border-t border-white/10 pt-3">
          <span>NODES: 5 COMPLIANCE STEPS</span>
          <span className="text-[#8a9a5b]">TELEMETRY: ACTIVE</span>
        </div>
      </div>
    );
  }

  if (type === 'platform') {
    return (
      <div className="w-full h-full min-h-[260px] bg-[#0d0e12] relative overflow-hidden flex flex-col justify-between p-6 font-mono text-xs border border-white/5 group-hover:border-[#8a9a5b]/30 transition-colors">
        <div className="flex justify-between items-center border-b border-white/10 pb-3">
          <span className="text-[#8a9a5b] font-bold">DONATION_PLATFORM_CORE</span>
          <span className="px-2 py-0.5 rounded bg-[#8a9a5b]/20 text-[#8a9a5b] text-[10px]">FASTAPI + REACT</span>
        </div>
        <div className="grid grid-cols-2 gap-3 py-3">
          <div className="p-3 bg-white/[0.02] border border-white/5 rounded">
            <p className="text-[10px] text-[#9a9996]">TOTAL DONATIONS</p>
            <p className="text-lg font-bold text-[#f4f3ef] font-display">$142,850</p>
            <span className="text-[10px] text-emerald-400">RLS SECURED</span>
          </div>
          <div className="p-3 bg-white/[0.02] border border-white/5 rounded">
            <p className="text-[10px] text-[#9a9996]">CAMPAIGNS</p>
            <p className="text-lg font-bold text-[#8a9a5b] font-display">24 VERIFIED</p>
            <span className="text-[10px] text-[#9a9996]">AUDITED JWT</span>
          </div>
        </div>
        <div className="p-2.5 bg-black/40 border border-[#8a9a5b]/30 rounded text-[11px] text-[#9a9996] flex items-center justify-between">
          <span className="text-[#f4f3ef]">PostgreSQL Row Level Policy</span>
          <span className="text-[#8a9a5b]">ENFORCED</span>
        </div>
        <div className="flex justify-between items-center text-[10px] text-[#9a9996] border-t border-white/10 pt-3">
          <span>AUTH: OAuth2 + JWT Rotation</span>
          <span>STATUS: ACTIVE</span>
        </div>
      </div>
    );
  }

  if (type === 'encryption') {
    return (
      <div className="w-full h-full min-h-[260px] bg-[#0d0e12] relative overflow-hidden flex flex-col justify-between p-6 font-mono text-xs border border-white/5 group-hover:border-[#8a9a5b]/30 transition-colors">
        <div className="flex justify-between items-center border-b border-white/10 pb-3">
          <span className="text-[#8a9a5b] font-bold">IMAGE_ENCRYPTION_ENGINE</span>
          <span className="text-[10px] text-[#9a9996]">PYTHON_NUMPY_PILLOW</span>
        </div>
        <div className="space-y-3 py-2">
          <div className="p-3 border border-[#8a9a5b]/30 bg-[#8a9a5b]/5 rounded space-y-1">
            <div className="flex justify-between text-[10px] text-[#8a9a5b]">
              <span>TRANSFORM_METHOD</span>
              <span>XOR_STREAM + 2x2_SWAP</span>
            </div>
            <p className="text-[11px] text-[#f4f3ef] font-mono truncate">
              PIXEL_STREAM: 0x8F ^ 0x3A ➔ 0xB5 [ENCRYPTED]
            </p>
          </div>
          <div className="flex items-center justify-between text-[11px] text-[#9a9996] px-2 py-1 bg-white/[0.02] rounded">
            <span>ENTROPY_ANALYSIS</span>
            <span className="text-emerald-400">REVERSIBLE // OK</span>
          </div>
        </div>
        <div className="flex justify-between items-center text-[10px] text-[#9a9996] border-t border-white/10 pt-3">
          <span>FORMATS: JPG, PNG, BMP</span>
          <span className="text-[#8a9a5b]">GUI: TKINTER</span>
        </div>
      </div>
    );
  }

  if (type === 'keylogger') {
    return (
      <div className="w-full h-full min-h-[260px] bg-[#0d0e12] relative overflow-hidden flex flex-col justify-between p-6 font-mono text-xs border border-white/5 group-hover:border-[#8a9a5b]/30 transition-colors">
        <div className="flex justify-between items-center border-b border-white/10 pb-3">
          <span className="text-[#8a9a5b] font-bold">KEYLOGGER_RESEARCH_LAB</span>
          <span className="text-[10px] text-[#9a9996]">PYNPUT_EVENT_HOOK</span>
        </div>
        <div className="space-y-2 py-3">
          <div className="flex items-center justify-between text-[11px] text-[#9a9996] p-2 bg-white/[0.02] border border-white/5 rounded">
            <span>Low-Level Keyboard Hook</span>
            <span className="text-amber-400">LISTEN_MODE</span>
          </div>
          <div className="flex items-center justify-between text-[11px] text-[#9a9996] p-2 bg-white/[0.02] border border-white/5 rounded">
            <span>Encrypted Log Sink</span>
            <span className="text-emerald-400">key_log.txt [LOCAL]</span>
          </div>
        </div>
        <div className="flex justify-between items-center text-[10px] text-[#9a9996] border-t border-white/10 pt-3">
          <span>RESEARCH: ETHICAL AUDITING</span>
          <span className="text-[#8a9a5b]">DEFENSE_STUDY</span>
        </div>
      </div>
    );
  }

  if (type === 'password') {
    return (
      <div className="w-full h-full min-h-[260px] bg-[#0d0e12] relative overflow-hidden flex flex-col justify-between p-6 font-mono text-xs border border-white/5 group-hover:border-[#8a9a5b]/30 transition-colors">
        <div className="flex justify-between items-center border-b border-white/10 pb-3">
          <span className="text-[#8a9a5b] font-bold">PASSWORD_STRENGTH_EVAL</span>
          <span className="text-[10px] text-[#9a9996]">POLICY_ENTROPY_CHECK</span>
        </div>
        <div className="space-y-2 py-3">
          <div className="flex items-center justify-between text-[11px] p-2 bg-emerald-950/20 border border-emerald-500/20 rounded text-[#f4f3ef]">
            <span>Complexity Criteria (5/5)</span>
            <span className="text-emerald-400 font-bold">VERY_STRONG</span>
          </div>
          <div className="p-2 bg-white/[0.02] border border-white/5 rounded text-[11px] space-y-1 text-[#9a9996]">
            <div className="flex justify-between">
              <span>Length (≥ 8)</span>
              <span className="text-[#8a9a5b]">PASS</span>
            </div>
            <div className="flex justify-between">
              <span>Special Chars & Digits</span>
              <span className="text-[#8a9a5b]">PASS</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center text-[10px] text-[#9a9996] border-t border-white/10 pt-3">
          <span>AUDIT ENGINE: REGEX + ENTROPY</span>
          <span className="text-[#8a9a5b]">REMEDIATION_FEEDBACK</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[260px] bg-[#0d0e12] relative overflow-hidden flex flex-col justify-between p-6 font-mono text-xs border border-white/5 group-hover:border-[#8a9a5b]/30 transition-colors">
      <div className="flex justify-between items-center border-b border-white/10 pb-3">
        <span className="text-[#8a9a5b] font-bold">CAESAR_CIPHER_TOOL</span>
        <span className="text-[10px] text-[#9a9996]">SHIFT_ALGORITHM</span>
      </div>
      <div className="space-y-2 py-3">
        <div className="p-3 bg-white/[0.02] border border-white/5 rounded text-[11px] space-y-1">
          <p className="text-[10px] text-[#9a9996]">INPUT PAYLOAD (SHIFT: +3)</p>
          <p className="text-[#f4f3ef] font-mono">HELLO SECURE WORLD</p>
          <p className="text-[#8a9a5b] font-mono">KHOOR VJFXUH ZRUOG</p>
        </div>
      </div>
      <div className="flex justify-between items-center text-[10px] text-[#9a9996] border-t border-white/10 pt-3">
        <span>MODE: ENCRYPT / DECRYPT</span>
        <span className="text-[#8a9a5b]">CLASSICAL_CRYPTO</span>
      </div>
    </div>
  );
};
