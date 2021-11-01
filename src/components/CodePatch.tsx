const CodePatch = ({ formattedLines }: { formattedLines?: string[] }) => {
  return (
    <section id="code-patch">
      <div
        className="tw-container tw-mx-auto tw-px-2 tw-mt-8"
        dangerouslySetInnerHTML={{ __html: formattedLines?.join('') ?? '' }}
      />
    </section>
  );
};

export default CodePatch;
