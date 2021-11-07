const CodePatch = ({ formattedLines }: { formattedLines?: string[] }) => {
  return (
    <section id="code-patch" className="bg-white dark:bg-gray-900 py-8">
      <div
        className="container mx-auto px-2"
        dangerouslySetInnerHTML={{ __html: formattedLines?.join('') ?? '' }}
      />
    </section>
  );
};

export default CodePatch;
