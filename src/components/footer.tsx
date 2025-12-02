export const Footer = () => {
  return (
    <footer className="w-full min-h-20 flex items-center justify-center flex-col gap-2">
      <span className="text-xs text-muted-foreground text-center font-normal">
        <strong>Copyright &copy; {new Date().getFullYear()}</strong> - AI Curation Toolkit, todos os direitos reservados.
      </span>
      <span className="text-sm text-center font-medium">Tubarão - SC, Brasil.</span>
    </footer>
  );
};
