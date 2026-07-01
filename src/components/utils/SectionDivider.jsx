export default function SectionDivider() {
  return (
    <div
      style={{
        width: '100%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(0, 220, 130, 0.15) 30%, rgba(6, 182, 212, 0.15) 70%, transparent 100%)',
        margin: '0 auto',
        maxWidth: '1200px',
      }}
    />
  );
}
