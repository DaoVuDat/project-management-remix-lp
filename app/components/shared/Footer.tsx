import { Container } from "./Container";

export function Footer({ className }: { className?: string; id?: string }) {
  return (
    <Container className={className}>
      <div className="border-t border-slate-400 " />
      <div className="py-8">
        <div className="text-center text-sm">
          Built by Dat Dao Vu - {new Date().getFullYear()}
        </div>
      </div>
    </Container>
  );
}
