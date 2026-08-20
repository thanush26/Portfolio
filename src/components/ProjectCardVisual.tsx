import React from 'react';

interface ProjectCardVisualProps {
  type: 'aegis' | 'platform' | 'encryption' | 'keylogger' | 'password' | 'cipher';
}

export const ProjectCardVisual: React.FC<ProjectCardVisualProps> = ({ type }) => {
  if (type === 'aegis') {
    return (
      <div className="w-full h-full min-h-[260px] bg-[#0F1012] relative overflow-hidden flex flex-col justify-between p-6 font-mono text-xs text-[#9FA8A3] border border-white/10 group-hover:border-[#D52B32]/40 transition-colors select-none">
        <div className="flex justify-between items-center border-b border-white/10 pb-3">
          <span className="text-[#F4F3EF] font-semibold tracking-wider">AEGISGUARD_DEVSECOPS</span>
          <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-950/30 px-2.5 py-1 rounded-sm border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            WEBSOCKET_STREAMING
          </span>
        </div>
        <div className="space-y-2.5 py-3">
          <div className="flex items-center justify-between text-[11px] p-2.5 bg-white/[0.02] border border-white/5 rounded-sm">
            <span className="text-[#F4F3EF]">01. Vulnerability Inspection</span>
            <span className="text-emerald-400 font-semibold">PASSED [200 OK]</span>
          </div>
          <div className="flex items-center justify-between text-[11px] p-2.5 bg-white/[0.02] border border-white/5 rounded-sm">
            <span className="text-[#F4F3EF]">02. Config Compliance Check</span>
            <span className="text-[#D52B32] font-semibold">IN_PROGRESS (98%)</span>
          </div>
          <div className="flex items-center justify-between text-[11px] p-2.5 bg-[#D52B32]/10 border border-[#D52B32]/30 rounded-sm">
            <span className="text-[#F4F3EF]">Emergency Kill-Switch</span>
            <span className="text-[#D52B32] font-bold">ARMED // READY</span>
          </div>
        </div>
        <div className="flex justify-between items-center text-[10px] text-[#9FA8A3] border-t border-white/10 pt-3">
          <span>NODES: 5 COMPLIANCE STEPS</span>
          <span className="text-[#D52B32] font-semibold">TELEMETRY: ACTIVE</span>
        </div>
      </div>
    );
  }

  if (type === 'platform') {
    return (
      <div className="w-full h-full min-h-[260px] bg-[#0F1012] relative overflow-hidden flex flex-col justify-between p-6 font-mono text-xs text-[#9FA8A3] border border-white/10 group-hover:border-[#D52B32]/40 transition-colors select-none">
        <div className="flex justify-between items-center border-b border-white/10 pb-3">
          <span className="text-[#F4F3EF] font-semibold tracking-wider">DONATION_PLATFORM_CORE</span>
          <span className="px-2.5 py-1 rounded-sm bg-[#D52B32]/10 border border-[#D52B32]/20 text-[#D52B32] text-[10px] font-semibold">
            FASTAPI + REACT
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 py-3">
          <div className="p-3 bg-white/[0.02] border border-white/5 rounded-sm">
            <p className="text-[10px] text-[#9FA8A3]">TOTAL DONATIONS</p>
            <p className="text-lg font-bold text-[#F4F3EF] font-display">$142,850</p>
            <span className="text-[10px] text-emerald-400 font-semibold">RLS SECURED</span>
          </div>
          <div className="p-3 bg-white/[0.02] border border-white/5 rounded-sm">
            <p className="text-[10px] text-[#9FA8A3]">CAMPAIGNS</p>
            <p className="text-lg font-bold text-[#D52B32] font-display">24 VERIFIED</p>
            <span className="text-[10px] text-[#9FA8A3]">AUDITED JWT</span>
          </div>
        </div>
        <div className="p-2.5 bg-black/40 border border-[#D52B32]/30 rounded-sm text-[11px] text-[#9FA8A3] flex items-center justify-between">
          <span className="text-[#F4F3EF]">PostgreSQL Row Level Policy</span>
          <span className="text-[#D52B32] font-semibold">ENFORCED</span>
        </div>
        <div className="flex justify-between items-center text-[10px] text-[#9FA8A3] border-t border-white/10 pt-3">
          <span>AUTH: OAuth2 + JWT Rotation</span>
          <span className="text-[#F4F3EF]">STATUS: ACTIVE</span>
        </div>
      </div>
    );
  }

  if (type === 'encryption') {
    return (
      <div className="w-full h-full min-h-[260px] bg-[#0F1012] relative overflow-hidden flex flex-col justify-between p-6 font-mono text-xs text-[#9FA8A3] border border-white/10 group-hover:border-[#D52B32]/40 transition-colors select-none">
        <div className="flex justify-between items-center border-b border-white/10 pb-3">
          <span className="text-[#F4F3EF] font-semibold tracking-wider">IMAGE_ENCRYPTION_ENGINE</span>
          <span className="text-[10px] text-[#9FA8A3]">PYTHON_NUMPY_PILLOW</span>
        </div>
        <div className="space-y-3 py-2">
          <div className="p-3 border border-[#D52B32]/30 bg-[#D52B32]/5 rounded-sm space-y-1">
            <div className="flex justify-between text-[10px] text-[#D52B32] font-semibold">
              <span>TRANSFORM_METHOD</span>
              <span>XOR_STREAM + 2x2_SWAP</span>
            </div>
            <p className="text-[11px] text-[#F4F3EF] font-mono truncate">
              PIXEL_STREAM: 0x8F ^ 0x3A ➔ 0xB5 [ENCRYPTED]
            </p>
          </div>
          <div className="flex items-center justify-between text-[11px] text-[#9FA8A3] px-2.5 py-1.5 bg-white/[0.02] border border-white/5 rounded-sm">
            <span>ENTROPY_ANALYSIS</span>
            <span className="text-emerald-400 font-semibold">REVERSIBLE // OK</span>
          </div>
        </div>
        <div className="flex justify-between items-center text-[10px] text-[#9FA8A3] border-t border-white/10 pt-3">
          <span>FORMATS: JPG, PNG, BMP</span>
          <span className="text-[#D52B32]">GUI: TKINTER</span>
        </div>
      </div>
    );
  }

  if (type === 'keylogger') {
    return (
      <div className="w-full h-full min-h-[260px] bg-[#0F1012] relative overflow-hidden flex flex-col justify-between p-6 font-mono text-xs text-[#9FA8A3] border border-white/10 group-hover:border-[#D52B32]/40 transition-colors select-none">
        <div className="flex justify-between items-center border-b border-white/10 pb-3">
          <span className="text-[#F4F3EF] font-semibold tracking-wider">KEYLOGGER_RESEARCH_LAB</span>
          <span className="text-[10px] text-[#9FA8A3]">PYNPUT_EVENT_HOOK</span>
        </div>
        <div className="space-y-2 py-3">
          <div className="flex items-center justify-between text-[11px] text-[#9FA8A3] p-2.5 bg-white/[0.02] border border-white/5 rounded-sm">
            <span>Low-Level Keyboard Hook</span>
            <span className="text-amber-400 font-semibold">LISTEN_MODE</span>
          </div>
          <div className="flex items-center justify-between text-[11px] text-[#9FA8A3] p-2.5 bg-white/[0.02] border border-white/5 rounded-sm">
            <span>Encrypted Log Sink</span>
            <span className="text-emerald-400 font-semibold">key_log.txt [LOCAL]</span>
          </div>
        </div>
        <div className="flex justify-between items-center text-[10px] text-[#9FA8A3] border-t border-white/10 pt-3">
          <span>RESEARCH: ETHICAL AUDITING</span>
          <span className="text-[#D52B32] font-semibold">DEFENSE_STUDY</span>
        </div>
      </div>
    );
  }

  if (type === 'password') {
    return (
      <div className="w-full h-full min-h-[260px] bg-[#0F1012] relative overflow-hidden flex flex-col justify-between p-6 font-mono text-xs text-[#9FA8A3] border border-white/10 group-hover:border-[#D52B32]/40 transition-colors select-none">
        <div className="flex justify-between items-center border-b border-white/10 pb-3">
          <span className="text-[#F4F3EF] font-semibold tracking-wider">PASSWORD_STRENGTH_EVAL</span>
          <span className="text-[10px] text-[#9FA8A3]">POLICY_ENTROPY_CHECK</span>
        </div>
        <div className="space-y-2 py-3">
          <div className="flex items-center justify-between text-[11px] p-2.5 bg-emerald-950/20 border border-emerald-500/20 rounded-sm text-[#F4F3EF]">
            <span>Complexity Criteria (5/5)</span>
            <span className="text-emerald-400 font-bold">VERY_STRONG</span>
          </div>
          <div className="p-2.5 bg-white/[0.02] border border-white/5 rounded-sm text-[11px] space-y-1.5 text-[#9FA8A3]">
            <div className="flex justify-between">
              <span>Length (≥ 8)</span>
              <span className="text-[#D52B32] font-semibold">PASS</span>
            </div>
            <div className="flex justify-between">
              <span>Special Chars & Digits</span>
              <span className="text-[#D52B32] font-semibold">PASS</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center text-[10px] text-[#9FA8A3] border-t border-white/10 pt-3">
          <span>AUDIT ENGINE: REGEX + ENTROPY</span>
          <span className="text-[#D52B32]">REMEDIATION_FEEDBACK</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[260px] bg-[#0F1012] relative overflow-hidden flex flex-col justify-between p-6 font-mono text-xs text-[#9FA8A3] border border-white/10 group-hover:border-[#D52B32]/40 transition-colors select-none">
      <div className="flex justify-between items-center border-b border-white/10 pb-3">
        <span className="text-[#F4F3EF] font-semibold tracking-wider">CAESAR_CIPHER_TOOL</span>
        <span className="text-[10px] text-[#9FA8A3]">SHIFT_ALGORITHM</span>
      </div>
      <div className="space-y-2 py-3">
        <div className="p-3 bg-white/[0.02] border border-white/5 rounded-sm text-[11px] space-y-1">
          <p className="text-[10px] text-[#9FA8A3]">INPUT PAYLOAD (SHIFT: +3)</p>
          <p className="text-[#F4F3EF] font-mono">HELLO SECURE WORLD</p>
          <p className="text-[#D52B32] font-mono font-semibold">KHOOR VJFXUH ZRUOG</p>
        </div>
      </div>
      <div className="flex justify-between items-center text-[10px] text-[#9FA8A3] border-t border-white/10 pt-3">
        <span>MODE: ENCRYPT / DECRYPT</span>
        <span className="text-[#D52B32] font-semibold">CLASSICAL_CRYPTO</span>
      </div>
    </div>
  );
};
