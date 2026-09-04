import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Progress } from '../feedback/Progress.jsx';
import { Button } from '../core/Button.jsx';
/** Intentional addition: drag-and-drop upload zone with an accept hint, plus file rows (name · size, progress bar while uploading, red error line when rejected). files: [{id, name, size, progress?, error?}]. */
export function FileUpload({ files = [], onFiles, onRemove, accept = '.pdf,.docx', hint = 'PDF or DOCX · up to 10 MB each', multiple = true, disabled, style }) {
  const [over, setOver] = React.useState(false);
  const inputRef = React.useRef(null);
  const drop = e => { e.preventDefault(); setOver(false); if (disabled) return; onFiles && onFiles(Array.from(e.dataTransfer.files || [])); };
  return (
    <div style={style}>
      <div onDragOver={e => { e.preventDefault(); setOver(true); }} onDragLeave={() => setOver(false)} onDrop={drop} onClick={() => !disabled && inputRef.current && inputRef.current.click()} role="button" tabIndex={0}
        style={{ border: `1px dashed ${over ? 'var(--action-primary)' : 'var(--border-strong)'}`, background: over ? 'var(--bg-brand-light)' : 'var(--bg2)', borderRadius: 'var(--r-md)', padding: '22px 16px', textAlign: 'center', cursor: disabled ? 'not-allowed' : 'pointer', transition: 'background var(--t-fast),border-color var(--t-fast)', opacity: disabled ? .5 : 1 }}>
        <Icon name="download" size={22} style={{ color: over ? 'var(--action-primary)' : 'var(--fg4)', display: 'block', margin: '0 auto 8px', transform: 'rotate(180deg)' }} />
        <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--fg1)' }}>Drop files here or <span style={{ color: 'var(--itso-blue-dark)' }}>browse</span></div>
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--fg3)', marginTop: 4 }}>{hint}</div>
        <input ref={inputRef} type="file" accept={accept} multiple={multiple} style={{ display: 'none' }} onChange={e => { onFiles && onFiles(Array.from(e.target.files || [])); e.target.value = ''; }} />
      </div>
      {files.length > 0 && <div style={{ marginTop: 10, display: 'grid', gap: 8 }}>{files.map(f => <FileRow key={f.id ?? f.name} f={f} onRemove={onRemove} />)}</div>}
    </div>
  );
}
function fmt(bytes) { if (bytes == null) return ''; if (bytes < 1024) return bytes + ' B'; if (bytes < 1048576) return (bytes / 1024).toFixed(0) + ' KB'; return (bytes / 1048576).toFixed(1) + ' MB'; }
function FileRow({ f, onRemove }) {
  const uploading = f.progress != null && f.progress < 100 && !f.error;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: f.error ? 'var(--tint-danger-bg)' : 'var(--bg1)', border: `1px solid ${f.error ? 'var(--tint-danger-border)' : 'var(--border)'}`, borderRadius: 'var(--r-md)' }}>
      <Icon name={f.error ? 'circle-alert' : 'file-text'} size={18} style={{ color: f.error ? 'var(--danger)' : 'var(--fg3)' }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, fontSize: 'var(--text-sm)' }}><span style={{ fontWeight: 600, color: f.error ? 'var(--tint-danger-fg)' : 'var(--fg1)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.name}</span>{f.size != null && <span style={{ color: 'var(--fg3)', fontSize: 'var(--text-xs)', flex: 'none' }}>{fmt(f.size)}</span>}</div>
        {uploading && <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 6 }}><Progress value={f.progress} width={160} /><span style={{ fontSize: 'var(--text-xs)', color: 'var(--fg3)' }}>{Math.round(f.progress)}%</span></div>}
        {f.error && <div style={{ fontSize: 'var(--text-xs)', color: 'var(--tint-danger-fg)', marginTop: 2 }}>{f.error}</div>}
        {!uploading && !f.error && f.progress === 100 && <div style={{ fontSize: 'var(--text-xs)', color: 'var(--tint-success-fg)', marginTop: 2, display: 'inline-flex', alignItems: 'center', gap: 4 }}><Icon name="check" size={12} />Uploaded</div>}
      </div>
      {onRemove && <Button variant="link" size="sm" icon={f.error ? 'x' : 'trash-2'} onClick={() => onRemove(f)} style={{ color: f.error ? 'var(--tint-danger-fg)' : undefined, flex: 'none' }}>{f.error ? 'Dismiss' : 'Remove'}</Button>}
    </div>
  );
}
